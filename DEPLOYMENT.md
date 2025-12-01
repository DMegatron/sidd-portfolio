# Vercel Deployment Guide

## ✅ Project is Ready for Vercel Deployment

Your portfolio is now fully configured for Vercel deployment. Here's what has been set up:

### Files Configured

1. **vercel.json** - Vercel configuration file

   - Build command: `npm run build`
   - Output directory: `dist`
   - SPA routing configured (all routes redirect to index.html)

2. **.gitignore** - Updated with Vercel-specific entries

   - `.vercel` folder excluded

3. **package.json** - Build scripts ready
   - `npm run build` - Production build
   - `npm run preview` - Preview production build locally

### Assets Included

- ✅ Resume PDF moved to `public/resume.pdf`
- ✅ All favicon assets in `public/` folder
- ✅ Profile image (`Sidd.webp`) in `public/` folder

### Build Verification

Build completed successfully:

- Output: `dist/` folder
- Bundle size: ~337 KB (gzipped: ~107 KB)
- CSS: ~23 KB (gzipped: ~4.5 KB)

---

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## 🔧 Environment Variables

No environment variables are required for this project.

---

## 📝 Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads correctly
- [ ] Favicon displays in browser tab
- [ ] Title shows "Siddhartha Bhunia | Assistant Bank Manager"
- [ ] Profile image displays in navbar and About section
- [ ] "View Resume" button opens PDF correctly
- [ ] Theme toggle works (light/dark/system)
- [ ] Floating buttons appear on scroll (Contact Me & Back to Top)
- [ ] All navigation links work
- [ ] Contact form functions properly
- [ ] Responsive design works on mobile/tablet

---

## 🎨 Custom Domain (Optional)

To add a custom domain:

1. Go to your project on Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel

---

## 🔄 Automatic Deployments

Once connected to GitHub:

- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments
- Vercel provides unique URLs for each deployment

---

## 📊 Performance Tips

Your site is already optimized with:

- ✅ Vite's optimized production build
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Tailwind CSS purging (removes unused styles)
- ✅ Framer Motion animations

---

## 🐛 Troubleshooting

**Build fails?**

- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally

**Assets not loading?**

- Verify all assets are in the `public/` folder
- Use absolute paths starting with `/` (e.g., `/resume.pdf`)

**Routing issues?**

- `vercel.json` already configured for SPA routing
- All routes redirect to `index.html`

---

## 📞 Support

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/guide/
