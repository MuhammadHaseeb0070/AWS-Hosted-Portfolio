# 🚀 Quick Start Guide

Get your creative portfolio up and running in minutes!

## View Locally

### Option 1: Direct File Opening
Simply double-click `index.html` to open in your browser.

### Option 2: Local Server (Recommended)

**Using Python:**
```bash
cd /workspace
python3 -m http.server 8080
```
Then visit: `http://localhost:8080`

**Using Node.js:**
```bash
npx http-server -p 8080
```

**Using PHP:**
```bash
php -S localhost:8080
```

## Customize Your Portfolio

### 1. Update Personal Information

**Profile Image:**
- Replace `images/profileimage.png` with your photo

**Hero Section (`index.html`):**
```html
<h1>Hi, I'm<br><span class="gradient-text">Your Name</span></h1>
```

**Contact Info:**
- Search for "muhammadhaseeb0070@gmail.com" and replace
- Update phone number: "+92 313 3478691"
- Update social links (GitHub, LinkedIn)

### 2. Customize Projects

Find the projects section in `index.html` and modify:

```html
<div class="project-card">
    <img src="./images/your-project.png" alt="Project Name" class="project-image">
    <div class="project-info">
        <div class="project-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-links">
            <a href="github-link" class="project-link">GitHub</a>
            <a href="demo-link" class="project-link">Demo</a>
        </div>
    </div>
</div>
```

### 3. Update Skills

In `index.html`, find skill sections and update:

```html
<div class="skill-item">
    <div class="skill-name">
        <span>Your Skill</span>
        <span>90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="90"></div>
    </div>
</div>
```

### 4. Change Colors

Edit `styles.css` variables:

```css
:root {
    --primary: #00ff88;      /* Change to your color */
    --secondary: #0088ff;    /* Change to your color */
    --accent: #ff0088;       /* Change to your color */
}
```

### 5. Modify Typing Text

Edit `script.js`:

```javascript
const titles = [
    'Your Role 1',
    'Your Role 2',
    'Your Role 3',
    'Your Role 4'
];
```

## Deploy in 5 Minutes

### Netlify (Easiest)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire project folder
3. Done! Your site is live

### Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repo
5. Deploy!

### GitHub Pages

1. Push to GitHub
2. Settings → Pages
3. Source: main branch, root folder
4. Save

## File Structure

```
portfolio/
├── index.html          ← Main HTML file
├── styles.css          ← All styles
├── script.js           ← Interactivity
├── images/             ← Your images here
│   ├── profileimage.png
│   ├── project1.png
│   └── ...
├── README.md           ← Documentation
├── DEPLOYMENT.md       ← Deployment guide
└── QUICKSTART.md       ← This file
```

## Key Features

✅ **Custom Cursor** - Unique interactive cursor (desktop only)  
✅ **3D Animations** - Floating cards and hover effects  
✅ **Typing Effect** - Dynamic role display  
✅ **Scroll Animations** - Content fades in as you scroll  
✅ **Mobile Responsive** - Works on all devices  
✅ **Form Integration** - Contact form with Formspree  
✅ **Loading Screen** - Professional loading animation  
✅ **Parallax Effects** - Smooth scrolling experience  

## Common Tasks

### Add a New Project

1. Add project image to `images/` folder
2. Copy existing project card HTML
3. Update image, title, description, and links
4. Save and refresh!

### Change Font

In `index.html` header:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">
```

In `styles.css`:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Disable Custom Cursor

In `styles.css`, add:
```css
.cursor, .cursor-follower {
    display: none;
}
body {
    cursor: auto;
}
```

## Testing Checklist

Before deploying:

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Contact form submits
- [ ] Mobile menu works
- [ ] Smooth scrolling functions
- [ ] Skills animate on scroll
- [ ] All personal info updated
- [ ] Social links point to your profiles
- [ ] Tested on mobile device
- [ ] Tested on different browsers

## Performance Tips

1. **Compress Images**
   - Use tools like TinyPNG
   - Keep images under 500KB each

2. **Lazy Loading**
   - Images already have lazy loading
   - No additional setup needed

3. **CDN**
   - Fonts and icons from Google/Cloudflare CDN
   - Fast global loading

## Troubleshooting

**Issue: Animations not working**
- Clear browser cache
- Check browser console for errors
- Verify script.js is loaded

**Issue: Styles not loading**
- Verify styles.css path is correct
- Check for CSS syntax errors
- Clear browser cache

**Issue: Form not submitting**
- Check Formspree endpoint
- Verify internet connection
- Check browser console

## Next Steps

1. ✅ Customize content
2. ✅ Add your projects
3. ✅ Update images
4. ✅ Test locally
5. ✅ Deploy to Netlify/Vercel
6. ✅ Add custom domain (optional)
7. ✅ Share with the world!

## Support

Need help?
- 📧 Email: muhammadhaseeb0070@gmail.com
- 🐙 GitHub: [@MuhammadHaseeb0070](https://github.com/MuhammadHaseeb0070)
- 💼 LinkedIn: [Muhammad Haseeb](https://www.linkedin.com/in/muhammad-haseeb-b4544a257/)

---

**You're all set!** 🎉 Start customizing and make this portfolio truly yours!
