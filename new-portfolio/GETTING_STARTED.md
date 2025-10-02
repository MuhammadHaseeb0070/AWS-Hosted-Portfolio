# Getting Started with Your New Portfolio

Welcome to your new portfolio! This guide will help you get up and running quickly.

## Quick Start (3 steps)

### 1. Navigate to the project
```bash
cd /workspace/new-portfolio
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Open in browser
Visit: http://localhost:3000

That's it! Your portfolio is now running. 🎉

## What You'll See

Your portfolio includes these sections:

1. **Hero/Banner** - "FULL STACK DEVELOPER" with your stats
2. **About Me** - Your introduction and philosophy
3. **Skills** - Tech stack organized by category
4. **Experience** - Work experience and education
5. **Projects** - Showcase of your 5 projects

## Important Files to Know

### Update Your Content
📁 `/lib/data.ts` - **Your content lives here**
- Personal info (email, phone, location)
- Social media links
- Tech stack
- Projects
- Experience

### Customize Appearance
📁 `/app/globals.css` - **Colors and styling**
- Change primary/secondary colors
- Adjust spacing
- Modify fonts

### Page Structure
📁 `/app/page.tsx` - **Main page structure**
- Order of sections
- Which sections to show

## Common Tasks

### Add a New Project

1. Open `/lib/data.ts`
2. Add to `PROJECTS` array:

```typescript
{
    title: 'My New Project',
    slug: 'my-new-project',
    techStack: ['React', 'Node.js'],
    thumbnail: '/projects/thumbnail/myproject.jpg',
    longThumbnail: '/projects/long/myproject.jpg',
    images: ['/projects/images/myproject1.jpg'],
    liveUrl: 'https://myproject.com',
    sourceCode: 'https://github.com/you/myproject',
    year: 2024,
    description: 'Description here...',
    role: 'Your role...',
}
```

3. Add project images to `/public/projects/`

### Update Your Info

Edit these fields in `/lib/data.ts`:

```typescript
export const GENERAL_INFO = {
    email: 'your-email@example.com',
    phone: '+92XXXXXXXXXX',
    location: 'Your City, Country',
    // ...
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/yourusername' },
    { name: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
    // ...
];
```

### Change Colors

Edit `/app/globals.css`:

```css
:root {
    --primary: 140 100% 47%;    /* Green - change HSL values */
    --secondary: 193 100% 47%;  /* Blue - change HSL values */
}
```

**HSL Color Picker**: https://hslpicker.com/

## Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality
```

## Project Structure (Simplified)

```
new-portfolio/
├── app/
│   ├── _components/     # Page sections (Banner, About, etc.)
│   ├── globals.css      # Styles and colors
│   ├── layout.tsx       # Page wrapper (Navbar, Footer)
│   └── page.tsx         # Main page (combines all sections)
│
├── components/          # Reusable pieces (Button, Navbar, etc.)
│
├── lib/
│   └── data.ts          # 👈 YOUR CONTENT HERE
│
├── public/
│   └── projects/        # 👈 YOUR IMAGES HERE
│
└── package.json         # Dependencies
```

## Adding Images

### Project Images

1. Add to `/public/projects/images/`:
   - `myproject1.jpg`
   - `myproject2.jpg`
   - etc.

2. Create thumbnails (recommended sizes):
   - Thumbnail: 600x400px
   - Long thumbnail: 1200x600px
   - Images: 1920x1080px

3. Update paths in `/lib/data.ts`

### Tech Stack Logos

Add 64x64px icons to `/public/logo/`:
- `react.png`
- `node.png`
- `typescript.png`
- etc.

**Get free logos**: [Simple Icons](https://simpleicons.org/)

## Testing Your Changes

1. Make changes to any file
2. Save the file
3. Browser auto-refreshes (Hot Reload)
4. See changes instantly!

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Changes Not Showing
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Restart dev server (Ctrl+C, then `npm run dev`)

### Build Errors
```bash
# Clean and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Can't Find a File
All paths in code are relative to project root:
- `/public/image.jpg` → actual location: `/workspace/new-portfolio/public/image.jpg`
- `@/lib/data` → actual location: `/workspace/new-portfolio/lib/data.ts`

## Keyboard Shortcuts (Dev Server)

- `Ctrl+C` - Stop server
- Save file - Auto-reload browser
- Click links - Navigate in browser

## Browser DevTools

Press `F12` or `Ctrl+Shift+I` to open developer tools:
- **Console** - See errors and logs
- **Network** - See loading times
- **Elements** - Inspect HTML/CSS

## Mobile Testing

Test on mobile devices:

1. Find your local IP:
```bash
ifconfig  # Mac/Linux
ipconfig  # Windows
```

2. On phone, visit: `http://YOUR-IP:3000`

Or use browser DevTools:
- Chrome: F12 → Toggle Device Toolbar
- Firefox: F12 → Responsive Design Mode

## Performance Tips

- ✅ Use WebP images (smaller size)
- ✅ Compress images before adding
- ✅ Keep animations smooth (avoid heavy effects)
- ✅ Test on slow connections

## Learn More

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### React
- [React Documentation](https://react.dev/)
- [React Tutorial](https://react.dev/learn)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)

### GSAP (Animations)
- [GSAP Docs](https://gsap.com/docs/)
- [GSAP Cheat Sheet](https://gsap.com/cheatsheet/)

## Ready to Deploy?

Once you're happy with your changes:

1. Test the production build:
```bash
npm run build
npm run start
```

2. If everything works, follow the deployment guide:
   - Read `DEPLOYMENT.md`
   - Deploy to Vercel (easiest)
   - Or choose your preferred platform

## Need Help?

1. Check existing documentation:
   - `README.md` - Overview
   - `MIGRATION_SUMMARY.md` - What was built
   - `DEPLOYMENT.md` - How to deploy

2. Check the original portfolio:
   - Live site: https://www.tajmirul.site/
   - Source code: https://github.com/Tajmirul/portfolio-2.0

3. Next.js community:
   - [GitHub Discussions](https://github.com/vercel/next.js/discussions)
   - [Discord](https://nextjs.org/discord)

## Tips for Success

1. **Start Small** - Change one thing at a time
2. **Test Often** - Check browser after each change
3. **Use Git** - Commit working versions
4. **Ask for Help** - Community is friendly
5. **Have Fun!** - This is YOUR portfolio

---

**Happy coding! 🚀**

Your portfolio is production-ready and waiting to showcase your amazing work to the world.
