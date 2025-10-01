# Abdallah Ahmed - Portfolio Website

A modern, responsive portfolio website showcasing my front-end development skills and projects. Built with React, Vite, and Tailwind CSS.

## 🚀 Live Demo

**[View Live Portfolio](https://my-portfolio-git-main-abdallahs-projects-cc1bc744.vercel.app/)**

## ✨ Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Project Carousel** - Live previews of deployed projects
- **Contact Form** - Email integration for direct communication
- **Download Resume** - Easy access to CV download
- **Performance Optimized** - Fast loading with code splitting and lazy loading
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 5.4.20
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── myphoto.jpeg          # Profile photo
│   ├── myresume.pdf          # Resume/CV
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Landing section
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Skills showcase
│   │   ├── Projects.jsx      # Projects carousel
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer section
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles and animations
│   └── main.jsx              # App entry point
├── vercel.json               # Vercel deployment config
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdallah-A-Raafat/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist/` directory.

## 🎨 Customization

### Adding Your Information

1. **Profile Photo**: Replace `public/myphoto.jpeg` with your photo
2. **Resume**: Replace `public/myresume.pdf` with your CV
3. **Personal Info**: Update the content in each component file
4. **Projects**: Modify the projects array in `src/components/Projects.jsx`
5. **Contact**: Update email and social links in `src/components/Contact.jsx`

### Styling

The project uses Tailwind CSS with custom animations and gradients defined in `src/index.css`. You can:

- Modify color schemes in the CSS variables
- Adjust animations in the keyframes
- Update component styles using Tailwind classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

This project is configured for easy deployment on Vercel:

1. **Connect your GitHub repository to Vercel**
2. **Vercel will automatically detect the Vite configuration**
3. **Deploy with zero configuration**

The `vercel.json` file includes the necessary build settings for optimal deployment.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Lazy loading for images and components
- **SEO**: Proper meta tags and semantic HTML

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📞 Contact

- **Email**: abdallah.araafat@gmail.com
- **LinkedIn**: [Abdallah Ahmed](https://www.linkedin.com/in/abdallah-ahmed-112241317)
- **GitHub**: [Abdallah-A-Raafat](https://github.com/Abdallah-A-Raafat)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

---

**Built with ❤️ by Abdallah Ahmed**