# 🚀 Hostinger Quick Deployment - Agnivridhi India

## Step-by-Step Setup (10 minutes)

### 1️⃣ SSH into Hostinger

```bash
ssh u570936177@server.hostinger.com
# Enter your password
```

### 2️⃣ Navigate to Website Directory

```bash
cd domains/agnivridhiindia.com/public_html
```

### 3️⃣ Backup Old Files (Optional)

```bash
mkdir ../backup-$(date +%Y%m%d)
cp -r . ../backup-$(date +%Y%m%d)/
```

### 4️⃣ Pull Latest Next.js Code

```bash
git pull origin main
```

### 5️⃣ Install Node.js Dependencies

```bash
npm install --production
```

### 6️⃣ Create Environment File

```bash
nano .env.local
```

**Paste this and update values:**
```env
NODE_ENV=production
EMAIL_SERVICE=resend
RESEND_API_KEY=your_resend_api_key_here
ADMIN_EMAIL=info@agnivridhiindia.com
FROM_EMAIL=Agnivridhi India <noreply@agnivridhiindia.com>
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc0DP0rAAAAAKuwLNnne-ogAHK-5JH0ANJLsmk_
RECAPTCHA_SECRET_KEY=6Lc0DP0rAAAAALzusQ2hOtojKuLB-agshcJSsGX-
GOOGLE_SHEETS_ENABLED=true
GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbxhXssWcCEYQarFtOakmxU4iizigxPbPUiPf-_-Bb368ZFpB45GEw0lrKpXYgdk9Ix3/exec
NEXT_PUBLIC_GA_ID=G-H1GCZDZ513
NEXT_PUBLIC_GTM_ID=GT-P368QQPJ
NEXT_PUBLIC_SITE_URL=https://agnivridhiindia.com
PORT=3000
```

**Save:** `Ctrl+X`, then `Y`, then `Enter`

### 7️⃣ Build Next.js Application

```bash
npm run build
```

**This will take 2-3 minutes.**

### 8️⃣ Install PM2 (if not installed)

```bash
npm install -g pm2
```

### 9️⃣ Start Application with PM2

```bash
pm2 start npm --name "agnivridhi" -- start
pm2 save
pm2 startup
```

**Copy and run the command PM2 outputs!**

### 🔟 Verify Deployment

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs agnivridhi --lines 50

# Check if site is running
curl http://localhost:3000
```

### ✅ Test Live Site

Open browser: **https://agnivridhiindia.com**

---

## 📱 Quick Commands

### Deploy New Changes
```bash
cd domains/agnivridhiindia.com/public_html
git pull origin main
npm install --production
npm run build
pm2 restart agnivridhi
```

### View Logs
```bash
pm2 logs agnivridhi
```

### Restart App
```bash
pm2 restart agnivridhi
```

### Stop App
```bash
pm2 stop agnivridhi
```

### Check Status
```bash
pm2 status
pm2 monit  # Real-time monitoring
```

---

## 🔧 Troubleshooting

### Build Failed?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 Already in Use?
```bash
# Find process using port 3000
lsof -i :3000

# Kill it
kill -9 <PID>

# Or restart PM2
pm2 restart agnivridhi
```

### Site Not Loading?
1. Check PM2: `pm2 status`
2. Check logs: `pm2 logs agnivridhi`
3. Verify Apache proxy: Check `.htaccess` file
4. Test locally: `curl http://localhost:3000`

### Forms Not Working?
1. Check environment variables: `cat .env.local`
2. Test API: `curl http://localhost:3000/api/consultation`
3. Check Resend API key is correct

---

## 🎯 After Deployment Checklist

- [ ] Site loads: https://agnivridhiindia.com ✅
- [ ] All pages work: /about, /services, /contact ✅
- [ ] Forms submit successfully ✅
- [ ] Email notifications received ✅
- [ ] Google Analytics tracking ✅
- [ ] Mobile responsive ✅
- [ ] HTTPS enabled ✅
- [ ] PM2 auto-starts on reboot ✅

---

## 📞 Need Help?

**Hostinger Support:** https://www.hostinger.com/cpanel-login

**Common Issues:**
- Node.js version: Should be 18.x or higher
- Memory limit: Upgrade plan if needed
- SSL: Enable in Hostinger panel

---

**Your Next.js site is now live on Hostinger! 🎉**
