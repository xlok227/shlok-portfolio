import SiteShell from "../components/SiteShell";

export default function ConnectionPage() {
  return (
    <SiteShell current={4}>
      <section className="connection connection-route" aria-labelledby="connection-title">
        <div className="chapter__rail">
          <span className="chapter__number">05</span>
          <span>THE CONNECTION</span>
        </div>
        <div className="connection__body">
          <p className="eyebrow" data-page-reveal>A portfolio, and an open conversation.</p>
          <h1 data-page-reveal id="connection-title">
            Ideas get better<br />in <em>good company.</em>
          </h1>
          <p className="body-copy" data-page-reveal>
            This is my evolving record of what I know, build, learn, and want to
            explore. I’m here to exchange perspectives, learn from people with
            different strengths, and find ways to contribute to work with a clear
            purpose. If something here resonates, I’d be glad to connect.
          </p>
          <div className="connection__links" data-page-reveal>
            <a href="https://github.com/xlok227" target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
            <a href="https://www.linkedin.com/in/shlok-771b31426" target="_blank" rel="noreferrer">
              LinkedIn <span>↗</span>
            </a>
          </div>
        </div>
        <div className="footer-line">
          <span>SHLOK · NEW DELHI</span>
          <a href="/portfolio">BACK TO THE SIGNAL ↑</a>
          <span>A LIVING DOCUMENT</span>
        </div>
      </section>
    </SiteShell>
  );
}
