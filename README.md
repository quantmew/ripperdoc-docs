# Ripperdoc Documentation Site

This is the documentation website for Ripperdoc, built with [Fumadocs](https://fumadocs.dev/) and Next.js.

## Development

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Running Locally

```bash
# Start development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building

```bash
npm run build
npm run start
```

## Project Structure

```
docs-site/
├── content/
│   └── docs/           # MDX documentation files
│       ├── meta.json   # Sidebar navigation config
│       └── *.mdx       # Documentation pages
├── src/
│   ├── app/            # Next.js app router
│   ├── components/     # React components
│   └── lib/            # Utility functions
├── public/             # Static assets
└── package.json
```

## Adding Documentation

1. Create a new `.mdx` file in `content/docs/`
2. Add frontmatter with title and description:

```mdx
---
title: My Page
description: Page description
---

# Content here
```

3. Add the page to `content/docs/meta.json` for sidebar navigation

## Technologies

- [Next.js](https://nextjs.org/) - React framework
- [Fumadocs](https://fumadocs.dev/) - Documentation framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MDX](https://mdxjs.com/) - Markdown with JSX

## Deployment

The site can be deployed to any platform that supports Next.js:

- Vercel
- Netlify
- Cloudflare Pages
- Self-hosted

## License

Apache 2.0 - Same as Ripperdoc
