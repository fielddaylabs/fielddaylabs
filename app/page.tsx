"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Scene from "./scene";

const projects = [
  { n: "01", name: "MoveRoom", type: "Movement / Community", copy: "A considered space for instructors and students to move together — live, on demand, and in their own rhythm.", color: "#d7ff45", mark: "MR" },
  { n: "02", name: "Tally, Ho!", type: "Travel / Adventure", copy: "A better way to plan the weekends you’ll still be talking about next year. Built for the detour.", color: "#ff715b", mark: "TH" },
  { n: "03", name: "Load Calc Guru", type: "Work / Precision", copy: "A practical calculator that takes the guesswork out of load planning, so the job can move forward with confidence.", color: "#70b8ff", mark: "LCG" },
];

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, .35], [0, -110]);
  return <main ref={ref}>
    <nav className="nav"><a href="#top" className="wordmark"><Image src="/logos/logo-transparent.png" alt="Field Day Labs" width={632} height={312} className="header-lockup" preload /></a><div className="nav-right"><span>SOUTH CAROLINA / WORLDWIDE</span><a className="nav-link" href="#work">See the work <span>↘</span></a></div></nav>
    <section id="top" className="hero">
      <div className="hero-copy"><h1>Make room<br /><em>for wonder.</em></h1><p>Field Day Labs is a home for independent products built to make everyday life more expansive.</p></div>
      <motion.div className="hero-art" style={{ y }}><Scene /></motion.div><div className="hero-index">01 <span>—</span> 04</div>
    </section>
    <section className="statement"><div className="section-label">[ OUR POINT OF VIEW ]</div><div className="statement-copy"><p className="big-copy">The best products don’t ask for attention. <span>They earn a place in your life.</span></p><div className="statement-note">We’re building a small, focused company around a simple idea: useful can also feel alive.</div></div></section>
    <section id="work" className="work"><div className="work-head"><div className="section-label">[ SELECTED WORK ]</div><p>Three products. One point of view.<br />More to come.</p></div>{projects.map((project, i) => <Project key={project.name} {...project} i={i} />)}</section>
    <section className="closing"><div className="closing-top"><span>FIELD DAY LABS / 2026</span><span>BUILT WITH INTENT</span></div><h2>Come out<br /><em>and play.</em></h2><a href="mailto:hello@fielddaylabs.com" className="email-link">hello@fielddaylabs.com <span>↗</span></a><div className="closing-foot"><span>© FIELD DAY LABS LLC</span><span>SOUTH CAROLINA · USA</span></div></section>
  </main>
}

function Project({ n, name, type, copy, color, mark, i }: typeof projects[number] & { i: number }) { const isMove = name === "MoveRoom"; const isCalc = name === "Load Calc Guru"; return <motion.article className="project" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .7, delay: i * .1 }}><div className="project-top"><span>{n}</span><span>{type}</span></div><div className="project-main"><div className={`project-visual ${isMove ? "move-visual" : isCalc ? "calc-visual" : "tally-visual"}`} style={{ "--accent": color } as React.CSSProperties}>{isMove ? <div className="move-app"><Image src="/brands/moveroom-wordmark.png" alt="MoveRoom" width={520} height={101} className="brand-image moveroom-image" /><div className="move-app-nav"><span>Explore</span><span>My practice</span><b>◎</b></div><div className="move-session"><span className="session-kicker">LIVE ROOM · 09:00</span><strong>Morning mobility</strong><span>with Maya Chen</span><i>Join room ↗</i></div><div className="move-progress"><span>Today’s practice</span><b>62%</b><div><em /></div></div></div> : isCalc ? <div className="calc-app"><Image src="/brands/load-calc-guru.png" alt="Load Calc Guru" width={900} height={101} className="brand-image calc-image" /><div className="calc-app-bar"><span>PROJECT LOAD</span><b>NEW CALCULATION +</b></div><div className="calc-sheet"><span>Payload overview</span><strong>3,240 <small>LB</small></strong><div className="calc-stats"><span>Load capacity <b>72%</b></span><span>Axle balance <b>Optimal</b></span></div><div className="calc-lines"><i /><i /><i /></div></div></div> : <><Image src="/brands/tallyho-hero.webp" alt="Tally, Ho! travel planning" fill className="brand-photo" sizes="(max-width: 760px) 100vw, 60vw" /><div className="tally-overlay"><Image src="/brands/tallyho-lockup.png" alt="Tally, Ho!" width={520} height={98} className="brand-image" /></div></>}<span className="visual-caption">A PRODUCT BY FIELD DAY LABS</span></div><div className="project-info"><h3>{name}</h3><p>{copy}</p><a href={isMove ? "https://moveroom.app" : isCalc ? "https://www.loadcalcguru.com" : "https://tallyhoplans.com"} className="text-link">Visit project <span>↗</span></a></div></div></motion.article> }
