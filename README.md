# demo-rag-worker

A RAG (Retrieval-Augmented Generation) demo built on Cloudflare Workers using Hono, Workers AI, and Vectorize.

## Stack

- **[Hono](https://hono.dev/)** — lightweight web framework for Cloudflare Workers
- **[Workers AI](https://developers.cloudflare.com/workers-ai/)** — embedding and generation models
- **[Vectorize](https://developers.cloudflare.com/vectorize/)** — Cloudflare's vector database

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) authenticated with your Cloudflare account

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Deploy

```bash
npm run deploy
```

## Project Structure

```
src/
└── index.ts          # entry point, mounts routes
```

## Status

Work in progress.