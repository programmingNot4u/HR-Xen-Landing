# HR-Xen - Marketing Website

A modern, professional static marketing website for a Human Resource Management (HRM) and Payroll SaaS product. Built with React, Vite, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by top-tier SaaS websites
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Built with shadcn/ui components for consistent UI
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Built with Vite for optimal build times and performance

## 🎨 Design System

- **Primary Color**: #ff6900 (Orange)
- **Typography**: Modern, clean fonts with proper hierarchy
- **Components**: Consistent shadcn/ui component library
- **Animations**: Subtle, professional animations using Framer Motion

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── home/              # Home page components
│   ├── Navbar.jsx         # Navigation component
│   ├── Footer.jsx         # Footer component
│   └── Layout.jsx         # Main layout wrapper
├── pages/                 # Page components
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── PricingPage.jsx
│   ├── SupportPage.jsx
│   ├── BlogPage.jsx
│   └── ContactPage.jsx
├── assets/                # Static assets
│   ├── images/
│   ├── logos/
│   └── icons/
├── lib/
│   └── utils.js          # Utility functions
├── App.jsx               # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hrm-marketing-site
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📄 Pages

### Home Page

- Hero section with compelling headline and CTA
- Client logos and trust indicators
- Feature highlights with icons and descriptions
- Customer testimonials
- FAQ preview
- Final call-to-action section

### Pricing Page

- Monthly/Annual pricing toggle with 20% savings badge
- Three pricing tiers (Starter, Growth, Enterprise)
- Feature comparison
- Add-ons section
- FAQ section
- Contact CTA

### About Page

- Company mission and vision
- Core values
- Team information
- Company statistics
- Contact CTA

### Support Page

- Multiple support channels
- Self-service resources
- Comprehensive FAQ with categories
- Contact information

### Blog Page

- Featured blog post
- Blog post grid with categories
- Search functionality
- Popular posts sidebar
- Newsletter signup

### Contact Page

- Contact form with validation
- Multiple contact methods
- Office locations
- Quick response guarantee

## 🎯 Key Features

### Navigation

- Sticky navbar with blur effect
- Mobile-responsive hamburger menu
- Features dropdown with detailed descriptions
- Clear CTAs (Get Demo, Login)

### Animations

- Scroll-triggered animations using Framer Motion
- Hover effects on interactive elements
- Smooth page transitions
- Loading animations

### Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized images and assets
- Touch-friendly interface

## 🔧 Customization

### Colors

Update the color palette in `tailwind.config.js` and `src/index.css`:

```javascript
colors: {
  primary: {
    DEFAULT: '#ff6900', // Your brand color
    // ... other shades
  }
}
```

### Content

- Update text content in component files
- Replace placeholder images in `src/assets/`
- Modify company information in Footer and About page

### Styling

- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Custom animations in `tailwind.config.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your repository
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload the `dist` folder

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about this project, please contact the development team.

---

Built with ❤️ for modern HR teams
