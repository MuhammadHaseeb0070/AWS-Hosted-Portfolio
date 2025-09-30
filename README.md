# Muhammad Haseeb – Portfolio

A fast, accessible, single-page portfolio showcasing projects and skills. Built with Tailwind via CDN and vanilla JavaScript. Optimized with lazy-loaded images, ARIA improvements, SEO meta tags, and smooth interactions.

## Features
- Modern dark UI with gradient accents
- Subtle scroll animations and staggered reveals
- Project modal with gallery, fullscreen zoom, and keyboard support
- Mobile menu with animated hamburger and focus trapping
- Active navigation highlighting on scroll
- Back-to-top button and smooth in-page navigation
- SEO and social (Open Graph/Twitter) meta tags
- Lazy-loaded images and preconnects for better performance

## Project Structure
```
/images            # Project and profile images
index.html         # Single-page app (HTML, CSS-in-head, and JS)
README.md          # This file
```

## Local Development
You can open `index.html` directly in a browser. For a more accurate experience (mimics production and avoids CORS quirks), use a local server:

```bash
# Python 3
python3 -m http.server 5500
# or Node (http-server)
npx http-server -p 5500 --silent
```

Then visit `http://localhost:5500` and open `index.html`.

## Deployment
This site is static and can be hosted anywhere: S3 + CloudFront, GitHub Pages, Netlify, Vercel, etc.

- S3/CloudFront: Upload all files to your S3 bucket, set `index.html` as the root document, and configure CloudFront with caching and gzip/brotli.
- GitHub Pages: Serve from the repository root; ensure the `images` directory is included.

## Customization
- Update profile data and titles in the hero section.
- Edit project metadata in the `projectsData` object inside `index.html`.
- Replace images in `/images` with your own assets (keep filenames or update paths accordingly).

## Accessibility & Keyboard Support
- Skip link provided to jump to content.
- Mobile menu and project modal use ARIA attributes and focus trapping.
- Modal supports Escape to close, Enter/Space to toggle zoom.

## Contact
- Email: muhammadhaseeb0070@gmail.com
- LinkedIn: https://www.linkedin.com/in/muhammad-haseeb-b4544a257/
- GitHub: https://github.com/MuhammadHaseeb0070

---
Deployed on AWS using a CI/CD pipeline. Contributions and suggestions are welcome.
