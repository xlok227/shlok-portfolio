import SiteShell from "../components/SiteShell";
import OrbitalScene from "../components/OrbitalScene";

const interests = ["WEB EXPERIENCES", "APPLIED AI", "PRODUCT DEVELOPMENT", "SHARED LEARNING"];

export default function HorizonPage() {
  return (
    <SiteShell current={3}>
      <section className="horizon horizon-route" aria-labelledby="horizon-title">
        <OrbitalScene className="orbital-scene--horizon" />
        <div className="horizon__shape" data-scroll data-scroll-speed="0.22" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <div className="horizon__content">
          <p className="eyebrow" data-page-reveal>04 / THE HORIZON · ALWAYS IN PROGRESS</p>
          <h1 data-page-reveal id="horizon-title">
            Still learning.<br /><em>Still becoming.</em>
          </h1>
          <p className="body-copy" data-page-reveal>
            I want to keep strengthening my technical foundations while learning
            more about product thinking, project management, and practical AI.
            Growth also means learning to break down problems, communicate,
            collaborate, understand users, and take responsibility for what I build.
          </p>
          <p className="body-copy" data-page-reveal>
            I’m interested in learning from people who approach problems
            differently, exploring unfamiliar ideas, and turning what I learn
            into practical experience.
          </p>
          <div className="interest-list" data-page-reveal>
            {interests.map((interest) => <span key={interest}>{interest}</span>)}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
