# Case studies

Case-study pages are generated from Markdown files in `content/case-studies/`. Add a new file named after its URL slug, then the dynamic route will generate the page at `/work/<slug>/` during the next build.

Each file requires YAML frontmatter for `slug`, `kicker`, `title`, `description`, `lede`, `year`, `client`, `category`, `canonicalUrl`, `ctas`, `facts`, and `roles`. `heroImage` and `heroImageAlt` are optional. The body is sanitized Markdown; start it at `##` because the template supplies the page’s `h1`.
