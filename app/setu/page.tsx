import SiteShell from "../components/SiteShell";

const technologies = ["JavaScript", "HTML", "CSS", "React", "MongoDB"];

export default function SetuPage() {
  return (
    <SiteShell current={2}>
      <section className="chapter workshop story-route" aria-labelledby="workshop-title">
        <div className="chapter__rail">
          <span className="chapter__number">03</span>
          <span>THE WORKSHOP</span>
        </div>
        <div className="chapter__body">
          <p className="eyebrow" data-page-reveal>Building around a real-world question.</p>
          <div className="workshop__heading" data-page-reveal>
            <h1 id="workshop-title">Setu<span className="lime">.</span></h1>
            <span className="project-tag">STUDENT PROJECT<br />SMART INDIA HACKATHON 2026</span>
          </div>
          <div
            className="setu-art"
            data-page-reveal
            aria-label="Conceptual diagram connecting learning, skills, and opportunity"
          >
            <div className="setu-art__label label-one">LEARNING</div>
            <div className="setu-art__label label-two">SKILLS</div>
            <div className="setu-art__label label-three">OPPORTUNITY</div>
            <svg viewBox="0 0 900 310" aria-hidden="true">
              <path d="M80 156H340M560 156h260M340 156l110-96 110 96-110 96-110-96Z" />
              <circle cx="80" cy="156" r="9" />
              <circle cx="820" cy="156" r="9" />
              <circle cx="450" cy="60" r="5" />
              <circle cx="450" cy="252" r="5" />
              <circle cx="450" cy="156" r="17" />
            </svg>
            <span className="setu-art__caption">A CONCEPT FOR CONNECTING POTENTIAL AND NEED</span>
          </div>
          <div className="setu-copy">
            <div data-page-reveal>
              <span className="mono-label">THE PROBLEM</span>
              <h2>Learning and industry<br />don’t always meet.</h2>
              <p className="body-copy">
                Students can find it difficult to understand how their skills map
                to industry requirements. Companies, meanwhile, need ways to
                discover people whose skills fit their needs.
              </p>
            </div>
            <div data-page-reveal>
              <span className="mono-label">THE IDEA</span>
              <h2>Make the connection<br />more visible.</h2>
              <p className="body-copy">
                Setu is a web application developed around this gap. It aims to
                assess student skills with an LLM, generate a matching score, and
                help surface relevant company opportunities. It also aims to help
                companies discover candidates with useful, relevant skill sets.
              </p>
              <p className="body-copy">
                I participated in Smart India Hackathon 2026 with Setu. This page
                describes the project from the information available; it does not
                claim specific responsibilities, implementation details, or
                outcomes that have not been confirmed.
              </p>
              <div className="tech-list" aria-label="Technologies listed for Setu">
                {technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <a
                className="text-link"
                href="https://github.com/xlok227/setu"
                target="_blank"
                rel="noreferrer"
              >
                Visit the Setu repository <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
