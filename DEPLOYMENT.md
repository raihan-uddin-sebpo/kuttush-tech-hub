# Vercel Deployment Guide

## Prerequ3. Configure project settings:
   - Framework: **Next.js** (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)
6. Click "Deploy"

**Note**: No `vercel.json` configuration file is needed - Vercel automatically detects and optimizes Next.js applications with built-in skew protection and performance optimizations.
- Private repository created on GitHub
- Vercel account (free tier is sufficient)

## Step-by-Step Deployment

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial affiliate marketing website"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Deploy from your project directory:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Link to existing project? **N**
   - Project name: `affiliate-tech-landing-page` (or your choice)
   - Directory: **./** (current directory)
   - Override settings? **N** (use defaults)

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub account
4. Select your private repository
5. Configure project settings:
   - Framework: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. Click "Deploy"

### 3. Configure Environment Variables (Optional)
If you plan to use environment variables later:
1. In Vercel dashboard, go to Project Settings
2. Navigate to "Environment Variables"
3. Add variables from `.env.example`

### 4. Custom Domain (Optional)
1. In Vercel dashboard, go to Project Settings
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## Post-Deployment Checklist

### ✅ Technical Verification
- [ ] Site loads correctly at the Vercel URL
- [ ] All pages are accessible (Home, About, Reviews, Contact, Privacy, Terms)
- [ ] Navigation works between pages
- [ ] Responsive design works on mobile/tablet
- [ ] Dark mode toggle functions properly
- [ ] No console errors in browser

### ✅ SEO and Amazon Associates Preparation
- [ ] Update sitemap.xml with your actual domain
- [ ] Update robots.txt with your actual domain
- [ ] Add Google Search Console verification
- [ ] Submit sitemap to Google Search Console
- [ ] Test page loading speed with PageSpeed Insights
- [ ] Verify meta tags are populated correctly
- [ ] Check that affiliate disclaimers are visible

### ✅ Content Updates for Amazon Associates
Before applying to Amazon Associates, update:

1. **Replace placeholder content** with real product reviews
2. **Update site metadata** in `src/app/layout.tsx`:
   ```typescript
   metadataBase: new URL('https://your-actual-domain.com'),
   ```

3. **Update sitemap and robots.txt** in `src/app/sitemap.ts` and `src/app/robots.ts`

4. **Add real contact information** in the contact page

5. **Write original content** for at least 10-15 product reviews

6. **Create an About page** with your personal story and expertise

### ✅ Amazon Associates Application
Once your site has real content:

1. **Apply to Amazon Associates**:
   - Go to affiliate-program.amazon.com
   - Provide your website URL (Vercel domain or custom domain)
   - Complete tax information
   - Describe your website's purpose and audience

2. **Requirements for approval**:
   - Professional website design ✅ (Already done)
   - Original content ✅ (Add your reviews)
   - Clear navigation ✅ (Already done)
   - Privacy policy ✅ (Already done)
   - Terms of service ✅ (Already done)
   - Contact information ✅ (Already done)
   - At least 10 recent posts/reviews
   - Some traffic to your website

## Common Issues and Solutions

### Build Failures
- Check for ESLint errors in the build log
- Ensure all imports are correctly spelled
- Verify no unused variables or missing dependencies

### 404 Errors
- Ensure all internal links use Next.js `Link` component
- Check that page files are in correct `/app` directory structure

### Slow Loading
- Optimize images (use Next.js `Image` component)
- Minimize JavaScript bundles
- Enable Vercel's edge caching

## Next Steps After Deployment

1. **Content Creation**: Start writing genuine product reviews
2. **SEO Optimization**: Add structured data markup
3. **Analytics**: Add Google Analytics tracking
4. **Performance**: Monitor Core Web Vitals
5. **Social Media**: Create social media profiles for your brand
6. **Email List**: Set up newsletter signup functionality

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Amazon Associates Help](https://affiliate-program.amazon.com/help)
- [Google Search Console](https://search.google.com/search-console)

---

**Your affiliate marketing website is now ready for deployment and Amazon Associates application!** 🚀
