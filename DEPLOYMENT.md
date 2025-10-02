# Deployment Guide

## Quick Deploy Options

### 1. Netlify (Recommended - Easiest)

**Drag & Drop Method:**
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire project folder
3. Your site is live! (e.g., `https://random-name.netlify.app`)
4. Optional: Change site name in Site settings

**Git Method:**
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"

### 2. Vercel

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Deploy settings:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. Click "Deploy"

### 3. GitHub Pages

1. Push code to GitHub repository
2. Go to repository Settings
3. Navigate to "Pages" section
4. Source: Deploy from a branch
5. Branch: `main` or `master`, folder: `/ (root)`
6. Save and wait for deployment
7. Your site will be at `https://yourusername.github.io/repository-name`

### 4. AWS S3 + CloudFront

**Step 1: Create S3 Bucket**
```bash
# Install AWS CLI if needed
aws configure

# Create bucket
aws s3 mb s3://your-portfolio-bucket

# Upload files
aws s3 sync . s3://your-portfolio-bucket --exclude ".git/*"

# Enable static website hosting
aws s3 website s3://your-portfolio-bucket --index-document index.html
```

**Step 2: Configure CloudFront (Optional but recommended)**
1. Go to CloudFront console
2. Create distribution
3. Origin domain: your S3 bucket
4. Default root object: `index.html`
5. Deploy and use the CloudFront domain

### 5. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Choose:
# - Public directory: . (current directory)
# - Single-page app: No
# - Overwrite index.html: No

# Deploy
firebase deploy
```

## Custom Domain Setup

### Netlify
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Vercel
1. Go to Project settings > Domains
2. Add your domain
3. Configure DNS as shown

### GitHub Pages
1. Add file `CNAME` with your domain
2. Configure DNS:
   - Type: A Record
   - Host: @
   - Value: GitHub Pages IPs
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

## Performance Optimization

### Before Deployment

1. **Optimize Images**
```bash
# Install imagemin
npm install -g imagemin-cli

# Optimize
imagemin images/* --out-dir=images
```

2. **Minify CSS & JS** (optional)
```bash
# Install minifiers
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o styles.min.css styles.css

# Minify JS
uglifyjs script.js -o script.min.js

# Update HTML to use minified versions
```

3. **Enable Caching**
Add `_headers` file for Netlify:
```
/*
  Cache-Control: public, max-age=31536000
/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

## Monitoring & Analytics

### Add Google Analytics
Add before `</head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Google Search Console
1. Verify ownership via HTML tag or file
2. Submit sitemap (create `sitemap.xml`)

## SEO Optimization

### Add Open Graph Tags
Already included, but verify in `index.html`:
- `og:title`
- `og:description`
- `og:image`
- `og:url`

### Create robots.txt
```
User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
```

### Create sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## Troubleshooting

### Custom Cursor Not Working
- Check if user is on mobile (cursor is hidden on mobile)
- Verify JavaScript is loaded correctly

### Animations Not Smooth
- Check browser DevTools Performance tab
- Reduce animation complexity on lower-end devices
- Consider adding `will-change` CSS property

### Form Not Submitting
- Verify Formspree endpoint
- Check browser console for errors
- Test with different browsers

## Security Headers (Netlify)

Create `_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://formspree.io;
```

## Backup

Always keep:
- Original source code in Git
- Image backups in separate location
- Environment variables documented
- Domain/DNS settings documented

---

**Need Help?**
- Check provider documentation
- Review browser console for errors
- Test on multiple devices and browsers
- Reach out: muhammadhaseeb0070@gmail.com
