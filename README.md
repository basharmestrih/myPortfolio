# Modern Portfolio Website

A beautiful, responsive, dark-mode portfolio website built with React, Tailwind CSS, and i18n for easy content management.

## Features

✨ **Modern Design**
- Dark mode with bold typography
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Clean and professional UI/UX

🎯 **Sections**
- **About**: Showcase your name, bio, and professional info with an image card
- **Experience**: Display your work history with detailed job descriptions
- **Projects**: Highlight your best projects with descriptions, tech stack, and images
- **Contact**: Easy-to-use contact form and social media links

🌐 **Easy Content Management**
- All content stored in JSON translation files
- No need to touch code to update content
- Ready for multiple language support
- Simple data structure for quick updates

⚙️ **Built With**
- React 18
- Tailwind CSS
- Vite (fast build tool)
- i18next (internationalization)
- Modern JavaScript (ES6+)

## Quick Start

### 1. Prerequisites
Make sure you have Node.js installed (version 14 or higher)
Download from: https://nodejs.org/

### 2. Installation

```bash
# Navigate to the project folder
cd portfolio-website

# Install dependencies
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

This creates a `dist` folder ready to deploy.

## 📝 How to Customize Your Content

### Edit Your Content (MAIN FILE)

Open `src/locales/en.json` - This is where all your content lives!

**Change your name:**
```json
"about": {
  "name": "Your Name"
}
```

**Update your bio:**
```json
"description": "Your bio text here..."
```

**Add your projects:**
```json
"projects": {
  "items": [
    {
      "name": "Project Name",
      "description": "Project description",
      "frameworks": ["React", "Tailwind CSS"],
      "imageUrl": "image-url-here",
      "link": "https://github.com"
    }
  ]
}
```

**Update experience:**
```json
"experience": {
  "jobs": [
    {
      "position": "Your Job Title",
      "company": "Company Name",
      "period": "2023 - Present",
      "description": "What you did...",
      "skills": ["Skill1", "Skill2"]
    }
  ]
}
```

**Change social media links:**

Open `src/constants/data.js` and edit the `socialLinks` array:

```javascript
export const socialLinks = [
  {
    name: 'GitHub',
    handle: '@yourhandle',
    icon: '🐙',
    url: 'https://github.com/yourprofile',
  },
  // Add more links...
]
```

### Change Images

1. **About Section Image**: Upload your photo to a hosting service (Unsplash, Imgur, etc.) and update the URL in `en.json`:
```json
"about": {
  "imageUrl": "your-image-url-here"
}
```

2. **Project Images**: Same process - update the `imageUrl` for each project in `en.json`

### Change Colors

Colors are defined in `tailwind.config.js`. The main colors used are:
- Blue: `bg-blue-500`, `text-blue-400`
- Gray: Dark theme uses gray-950, gray-900, gray-800

To change the primary color, find and replace:
- `blue-500` → your color
- `blue-400` → your lighter shade

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── About.jsx        # About section
│   │   ├── Experience.jsx   # Experience section
│   │   ├── Projects.jsx     # Projects section
│   │   └── Contact.jsx      # Contact section
│   ├── constants/
│   │   └── data.js          # Social links & data
│   ├── locales/
│   │   └── en.json          # ⭐ YOUR CONTENT HERE
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── i18n.js              # i18n configuration
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
├── vite.config.js           # Vite config
└── README.md                # This file
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project" and select your repository
4. Click Deploy - done! 🎉

### Deploy to Netlify

1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy!

### Deploy to GitHub Pages

```bash
# Add to package.json "homepage": "https://yourusername.github.io"
npm run build
npm install gh-pages --save-dev
npm run deploy
```

## 🎨 Customization Tips

### Add More Experience Items
Edit `src/locales/en.json` and add to the jobs array:
```json
{
  "position": "Your Job",
  "company": "Company",
  "period": "2023 - Present",
  "description": "Description",
  "skills": ["Skill1", "Skill2"]
}
```

### Add More Projects
Edit `src/locales/en.json` and add to the projects items array:
```json
{
  "name": "Project Name",
  "description": "Description",
  "frameworks": ["React", "Tailwind"],
  "imageUrl": "image-url",
  "link": "github-or-live-link"
}
```

### Change Font Sizes
In `tailwind.config.js`, modify the fontSize values to make text bigger or smaller.

### Add Animations
Tailwind CSS includes many animation classes:
- `hover:scale-105` - Grow on hover
- `transition-all` - Smooth transitions
- `animate-bounce` - Bouncing animation

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: Optimized for small screens
- **Tablet**: Better spacing and layout
- **Desktop**: Full featured experience

All breakpoints use Tailwind's responsive prefixes:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+

## ⚡ Performance

- Vite: Instant module replacement and fast builds
- Code splitting: Automatic optimization
- Minified CSS/JS in production
- Optimized images recommended

## 🐛 Troubleshooting

**npm install fails:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use:**
Edit `vite.config.js` and change the port number.

**Images not showing:**
- Check the image URL is correct
- Use https:// URLs
- Ensure images are publicly accessible

**Deployment issues:**
- Make sure `dist` folder is created: `npm run build`
- Check your deployment platform's build settings
- Verify environment variables if needed

## 📞 Contact Form Setup

The contact form is ready to use. To actually send emails, connect it to a service like:
- Formspree (https://formspree.io) - Free
- EmailJS (https://www.emailjs.com) - Free
- Netlify Forms - If deployed on Netlify

Example with Formspree:
1. Create account at formspree.io
2. Create new form
3. Update the form action in Contact.jsx

## 🎓 Learning Resources

- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- i18next: https://www.i18next.com

## 📄 License

This project is free to use and modify.

## 🤝 Need Help?

- Check the documentation above
- Review the code comments
- Visit the official docs for dependencies
- Common issues are in the Troubleshooting section

---

**Happy coding! 🚀**

Remember to:
1. Keep `en.json` updated with your content
2. Use proper image URLs
3. Test before deploying
4. Have fun customizing!
