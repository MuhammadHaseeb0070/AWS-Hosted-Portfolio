# Muhammad Haseeb — THE PIPELINE

Integration Engineer portfolio built around a single concept: **the site is an enterprise
integration pipeline and the visitor is the payload.**

Flow: `NODE_00 INGEST → NODE_01 TRANSFORM → NODE_02 ROUTE → NODE_03 PROTOCOLS → NODE_04 DELIVER → NODE_05 HANDSHAKE`

## Stack

- Vite + React + TypeScript (no UI framework — hand-written CSS design system)
- GSAP ScrollTrigger for all scroll choreography (scrubbed spine drawing, pinned horizontal
  deliver lane, velocity-reactive marquee, count-ups, clip reveals)
- IBM Plex Mono + Space Grotesk, ink black / warm paper / signal orange `#FF4D00`

## Commands

```bash
npm install
npm run dev      # local dev
npm run build    # outputs dist/ for S3 + CloudFront sync
```

Deployed via GitHub Actions → S3 → CloudFront (`muhammadhaseeb.space`).
