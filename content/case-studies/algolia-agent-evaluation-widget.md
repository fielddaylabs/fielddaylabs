---
slug: algolia-agent-evaluation-widget
title: An agent-evaluation widget built for inspection
description: How Field Day Labs built a compact, article-ready widget that lets readers compare five iterations of one fictional agent.
lede: One fixed query keeps the comparison focused. Five configurations show how similar average scores can conceal very different answer quality.
year: "2026"
client: Algolia
category: Interactive demo + technical content
canonicalUrl: https://www.fieldday.dev/work/algolia-agent-evaluation-widget/
ctas:
  - label: Try the evaluation widget
    href: https://authorscollective.org/applets/v1/would-you-ship-preview.html
  - label: Read the Authors Collective case study
    href: https://authorscollective.org/work/algolia-agent-evaluation-widget/
facts:
  - label: Client
    value: Algolia
  - label: Year
    value: "2026"
  - label: Delivery
    value: Article-ready JavaScript widget
  - label: Data
    value: Fixed, synthetic example
roles:
  - label: Client
    name: Algolia
    href: https://www.algolia.com/
    description: The company and technical audience at the center of this educational example.
  - label: Editorial direction
    name: Authors Collective
    href: https://authorscollective.org/work/algolia-agent-evaluation-widget/
    description: The reader problem, article framing, and plain-language explanation.
  - label: Development partner
    name: Field Day Labs
    description: The browser interaction, fixture, product illustrations, and embed integration.
---

## The brief

Authors Collective was shaping an article about evaluating agent changes. Its first interactive outline contained enough data to feel like an evaluation console, but too much for a new reader to understand at a glance. The product goal became narrower: let someone inspect one answer, see how it changes across iterations, and notice what a total score leaves out.

## A small fixed comparison

We kept one shopper query and a three-product fictional catalog constant while the reader switches among five iterations of the same agent. Each iteration has expandable notes that name only the changes made. The selected answer appears in a short conversation, followed by three scores and one-line explanations.

The example deliberately gives Iterations 2 and 3 the same average score: 75. Iteration 2 is balanced at 75 in all three categories. Iteration 3 scores 98 in Relevance and Faithfulness, but 29 in Tone. That makes the limitation visible without requiring a large table or statistical explanation.

After Iteration 5 has been selected, the widget reveals a final configuration summary. It explains the complete setup, including which earlier behavior was removed, so readers do not have to reconstruct the winning prompt from a sequence of diffs.

## Implementation choices

- **Fixed data, no live evaluator.** The query, catalog, five answers, scores, and rationales are local fixture data. The browser does not call a model or scoring service.
- **Small article embed.** A mount element loads the fixture script first and the widget script second. The widget uses a Shadow DOM to keep its presentation separate from the host page’s styles.
- **Reader-controlled detail.** Product records and iteration changes stay inside native disclosure controls until opened. Changing the selected iteration updates the conversation and score explanations in place.
- **Editorial attribution stays in HTML.** The host article contains the static attribution links; the widget script does not append them after page load.

## What the example can and cannot show

The widget can show how to compare an answer with its available product facts, how a broad refusal rule can block a useful answer, and how one average can conceal a weak category. It is an explanatory fixture, not a production benchmark, an Algolia customer result, or evidence that a real agent is ready to ship.

All product names, images, prices, configurations, answers, and scores are illustrative. The widget has no live agent connection, runtime model call, or evaluation backend.

## Keep exploring

[Try the evaluation widget](https://authorscollective.org/applets/v1/would-you-ship-preview.html) or read the [Authors Collective case study](https://authorscollective.org/work/algolia-agent-evaluation-widget/) for the editorial approach.
