"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Scene from "./scene";

const projects = [
  { n: "01", name: "MoveRoom", type: "Movement / Community", copy: "A considered space for instructors and students to move together — live, on demand, and in their own rhythm.", color: "#d7ff45", mark: "MR" },
  { n: "02", name: "Tally, Ho!", type: "Travel / Adventure", copy: "A better way to plan the weekends you’ll still be talking about next year. Built for the detour.", color: "#ff715b", mark: "TH" },
];

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, .35], [0, -110]);
  return <main ref={ref}>
    <nav className="nav"><a href="#top" className="wordmark"><img src="/field-day-labs-mark.svg" alt="" className="header-mark" /><span className="stacked-lockup"><span>FIELD</span><span>DAY</span><span>LABS</span></span></a><div className="nav-right"><span>NYC / WORLDWIDE</span><a className="nav-link" href="#work">See the work <span>↘</span></a></div></nav>
    <section id="top" className="hero">
      <div className="hero-copy"><div className="eyebrow"><span>INDEPENDENT PRODUCTS</span><span>EST. 2026</span></div><h1>Make room<br /><em>for wonder.</em></h1><p>Field Day Labs is a home for independent products built to make everyday life more expansive.</p><a className="circle-cta" href="#work" aria-label="Explore the work">Explore<br />the work <span>↓</span></a></div>
      <motion.div className="hero-art" style={{ y }}><Scene /></motion.div><div className="hero-index">01 <span>—</span> 04</div>
    </section>
    <section className="statement"><div className="section-label">[ OUR POINT OF VIEW ]</div><div className="statement-copy"><p className="big-copy">The best products don’t ask for attention. <span>They earn a place in your life.</span></p><div className="statement-note">We’re building a small, focused company around a simple idea: useful can also feel alive.</div></div></section>
    <section id="work" className="work"><div className="work-head"><div className="section-label">[ SELECTED WORK ]</div><p>Two products. One point of view.<br />More to come.</p></div>{projects.map((project, i) => <Project key={project.name} {...project} i={i} />)}</section>
    <section className="closing"><div className="closing-top"><span>FIELD DAY LABS / 2026</span><span>BUILT WITH INTENT</span></div><h2>Come out<br /><em>and play.</em></h2><a href="mailto:hello@fielddaylabs.com" className="email-link">hello@fielddaylabs.com <span>↗</span></a><div className="closing-foot"><span>© FIELD DAY LABS LLC</span><span>NEW YORK · USA</span></div></section>
  </main>
}

function Project({ n, name, type, copy, color, mark, i }: typeof projects[number] & { i: number }) { const isMove = name === "MoveRoom"; return <motion.article className="project" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .7, delay: i * .1 }}><div className="project-top"><span>{n}</span><span>{type}</span></div><div className="project-main"><div className={`project-visual ${isMove ? "move-visual" : "tally-visual"}`} style={{ "--accent": color } as React.CSSProperties}>{isMove ? <Image src="/brands/moveroom-wordmark.png" alt="MoveRoom" width={520} height={101} className="brand-image moveroom-image" /> : <><Image src="/brands/tallyho-hero.webp" alt="Tally, Ho! travel planning" fill className="brand-photo" sizes="(max-width: 760px) 100vw, 60vw" /><div className="tally-overlay"><Image src="/brands/tallyho-lockup.png" alt="Tally, Ho!" width={520} height={98} className="brand-image" /></div></>}<span className="visual-caption">A PRODUCT BY FIELD DAY LABS</span></div><div className="project-info"><h3>{name}</h3><p>{copy}</p><a href={isMove ? "https://moveroom.app" : "https://tallyhoplans.com"} className="text-link">Visit project <span>↗</span></a></div></div></motion.article> }
