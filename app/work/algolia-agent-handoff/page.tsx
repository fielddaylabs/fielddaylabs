import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialized agent handoff | Field Day Labs",
  description: "How Field Day Labs built the embedded specialized-agent handoff example for Authors Collective’s Algolia article.",
  alternates: { canonical: "https://www.fieldday.dev/work/algolia-agent-handoff/" },
};

export default function AlgoliaAgentHandoffPage() {
  return (
    <main className="min-h-screen">
      <nav className="nav">
        <a href="/" className="wordmark" aria-label="Field Day Labs home">
          <img src="/logos/logo-transparent.png" alt="Field Day Labs" className="header-lockup" />
        </a>
        <div className="nav-right">
          <span>COLLABORATION / 2026</span>
          <a className="nav-link" href="/">Back home <span>↗</span></a>
        </div>
      </nav>

      <article className="handoff-page">
        <header className="handoff-hero">
          <p className="eyebrow"><span>AUTHORS COLLECTIVE</span><span>FIELD DAY LABS</span></p>
          <h1>A clean handoff<br /><em>between agents.</em></h1>
          <p className="handoff-lede">A small, native-feeling demo built for Authors Collective’s technical article about coordinating specialized agents without handing privileged decisions to the browser.</p>
        </header>

        <section className="handoff-section">
          <div className="section-label">[ THE COLLABORATION ]</div>
          <div className="handoff-copy">
            <p className="handoff-big-copy">Authors Collective brought the editorial problem. <span>Field Day Labs built the working boundary.</span></p>
            <div className="handoff-columns">
              <div>
                <h2>Authors Collective</h2>
                <p>Authors Collective shaped the article, use case, and reader-facing explanation for Algolia’s blog audience.</p>
                <a className="text-link" href="https://authorscollective.org/work/algolia-agent-handoff/">Read the attribution page <span>↗</span></a>
              </div>
              <div>
                <h2>Field Day Labs</h2>
                <p>Field Day Labs implemented the browser embed, static fallback, and server-side provider boundary that make the example usable in a CMS.</p>
                <a className="text-link" href="https://authorscollective.org/agent-handoff/">Open the demo <span>↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="handoff-section handoff-dark">
          <div className="section-label">[ WHAT WE BUILT ]</div>
          <div className="handoff-copy">
            <div className="handoff-list">
              <div><strong>Native embed</strong><p>A dependency-free script mounts inside the host article and keeps its UI isolated from the CMS page.</p></div>
              <div><strong>Server-only values</strong><p>The browser receives the interaction response, never the provider API key or agent identifiers used by the server route.</p></div>
              <div><strong>Graceful fallback</strong><p>If the script, browser capability, or provider is unavailable, the selected image and visible attribution remain in place.</p></div>
              <div><strong>Application-owned handoff</strong><p>The demo makes the routing decision in the application and transfers an intentionally limited context packet to Support.</p></div>
            </div>
          </div>
        </section>

        <section className="handoff-section">
          <div className="section-label">[ A USEFUL CAVEAT ]</div>
          <div className="handoff-copy handoff-caveat">
            <p>This is an explanatory demo, not a claim that every agent platform provides native agent-to-agent transfer. The important design choice is the boundary: the application owns authorization, destination validation, context selection, and failure behavior.</p>
            <a className="text-link" href="https://authorscollective.org/agent-handoff/">Try the public example <span>↗</span></a>
          </div>
        </section>
      </article>

      <section className="closing handoff-closing">
        <div className="closing-top"><span>FIELD DAY LABS / AUTHORS COLLECTIVE</span><span>BUILT WITH INTENT</span></div>
        <h2>Good work<br /><em>travels well.</em></h2>
        <a href="mailto:hello@fielddaylabs.com" className="email-link">hello@fielddaylabs.com <span>↗</span></a>
        <div className="closing-foot"><span>© FIELD DAY LABS LLC</span><span>SOUTH CAROLINA · USA</span></div>
      </section>
    </main>
  );
}
