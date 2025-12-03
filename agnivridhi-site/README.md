# 🚀 Agnivridhi India - Next.js Website

Modern, high-performance business consulting website built with Next.js 14, React 18, Tailwind CSS, and Framer Motion.

## ✨ Project Status: PRODUCTION READY

**All Features Complete:**
- ✅ 18 pages fully built and tested
- ✅ Comprehensive SEO optimization
- ✅ Smooth animations and micro-interactions
- ✅ Mobile-first responsive design
- ✅ Performance optimized (lazy loading, code splitting)
- ✅ Production build successful (all pages generating correctly)

## 🚀 Features

- ✅ **Modern UI** with cyan/teal gradient theme
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Fast Performance** - Next.js with optimized images and code splitting
- ✅ **SEO Optimized** - Meta tags, OpenGraph, structured data
- ✅ **Analytics Integration** - Google Analytics, GTM, Facebook Pixel
- ✅ **Contact Forms** - With email notifications and Google Sheets integration
- ✅ **Smooth Animations** - Using Framer Motion
- ✅ **reCAPTCHA v3** - Spam protection

## 📁 Project Structure

```
agnivridhi-site/
├── components/          # React components
│   ├── ConsultationModal.jsx
│   ├── HeroLottie.jsx
│   ├── Layout.jsx
│   └── Navbar.jsx
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   │   └── consultation.js
│   ├── _app.js         # App wrapper
│   ├── _document.js    # Document wrapper
│   ├── index.js        # Home page
│   ├── about.js        # About page
│   ├── services.js     # Services page
│   └── contact.js      # Contact page
├── public/             # Static assets
│   ├── logo1.png
│   ├── logo2.png
│   └── lottie/
├── styles/             # Global styles
│   └── globals.css
└── tailwind.config.js  # Tailwind configuration
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** JavaScript/React 18
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Forms:** React Hooks
- **Email:** Resend API (recommended)
- **Analytics:** Google Analytics, GTM, Facebook Pixel
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Utkarsh1506/agnivridhi.git
   cd agnivridhi-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Edit `.env.local`** with your credentials:
   ```env
   # Email Service (Resend recommended)
   EMAIL_SERVICE=resend
   RESEND_API_KEY=your_resend_api_key_here
   ADMIN_EMAIL=info@agnivridhiindia.com
   FROM_EMAIL=Agnivridhi India <noreply@agnivridhiindia.com>

   # reCAPTCHA
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key

   # Google Sheets (optional)
   GOOGLE_SHEETS_ENABLED=true
   GOOGLE_SHEETS_URL=your_google_apps_script_url

   # Analytics
   NEXT_PUBLIC_GA_ID=G-H1GCZDZ513
   NEXT_PUBLIC_GTM_ID=GT-P368QQPJ
   ```

5. **Run development server:**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Get API key from dashboard
4. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```

## 🔐 reCAPTCHA Setup

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Register a new site (v3)
3. Add site key and secret key to `.env.local`

## 📊 Google Sheets Integration (Optional)

1. Create a Google Sheet
2. Go to Extensions → Apps Script
3. Copy code from `google-sheets-script.js`
4. Deploy as web app
5. Copy deployment URL to `.env.local`

## 🚀 Deployment

### Deploy to Hostinger (Current Setup)

**Quick Start:** See [QUICK_SETUP.md](./QUICK_SETUP.md) for step-by-step instructions.

**Detailed Guide:** See [HOSTINGER_DEPLOYMENT.md](./HOSTINGER_DEPLOYMENT.md) for complete documentation.

**One-Line Deploy:**
```bash
cd domains/agnivridhiindia.com/public_html && git pull && npm install --production && npm run build && pm2 restart agnivridhi
```

### Deploy to Vercel (Alternative)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy!

3. **Add custom domain:**
   - Go to Project Settings → Domains
   - Add `agnivridhiindia.com`
   - Update DNS records as instructed

### Environment Variables (Both Platforms)

Add these in Vercel Dashboard → Settings → Environment Variables:

```
EMAIL_SERVICE=resend
RESEND_API_KEY=your_key
ADMIN_EMAIL=info@agnivridhiindia.com
FROM_EMAIL=Agnivridhi India <noreply@agnivridhiindia.com>
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
GOOGLE_SHEETS_ENABLED=true
GOOGLE_SHEETS_URL=your_url
NEXT_PUBLIC_GA_ID=G-H1GCZDZ513
NEXT_PUBLIC_GTM_ID=GT-P368QQPJ
```

## 🎨 Color Theme

The site uses a **cyan/teal gradient theme**:

- Primary: Cyan (#06b6d4, #0891b2, #155e75)
- Secondary: Teal (#14b8a6, #0d9488)
- Gradients: `gradient-hero`, `gradient-cyan`, `gradient-teal`

## 📱 Pages

- **Home** (`/`) - Hero section with Lottie animation, services, stats
- **About** (`/about`) - Company mission, values, team
- **Services** (`/services`) - Funding, certifications, growth services
- **Contact** (`/contact`) - Contact form with location info

## 🔧 API Routes

### `/api/consultation`

Handles consultation form submissions:
- Validates form data
- Verifies reCAPTCHA
- Sends admin notification email
- Sends auto-responder to user
- Pushes to Google Sheets (optional)

**Request:**
```json
{
  "fullName": "John Doe",
  "mobile": "9876543210",
  "email": "john@example.com",
  "businessType": "Manufacturing",
  "fundingRequired": "₹10-25 Lakhs",
  "serviceInterested": "CGTMSE Loan",
  "message": "Need funding for expansion"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We have received your consultation request.",
  "data": {
    "referenceId": "AGNI-1234567890",
    "adminEmailSent": true,
    "autoResponderSent": true
  }
}
```

## 🧪 Testing

Test the consultation form:
1. Fill out form on `/contact` or click "Get Started"
2. Check console for API response
3. Verify emails received (if configured)
4. Check Google Sheet (if configured)

## 📈 Analytics

The site includes:
- **Google Analytics 4** (GA4) - Page views, events
- **Google Tag Manager** - Tag management
- **Facebook Pixel** - Ad tracking
- Route change tracking in `_app.js`

## 🔒 Security

- reCAPTCHA v3 for form spam protection
- Input sanitization in API routes
- Environment variables for sensitive data
- HTTPS enforced in production

## 🐛 Troubleshooting

**Forms not submitting:**
- Check API route logs in Vercel
- Verify environment variables
- Check reCAPTCHA configuration

**Emails not sending:**
- Verify Resend API key
- Check domain verification
- Review Vercel function logs

**Images not loading:**
- Ensure files are in `public/` folder
- Check Next.js image optimization settings

## 📞 Support

For issues or questions:
- Email: info@agnivridhiindia.com
- Phone: +91 9289555190

## 📄 License

Copyright © 2025 Agnivridhi India Pvt. Ltd. All rights reserved.

---

Built with ❤️ using Next.js and Tailwind CSS
