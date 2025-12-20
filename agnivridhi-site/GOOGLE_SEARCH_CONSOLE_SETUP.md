# Google Search Console & Bing Webmaster Setup Guide

## 🔍 Google Search Console Setup

### Step 1: Add Property
1. Visit: https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix" option
4. Enter: `https://agnivridhiindia.com`
5. Click "Continue"

### Step 2: Verify Ownership (Choose One Method)

#### Method 1: HTML File Upload (Recommended)
```bash
# Google will provide a file like: googleXXXXXXXXXXXXXXXX.html
# Download it and place in: public/googleXXXXXXXXXXXXXXXX.html
# Access at: https://agnivridhiindia.com/googleXXXXXXXXXXXXXXXX.html
```

#### Method 2: DNS TXT Record
```
1. Copy the TXT record provided by Google
2. Add to your domain's DNS settings:
   Type: TXT
   Name: @
   Value: google-site-verification=XXXXXXXXXXXXXXXXXXXXX
3. Wait 24-48 hours for DNS propagation
4. Click "Verify" in Search Console
```

#### Method 3: Meta Tag (Already in _document.js)
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

### Step 3: Submit Sitemap
```
1. In Search Console, go to "Sitemaps"
2. Enter: sitemap.xml
3. Click "Submit"
4. Wait for Google to process (can take a few days)
```

### Step 4: Request Indexing
```
1. Go to "URL Inspection"
2. Enter each important URL:
   - https://agnivridhiindia.com/
   - https://agnivridhiindia.com/about
   - https://agnivridhiindia.com/services
   - https://agnivridhiindia.com/contact
3. Click "Request Indexing" for each
```

---

## 🔷 Bing Webmaster Tools Setup

### Step 1: Add Site
1. Visit: https://www.bing.com/webmasters
2. Click "Add Site"
3. Enter: `https://agnivridhiindia.com`

### Step 2: Verify Ownership (Choose One Method)

#### Option 1: XML File
```bash
# Download BingSiteAuth.xml from Bing
# Place in: public/BingSiteAuth.xml
```

#### Option 2: Meta Tag
```html
<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
```

### Step 3: Submit Sitemap
```
1. In Bing Webmaster, go to "Sitemaps"
2. Submit: https://agnivridhiindia.com/sitemap.xml
```

---

## 🌐 Google My Business Setup

### Step 1: Create/Claim Listing
1. Visit: https://www.google.com/business
2. Click "Manage now"
3. Enter business name: "Agnivridhi India"
4. Choose category: "Business Consultant"

### Step 2: Add Business Information
```
Business Name: Agnivridhi India
Category: Business Management Consultant
Address: [Your Business Address]
Phone: [Your Phone Number]
Website: https://agnivridhiindia.com
Hours: [Business Hours]
```

### Step 3: Verify Business
- Choose verification method (postcard, phone, email)
- Complete verification process

### Step 4: Optimize Listing
- Add business description (750 characters)
- Upload photos (exterior, interior, team, services)
- Add services with descriptions
- Enable messaging
- Set up Q&A
- Encourage customer reviews

---

## 📊 Analytics Setup

### Google Analytics 4 (GA4)

#### Step 1: Create Property
1. Visit: https://analytics.google.com
2. Click "Admin" → "Create Property"
3. Property name: "Agnivridhi India"
4. Select timezone and currency

#### Step 2: Create Data Stream
1. Choose "Web"
2. Enter: agnivridhiindia.com
3. Name: "Main Website"
4. Copy Measurement ID (G-XXXXXXXXXX)

#### Step 3: Install Tracking Code
Add to `pages/_document.js`:
```javascript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', {
      page_path: window.location.pathname,
    });
  `
}} />
```

---

## 🎯 Quick Setup Checklist

- [ ] Create Google Search Console account
- [ ] Verify site ownership in GSC
- [ ] Submit sitemap to GSC
- [ ] Request indexing for main pages
- [ ] Set up Bing Webmaster Tools
- [ ] Verify site in Bing
- [ ] Submit sitemap to Bing
- [ ] Create Google My Business listing
- [ ] Verify GMB listing
- [ ] Optimize GMB with photos and info
- [ ] Set up Google Analytics 4
- [ ] Install GA4 tracking code
- [ ] Set up Facebook Business Page
- [ ] Set up LinkedIn Company Page
- [ ] Create Twitter Business account

---

## 📈 Performance Monitoring

### Tools to Monitor Weekly
1. **Google Search Console**
   - Check for crawl errors
   - Monitor search queries
   - Track CTR and impressions

2. **Google Analytics**
   - Monitor traffic sources
   - Track user behavior
   - Analyze conversions

3. **PageSpeed Insights**
   - Test: https://pagespeed.web.dev
   - Target: 90+ score

4. **Mobile-Friendly Test**
   - Test: https://search.google.com/test/mobile-friendly
   - Ensure all pages pass

---

## 🔐 Security & Verification Files

After verification, these files may remain in /public:
- google[verification-code].html
- BingSiteAuth.xml
- robots.txt
- sitemap.xml

Keep them for continued verification!

---

## 📞 Support Resources

- Google Search Console Help: https://support.google.com/webmasters
- Bing Webmaster Help: https://www.bing.com/webmasters/help
- Google My Business Help: https://support.google.com/business
- Google Analytics Help: https://support.google.com/analytics

---

## ⏰ Timeline for Results

- **Week 1**: Set up all tools, submit sitemaps
- **Week 2-4**: Google starts crawling and indexing
- **Month 2-3**: Begin seeing search traffic
- **Month 4-6**: Ranking improvements visible
- **Month 6+**: Consistent organic traffic growth

Remember: SEO is a long-term strategy. Be patient and consistent!
