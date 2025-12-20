# Vercel Configuration Fix

## Issue Found
Your Vercel project is configured to look for the Next.js app in the `agnivridhi-site` subfolder, but after the migration, all files are now at the **root directory**.

## Solution
You must update your Vercel project settings:

### Steps to Fix:
1. Go to **https://vercel.com/dashboard**
2. Click on your project: **agnivridhi**
3. Go to **Settings** tab
4. Scroll down to **General** section
5. Find **"Root Directory"** setting (currently set to `agnivridhi-site`)
6. Change it to:
   - Either `.` (dot)
   - Or leave it empty
7. Click **Save**
8. Go back to **Deployments** tab
9. Click the three dots (...) on the latest deployment
10. Select **"Redeploy"**

Wait a few minutes for the deployment to complete. Your site should now load at the root URL!

## Why This Happened
- Old structure: Project was in `/agnivridhi-site/` subfolder
- New structure: After Next.js migration and cleanup, everything moved to root
- Vercel was still looking in the old subfolder, causing 404 errors

## Current Structure
```
├── pages/          ← Your Next.js pages
├── components/     ← React components
├── public/         ← Static assets
├── package.json    ← Dependencies
├── next.config.js  ← Next.js config
└── vercel.json     ← Vercel configuration
```
