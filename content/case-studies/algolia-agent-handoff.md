---
slug: algolia-agent-handoff
kicker: Collaboration / Authors Collective × Field Day Labs
title: A clean handoff between specialized agents
description: How Field Day Labs built the embedded specialized-agent handoff example for Authors Collective’s Algolia article.
lede: A small, native-feeling demo built for an article about coordinating specialized agents without handing privileged decisions to the browser.
year: "2026"
client: Algolia
category: Embed systems + technical content
canonicalUrl: https://www.fieldday.dev/work/algolia-agent-handoff/
ctas:
  - label: Open the demo
    href: https://authorscollective.org/agent-handoff/
  - label: Visit Authors Collective
    href: https://authorscollective.org/work/algolia-agent-handoff/
facts:
  - label: Client
    value: Algolia
  - label: Year
    value: "2026"
  - label: Delivery
    value: Dependency-free script
  - label: Boundary
    value: Server-owned routing
roles:
  - label: Editorial direction
    name: Authors Collective
    href: https://authorscollective.org/work/algolia-agent-handoff/
    description: Article, use case, and reader-facing explanation for Algolia’s technical audience.
  - label: Development partner
    name: Field Day Labs
    description: Browser embed, static fallback, and server-side provider boundary.
---

## The collaboration

Authors Collective brought the editorial problem: explain how specialized agents can collaborate without asking the browser to own privileged routing decisions. Field Day Labs turned that explanation into a working example that can sit inside a host article without taking over the page.

The result is intentionally compact. A reader can start with Sales, ask a question, and pass the same conversation to Support. The surrounding application decides what may cross the boundary.

## What we built

- **Native embed.** A dependency-free script mounts inside the host article and keeps its interface isolated from the CMS page.
- **Server-only values.** Provider credentials and agent identifiers remain on the server; the browser receives only the interaction response.
- **Graceful fallback.** If the script, browser capability, or provider is unavailable, the selected image and visible attribution remain in place.
- **Application-owned handoff.** The application validates the destination and transfers an intentionally limited context packet to Support.

## A useful caveat

This is an explanatory demo, not a claim that every agent platform provides native agent-to-agent transfer. The important design choice is the boundary: the application owns authorization, destination validation, context selection, and failure behavior.

## Keep exploring

Read the [Authors Collective attribution](https://authorscollective.org/work/algolia-agent-handoff/) or [open the public example](https://authorscollective.org/agent-handoff/) to see the boundary in context.
