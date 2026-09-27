# 🚀 Portfolio Website - Setup Guide

## Step 1: Download Node.js

Visit: https://nodejs.org/
- Download LTS (Long Term Support) version
- Install it on your computer
- Verify installation by opening terminal/command prompt and typing:
  ```bash
  node --version
  npm --version
  ```

## Step 2: Set Up Your Project

1. **Extract the project folder** to where you want it on your laptop
2. **Open terminal/command prompt** in the project folder
3. **Install dependencies:**
   ```bash
   npm install
   ```
   This will download all required libraries (takes 2-5 minutes)

## Step 3: Run the Website

```bash
npm run dev
```

Your website will automatically open at `http://localhost:3000`

## Step 4: Customize Your Content

### 🎯 MOST IMPORTANT FILE:
**`src/locales/en.json`** - This is where you change everything!

Open this file and update:

```json
{
  "about": {
    "name": "CHANGE THIS TO YOUR NAME",
    "title": "CHANGE THIS TO YOUR TITLE",
    "description": "CHANGE THIS TO YOUR BIO",
    // ... more content
  }
}
```

### Edit Other Data:

**Social Links** → Open `src/constants/data.js` and update:
```javascript
export const socialLinks = [
  {
    name: 'GitHub',
    handle: '@YourGitHub',
    icon: '🐙',
    url: 'https://github.com/yourprofile',
  },
  // ... add more
]
```

## Step 5: Add Your Images

1. **Upload your photo** to any of these services (free):
   - Unsplash (unsplash.com)
   - Imgur (imgur.com)
   - CloudinaryDemo
   
2. **Get the image URL** (copy link)

3. **Paste in `en.json`**:
   ```json
   "imageUrl": "paste-your-image-url-here"
   ```

## Step 6: Update Experience & Projects

### Add Experience:

In `en.json`, update the experience jobs array:
```json
"experience": {
  "jobs": [
    {
      "position": "Your Job Title",
      "company": "Company Name",
      "period": "2023 - Present",
      "description": "What you did there...",
      "skills": ["React", "JavaScript", "CSS"]
    }
  ]
}
```

### Add Projects:

In `en.json`, update the projects items array:
```json
"projects": {
  "items": [
    {
      "name": "Project Name",
      "description": "What this project does...",
      "frameworks": ["React", "Tailwind CSS", "API"],
      "imageUrl": "image-url-here",
      "link": "https://github.com/your-project"
    }
  ]
}
```

## Step 7: Preview Changes

- The website auto-refreshes when you save files
- Just save and check your browser
- Make changes to `en.json` → Save → Refresh browser

## Step 8: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with the production-ready website.

## Step 9: Deploy (Choose One)

### Option A: Vercel (Easiest) ⭐

1. Create account at https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click Deploy
5. Done! Your site is live

### Option B: Netlify

1. Create account at https://netlify.com
2. Click "New site from Git"
3. Select your GitHub repository
4. Drag and drop the `dist` folder
5. Done!

### Option C: GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch
4. Select `/docs` folder
5. Save

## Customization Checklist

- [ ] Changed name in `en.json`
- [ ] Updated bio/description
- [ ] Added profile image URL
- [ ] Updated experience jobs
- [ ] Added your projects
- [ ] Updated social links
- [ ] Changed email address
- [ ] Updated phone number
- [ ] Changed location
- [ ] Tested website in browser
- [ ] Built for production
- [ ] Deployed to hosting

## Quick Command Reference

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies (only once)
npm install
```

## File Structure You Need to Know

```
portfolio-website/
├── src/locales/en.json          ⭐ EDIT THIS FOR CONTENT
├── src/constants/data.js        ⭐ EDIT THIS FOR SOCIAL LINKS
├── src/components/              Code (usually no changes needed)
├── package.json                 Dependencies (no changes needed)
└── README.md                    Full documentation
```

## Common Issues & Solutions

**"npm not found"**
→ Node.js not installed. Download from nodejs.org

**"Port 3000 already in use"**
→ Change port in `vite.config.js` from 3000 to 3001

**"Images not showing"**
→ Check URL is correct and uses https://

**"Website looks weird"**
→ Clear browser cache: Ctrl+Shift+Delete or Cmd+Shift+Delete

**"Changes not showing"**
→ Save file and refresh browser (F5 or Cmd+R)

## Need Help?

- Check the `README.md` file for more details
- Look at the code comments in the files
- Visit nodejs.org/docs for Node.js help
- Visit tailwindcss.com for styling help

## 📧 Email Form Setup

The contact form looks great but doesn't send emails yet. To add email functionality:

1. Go to https://formspree.io
2. Sign up for free
3. Create a new form
4. Copy your form endpoint
5. Update the form action in `src/components/Contact.jsx`

Alternative free services:
- EmailJS (emailjs.com)
- Netlify Forms (if deployed on Netlify)
- Formsubmit (formsubmit.co)

---

**You're all set! Start by editing `src/locales/en.json` and watch your portfolio come to life! 🎉**
