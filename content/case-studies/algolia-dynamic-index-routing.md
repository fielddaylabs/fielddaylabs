---
slug: algolia-dynamic-index-routing
title: A server-controlled routing demo for Agent Studio
description: How Field Day Labs built a focused Agent Studio demo that makes request-time search scope visible without trusting the browser with privileged routing decisions.
lede: One agent, two application contexts, and a server-owned route map that keeps the search scope explicit before each request.
year: "2026"
client: Algolia
category: Embed systems + technical content
canonicalUrl: https://www.fieldday.dev/work/algolia-dynamic-index-routing/
# Add the published Algolia article URL here when available:
# articleUrl: https://www.algolia.com/blog/...
ctas:
  - label: Open the demo
    href: https://dynamic-index-routing-agent-studio.authorscollective.org/
  - label: Visit Authors Collective
    href: https://authorscollective.org/work/algolia-dynamic-index-routing/
facts:
  - label: Client
    value: Algolia
  - label: Year
    value: "2026"
  - label: Delivery
    value: Standalone Next.js demo
  - label: Boundary
    value: Server-owned route allowlist
roles:
  - label: Client
    name: Algolia
    href: https://www.algolia.com/
    description: The company and technical audience at the center of this case study.
  - label: Editorial direction
    name: Authors Collective
    href: https://authorscollective.org/work/algolia-dynamic-index-routing/
    description: Article, use case, and reader-facing explanation for Algolia’s technical audience.
  - label: Development partner
    name: Field Day Labs
    description: Routing demo, visible request evidence, and integration boundary.
---

## The engineering problem

Dynamic index routing sounds simple until the browser is allowed to choose too much. The demo needed to show an application selecting a useful search scope for each request while keeping the route map, approved indices, provider credentials, and agent configuration on the server.

## What we built

- **One agent, multiple contexts.** Product catalog and Support knowledge represent two application situations that need different search scopes.
- **Server-side resolution.** The browser sends a route alias and question. The server resolves the alias against its approved configuration and rejects arbitrary index input.
- **Inspectability before the request.** The interface exposes the context signal, route alias, selected scope, and fixed agent identity before a completion runs.
- **Evidence after the request.** The result reports route time, completion time, total time, requested scope, and the search index reported by the provider response when available.
- **A separate article surface.** The standalone demo remains independently usable. A future CMS-native version can mount the browser UI into an empty div while continuing to call the same server boundary.

## Why the boundary matters

The browser is useful for collecting context and presenting evidence, but it should not be the authority for what data an agent may search. Keeping the decision on the server makes the route map explicit, testable, and changeable without exposing privileged provider configuration to the page.

The demo is intentionally small. It does not try to replace authentication, record-level permissions, tenant isolation, monitoring, or application-specific policy. It shows one architectural seam clearly enough that a team can adapt it to those requirements.

## A useful caveat

The interface is designed to make routing and timing visible, not to establish a production performance result. A real comparison needs repeated requests with the relevant model, prompt, data, network conditions, and response behavior held constant. The hosted provider result also depends on the published agent, approved indices, API key, and current integration contract.

## Keep exploring

Read the [Authors Collective case study](https://authorscollective.org/work/algolia-dynamic-index-routing/) or [open the public demo](https://dynamic-index-routing-agent-studio.authorscollective.org/) to see the server-controlled route in context.
