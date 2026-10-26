import SiteShell from "../components/SiteShell";

const skills = [
  { title: "Frontend", items: "JavaScript · React · HTML · CSS" },
  { title: "Programming", items: "Python · C++" },
  { title: "Tools & exposure", items: "Git · GitHub · Node.js · Linux fundamentals" },
];

const interests = [
  "INTERACTIVE WEB",
  "PRACTICAL AI",
  "PRODUCT THINKING",
  "PROJECT EXECUTION",
  "COLLABORATION",
];

export default function AboutPage() {
  return (
    <SiteShell current={1}>
      <section className="chapter foundation story-route" aria-labelledby="foundation-title">
        <div className="chapter__rail">
          <span className="chapter__number">02</span>
          <span>THE FOUNDATION</span>
        </div>
        <div className="chapter__body">
          <p className="eyebrow" data-page-reveal>Learning the parts, then how they fit.</p>
          <h1 data-page-reveal id="foundation-title">
            Curious about<br /><em>the whole picture.</em>
          </h1>
          <div className="foundation__grid">
            <p className="body-copy" data-page-reveal>
              I’m a B.Tech student in Artificial Intelligence and Data Science at
              Dr. Akhilesh Das Gupta Institute of Professional Studies, New Delhi.
              I’m a frontend developer interested in the full process of turning
              ideas into working products — from the first question to the details
              that make an interface useful.
            </p>
            <div className="education-note" data-page-reveal>
              <span className="mono-label">CURRENTLY</span>
              <strong>B.Tech · AI & Data Science</strong>
              <span>Dr. Akhilesh Das Gupta Institute<br />of Professional Studies, New Delhi</span>
              <span className="education-note__year">EXPECTED GRADUATION · 2030</span>
            </div>
          </div>
          <div className="skills" data-page-reveal>
            <p className="mono-label">A TOOLKIT IN PROGRESS</p>
            {skills.map((skill) => (
              <div className="skill-row" key={skill.title}>
                <span>{skill.title}</span>
                <span>{skill.items}</span>
              </div>
            ))}
            <p className="skills__note">
              A snapshot of what I work with and keep learning — not a claim of mastery.
            </p>
            <p className="community-note">
              I’m also a member of my college’s E-Cell, a community focused on
              entrepreneurship and innovation.
            </p>
          </div>
          <div className="foundation__explore" data-page-reveal>
            <div>
              <span className="mono-label">BEYOND THE INTERFACE</span>
              <p className="body-copy">
                I want to understand the complete journey behind a product: the
                reasoning, planning, collaboration, and decisions as well as the
                code. I’m interested in how technology, problem-solving, and
                execution meet.
              </p>
            </div>
            <div className="interest-list">
              {interests.map((interest) => <span key={interest}>{interest}</span>)}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
