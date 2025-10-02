# Deployment Guide

This guide will help you deploy your new portfolio to various hosting platforms.

## Quick Start

Your portfolio is ready to deploy! The build was successful and all files are optimized.

## Deployment Options

### 1. Vercel (Recommended) ⚡

Vercel is the company behind Next.js and offers the best integration.

#### Steps:
1. Push your code to GitHub:
   ```bash
   cd /workspace/new-portfolio
   git init
   git add .
   git commit -m "Initial commit: Portfolio based on Tajmirul's design"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**Domain:** You'll get a free `.vercel.app` domain, or connect your custom domain.

### 2. Netlify

1. Build your project:
   ```bash
   npm run build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

**Build settings:**
- Build command: `npm run build`
- Publish directory: `.next`

### 3. AWS (Current Setup)

Since you mentioned AWS in your profile, here's how to deploy to AWS:

#### Option A: AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify Console
3. Click "New App" → "Host web app"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
6. Deploy

#### Option B: S3 + CloudFront

1. Export as static site:
   ```bash
   npm run build
   npm run export  # Add this script to package.json
   ```

2. Upload to S3:
   ```bash
   aws s3 sync out/ s3://your-bucket-name
   ```

3. Configure CloudFront distribution

### 4. GitHub Pages

Not recommended for Next.js, but possible with static export.

## Pre-Deployment Checklist

- [ ] Update `GENERAL_INFO` in `/lib/data.ts` with your actual information
- [ ] Add your project images to `/public/projects/`
- [ ] Add tech stack logos to `/public/logo/`
- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Update README.md with your repository URL
- [ ] Add custom domain (optional)

## Environment Variables

If you need environment variables:

1. Create `.env.local` file:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

2. Add to your deployment platform (Vercel/Netlify/AWS):
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - AWS: Amplify Console → App Settings → Environment Variables

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## Performance Optimization

Your portfolio is already optimized with:
- ✅ Code splitting by route
- ✅ Optimized animations with GSAP
- ✅ Minimal bundle size
- ✅ Static generation

## Monitoring

### Vercel Analytics
Add to `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run type-check`

### Images Not Loading
- Ensure images are in `/public` directory
- Use relative paths: `/projects/image.jpg`
- Check image file extensions match code

### Animations Not Working
- GSAP requires client-side rendering
- Ensure `'use client'` directive is present
- Check browser console for errors

## Post-Deployment

1. Test on multiple devices
2. Check page load speed: [PageSpeed Insights](https://pagespeed.web.dev/)
3. Verify SEO: [Google Search Console](https://search.google.com/search-console)
4. Share your portfolio! 🎉

## Support

For issues:
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- This portfolio: Check README.md

---

Good luck with your deployment! 🚀
