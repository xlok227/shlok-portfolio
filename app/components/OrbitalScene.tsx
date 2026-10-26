"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 displaced = position;
    float wave = sin(position.y * 4.0 + uTime * 0.55) * 0.035;
    wave += sin(position.x * 5.0 - uTime * 0.42) * 0.025;
    wave += sin((position.x + position.z) * 3.0 + uTime * 0.3) * 0.025;
    displaced += normal * wave;
    vNormal = normalize(normalMatrix * normal);
    vPosition = displaced;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDirection = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.4);
    float bands = sin(vPosition.y * 23.0 + sin(vPosition.x * 8.0 + uTime * 0.25) * 1.6);
    float grain = fract(sin(dot(vUv * 740.0, vec2(12.9898, 78.233))) * 43758.5453);
    float light = max(dot(normal, normalize(vec3(-0.4, 0.7, 1.0))), 0.0);
    vec3 deep = vec3(0.025, 0.04, 0.025);
    vec3 silver = vec3(0.46, 0.48, 0.5);
    vec3 ivory = vec3(0.86, 0.86, 0.83);
    vec3 color = mix(deep, silver, smoothstep(-0.75, 0.8, bands) * 0.72);
    color += ivory * fresnel * 0.7;
    color += silver * light * 0.18;
    color += uPointer.xyx * 0.009;
    color += (grain - 0.5) * 0.025;
    gl_FragColor = vec4(color, 0.92);
  }
`;

type OrbitalSceneProps = {
  className?: string;
};

export default function OrbitalScene({ className = "" }: OrbitalSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (error) {
      console.error("Unable to initialize the portfolio WebGL scene.", error);
      container.dataset.failed = "true";
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.z = 5.4;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(1.22, 96, 72),
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uPointer: { value: new THREE.Vector2() },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
      }),
    );
    scene.add(orb);

    const rings = [0, 1].map((index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(index === 0 ? 1.62 : 1.83, 0.003, 8, 180),
        new THREE.MeshBasicMaterial({
          color: index === 0 ? 0xcac8c3 : 0xf4f0e8,
          transparent: true,
          opacity: index === 0 ? 0.48 : 0.18,
        }),
      );
      ring.rotation.set(index === 0 ? 0.95 : 1.22, index === 0 ? 0.2 : -0.55, 0.25);
      scene.add(ring);
      return ring;
    });

    const starPositions = new Float32Array(90 * 3);
    for (let i = 0; i < 90; i += 1) {
      starPositions[i * 3] = (Math.random() - 0.5) * 5.8;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 5.8;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 2.4 - 1.2;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xf4f0e8, size: 0.012, transparent: true, opacity: 0.45 }),
    );
    scene.add(stars);

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.position.x = width < 480 ? 0.18 : 0;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
    });
    resizeObserver.observe(container);

    const pointer = new THREE.Vector2();
    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = new THREE.Timer();
    timer.connect(document);
    let animationFrame = 0;
    const render = (timestamp = performance.now()) => {
      timer.update(timestamp);
      const elapsed = reducedMotion ? 0 : timer.getElapsed();
      const material = orb.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = elapsed;
      material.uniforms.uPointer.value.lerp(pointer, 0.025);
      orb.rotation.y = elapsed * 0.12 + pointer.x * 0.12;
      orb.rotation.x = Math.sin(elapsed * 0.16) * 0.08 + pointer.y * 0.07;
      rings[0].rotation.z = elapsed * 0.07;
      rings[1].rotation.z = -elapsed * 0.045;
      stars.rotation.z = elapsed * 0.008;
      renderer.render(scene, camera);
      if (!reducedMotion) animationFrame = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      timer.dispose();
      resizeObserver.disconnect();
      orb.geometry.dispose();
      (orb.material as THREE.Material).dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      starGeometry.dispose();
      (stars.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      className={`orbital-scene ${className}`}
      ref={containerRef}
      data-scroll
      data-scroll-speed="-0.35"
      aria-hidden="true"
    />
  );
}
