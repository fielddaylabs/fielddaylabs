import Image from "next/image";
import type { CaseStudy, CaseStudyLink } from "../lib/case-studies";

function ActionLink({ link, primary = false }: { link: CaseStudyLink; primary?: boolean }) {
  const className = primary ? "case-study-action case-study-action-primary" : "case-study-action";
  const children = <>{link.label} <span aria-hidden="true">↗</span></>;
  return <a href={link.href} className={className}>{children}</a>;
}

export default function CaseStudyTemplate({ study, html }: { study: CaseStudy; html: string }) {
  return (
    <main className="case-study-page">
      <nav className="case-study-nav" aria-label="Primary">
        <a href="/" className="case-study-brand"><img src="/logos/logo-transparent.png" alt="Field Day Labs" className="header-lockup" /></a>
        <div className="case-study-nav-right"><span>CASE STUDY / {study.year}</span><a href="/" className="nav-link">Back home <span aria-hidden="true">↗</span></a></div>
      </nav>

      <article>
        <header className="case-study-hero">
          <div className="case-study-hero-inner">
            <h1>{study.title}</h1>
            <p className="case-study-lede">{study.lede}</p>
            <div className="case-study-actions"><ActionLink link={study.primaryCta} primary />{study.secondaryCta && <ActionLink link={study.secondaryCta} />}</div>
          </div>
        </header>

        {study.heroImage && <figure className="case-study-hero-media"><Image src={study.heroImage} alt={study.heroImageAlt || study.title} fill sizes="(max-width: 760px) 100vw, 90vw" priority /></figure>}

        <div className="case-study-layout">
          <aside className="case-study-aside">
            <p className="case-study-label">[ AT A GLANCE ]</p>
            <dl className="case-study-facts">{study.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
            <div className="case-study-credits"><p className="case-study-label">[ COLLABORATORS ]</p>{study.roles.map((role) => <div key={role.label}><span>{role.label}</span><strong>{role.href ? <a href={role.href}>{role.name} <span aria-hidden="true">↗</span></a> : role.name}</strong><p>{role.description}</p></div>)}</div>
          </aside>
          <div className="case-study-prose" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <footer className="case-study-footer"><p>A case study for {study.client}, by {study.roles.map((role, index) => <span key={role.name}>{index > 0 && " · "}{role.href ? <a href={role.href}>{role.name}</a> : role.name}</span>)}.</p><a href={study.primaryCta.href}>{study.primaryCta.label} <span aria-hidden="true">↗</span></a></footer>
      </article>

      <section className="closing case-study-closing"><div className="closing-top"><span>FIELD DAY LABS / {study.year}</span><span>BUILT WITH INTENT</span></div><h2>Good work<br /><em>travels well.</em></h2><a href="mailto:hello@fielddaylabs.com" className="email-link">hello@fielddaylabs.com <span aria-hidden="true">↗</span></a><div className="closing-foot"><span>© FIELD DAY LABS LLC</span><span>SOUTH CAROLINA · USA</span></div></section>
    </main>
  );
}
