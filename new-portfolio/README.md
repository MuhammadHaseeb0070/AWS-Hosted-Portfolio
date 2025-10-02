# Muhammad Haseeb - Portfolio

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and GSAP. This portfolio showcases projects, skills, and professional experience with smooth scroll animations and interactive UI elements.

## Design Inspiration

This portfolio is inspired by [Tajmirul Islam's portfolio](https://www.tajmirul.site/) and adapted with Muhammad Haseeb's content and information.

## Features

- ⚡ **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- 🎨 **Smooth Animations**: GSAP-powered scroll animations and transitions
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🎯 **Performance Optimized**: Fast loading times and optimized images
- ♿ **Accessible**: Keyboard navigation and ARIA labels
- 🎭 **Animated Menu**: Sleek hamburger menu with smooth transitions
- 🚀 **SEO Friendly**: Optimized meta tags and structured data

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animations
- **Lucide React** - Beautiful icons

### Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variants

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd new-portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
new-portfolio/
├── app/
│   ├── _components/      # Page-specific components
│   │   ├── AboutMe.tsx
│   │   ├── Banner.tsx
│   │   ├── Experiences.tsx
│   │   ├── Project.tsx
│   │   ├── ProjectList.tsx
│   │   └── Skills.tsx
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ArrowAnimation.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── SectionTitle.tsx
├── lib/
│   ├── data.ts          # Portfolio data
│   └── utils.ts         # Utility functions
├── public/
│   ├── projects/        # Project images
│   └── logo/            # Tech stack logos
├── types/
│   └── index.ts         # TypeScript types
└── tailwind.config.ts   # Tailwind configuration
```

## Customization

### Update Personal Information

Edit `/lib/data.ts` to update:
- Personal details (email, phone, location)
- Social media links
- Tech stack
- Projects
- Experience

### Modify Colors

Update color scheme in `/app/globals.css`:
```css
:root {
    --background: 0 0% 13%;
    --primary: 140 100% 47%;    /* Green accent */
    --secondary: 193 100% 47%;  /* Blue accent */
    /* ... other colors */
}
```

### Add Projects

Add new projects in `/lib/data.ts` in the `PROJECTS` array:
```typescript
{
    title: 'Project Name',
    slug: 'project-slug',
    techStack: ['Tech1', 'Tech2'],
    thumbnail: '/projects/thumbnail/image.jpg',
    // ... other fields
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project and deploy the `.next` folder:
```bash
npm run build
```

## Performance

- Lazy loading for images
- Code splitting by route
- Optimized animations with GSAP
- Minimal bundle size

## License

This project structure is based on Tajmirul Islam's portfolio (MIT License).
Content and customizations © 2024 Muhammad Haseeb

## Contact

- Email: muhammadhaseeb0070@gmail.com
- GitHub: [@MuhammadHaseeb0070](https://github.com/MuhammadHaseeb0070)
- LinkedIn: [muhammad-haseeb](https://www.linkedin.com/in/muhammad-haseeb-b4544a257/)

---

Built with ❤️ using Next.js and GSAP
