"use client";

import { useRef, useState } from "react";

export default function VinylIntro() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState("");

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    audio.volume = 0.45;
    try {
      await audio.play();
      setAudioError("");
    } catch (error) {
      console.error("Unable to play the intro music.", error);
      setAudioError("Music could not start. Please try again.");
    }
  };

  return (
    <main className="vinyl-intro">
      <audio
        ref={audioRef}
        src="/audio/intro-loop.wav"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(event) => {
          console.error("Unable to load the intro music.", event.currentTarget.error);
          setAudioError("The intro music could not be loaded.");
          setIsPlaying(false);
        }}
      />
      <header className="vinyl-intro__header">
        <a className="vinyl-intro__wordmark" href="/" aria-label="Shlok introduction">
          SHLOK<span>.</span>
        </a>
        <span>NEW DELHI · INDIA</span>
      </header>

      <section className="vinyl-intro__stage" aria-labelledby="intro-title">
        <div className="vinyl-intro__copy">
          <p className="vinyl-intro__eyebrow">
            <span>AN INTRODUCTION</span>
            <span>NO. 01 — SIDE A</span>
          </p>
          <h1 id="intro-title">Before the<br />next chapter<span>.</span></h1>
          <p className="vinyl-intro__description">
            I’m Shlok — an AI &amp; Data Science student learning by building
            interfaces, exploring ideas, and finding out how products come together.
          </p>
          <div className="vinyl-intro__actions">
            <a className="vinyl-intro__enter" href="/portfolio">
              Enter the portfolio <span aria-hidden="true">↗</span>
            </a>
            <button
              className="vinyl-intro__music"
              type="button"
              aria-label={isPlaying ? "Pause intro music" : "Play intro music"}
              aria-pressed={isPlaying}
              onClick={toggleMusic}
            >
              <span className={`vinyl-intro__equalizer${isPlaying ? " is-playing" : ""}`} aria-hidden="true">
                <i /><i /><i />
              </span>
              {isPlaying ? "PAUSE MUSIC" : "PLAY MUSIC"}
            </button>
          </div>
          <p className="vinyl-intro__audio-status" role="status" aria-live="polite">{audioError}</p>
        </div>

        <div className="vinyl-record" aria-hidden="true">
          <div className="vinyl-record__disc">
            <div className="vinyl-record__label">
              <span className="vinyl-record__side">SIDE A · 2026</span>
              <span className="vinyl-record__monogram">S</span>
              <span className="vinyl-record__title">WORK IN PROGRESS</span>
            </div>
          </div>
          <div className="vinyl-record__arm">
            <span />
          </div>
          <span className="vinyl-record__caption">A PERSONAL ARCHIVE · STILL IN MOTION</span>
        </div>
      </section>

      <footer className="vinyl-intro__footer">
        <span>STUDENT · FRONTEND DEVELOPER · CURIOUS BUILDER</span>
        <a href="/portfolio">CONTINUE TO THE STORY <span aria-hidden="true">↓</span></a>
      </footer>
    </main>
  );
}
