# Theme Toggle Testing Instructions

## Quick Test

1. **Open test-toggle.html** in your browser
   - This is a diagnostic page that shows console output on-screen
   - It will tell you exactly what's happening with the toggle

2. **Look for the console output** on the page (green text)
   - Should see: "Theme toggle: Initializing..."
   - Should see: "Theme toggle: Button created and added to navbar"
   - Should see: "Toggle button found: true"

3. **Click the sun/moon icon** at the end of the navbar
   - You should see console messages when you click
   - The theme should change
   - The icon should switch between sun and moon

## Testing on Real Pages

1. **Open index.html** in your browser
2. **Open Browser DevTools** (F12)
3. **Go to the Console tab**
4. **Look for these messages:**
   ```
   Theme toggle: Initializing...
   Theme toggle: Current theme is dark
   Theme toggle: Found navbar-nav
   Theme toggle: Button created and added to navbar
   Theme toggle: Adding click listener
   Theme toggle: Initialization complete
   ```

5. **Check if button appears:**
   - Look at the END of the navbar (after "Contact Us")
   - Should see a sun ☀️ icon (in dark mode) or moon 🌙 icon (in light mode)

6. **Click the icon:**
   - Should see in console: "Theme toggle: Button clicked!"
   - Theme should change
   - Background, colors, and icon should all change

## Troubleshooting

### If you see "navbar-nav not found" error:
- The JavaScript can't find the navbar
- Open DevTools Console and run: `document.querySelector('.navbar-nav')`
- If this returns `null`, the navbar structure is different than expected

### If button appears but doesn't work when clicked:
- Check Console for "Button clicked!" message
- If no message appears, the click event isn't firing
- Try clicking exactly on the icon

### If icons don't appear (just empty space):
- Font Awesome may not be loaded
- Check Console for any 404 errors for CSS files
- Check Network tab in DevTools

### If theme changes but icon doesn't update:
- Font Awesome classes might be wrong
- Try this in Console: `document.querySelector('.theme-toggle-nav').innerHTML = '<i class="fas fa-sun"></i>'`

## Manual Testing in Console

If nothing works, try these commands in the browser Console:

```javascript
// Check if navbar exists
document.querySelector('.navbar-nav')

// Check if button exists
document.querySelector('.theme-toggle-nav')

// Manually toggle theme
document.documentElement.setAttribute('data-theme', 'light')
document.documentElement.setAttribute('data-theme', 'dark')

// Check current theme
document.documentElement.getAttribute('data-theme')

// Check localStorage
localStorage.getItem('theme-preference')
```

## Expected Behavior

- **Dark Mode (default):**
  - Dark background with blue/purple gradients
  - Light text
  - Sun icon ☀️ in navbar (meaning "switch to light")

- **Light Mode:**
  - Light background with subtle gradients
  - Dark text  
  - Moon icon 🌙 in navbar (meaning "switch to dark")

- **Persistence:**
  - Your choice is saved in localStorage
  - Refreshing the page keeps your theme
  - Works across all pages

## Files Modified

- `js/main.js` - Added theme toggle logic with debug logging
- `css/style.css` - Added theme toggle button styling
- All HTML files - Added zero-flash theme initialization script

## Contact

If you see specific error messages in the console, please share them so I can help debug further!
