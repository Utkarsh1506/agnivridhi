#!/usr/bin/env node

/**
 * Installation Verification Script
 * Checks if the Agnivridhi Next.js project is set up correctly
 */

const fs = require('fs');
const path = require('path');

console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║  Agnivridhi Next.js Installation Verification       ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

let passed = 0;
let failed = 0;

function check(description, test) {
  try {
    const result = test();
    if (result) {
      console.log(`✅ ${description}`);
      passed++;
      return true;
    } else {
      console.log(`❌ ${description}`);
      failed++;
      return false;
    }
  } catch (error) {
    console.log(`❌ ${description} - ${error.message}`);
    failed++;
    return false;
  }
}

console.log('🔍 Checking Project Structure...\n');

// Check core files
check('package.json exists', () => fs.existsSync('package.json'));
check('next.config.js exists', () => fs.existsSync('next.config.js'));
check('tailwind.config.js exists', () => fs.existsSync('tailwind.config.js'));
check('postcss.config.js exists', () => fs.existsSync('postcss.config.js'));

console.log('\n🔍 Checking Directories...\n');

// Check directories
check('components/ directory exists', () => fs.existsSync('components'));
check('pages/ directory exists', () => fs.existsSync('pages'));
check('public/ directory exists', () => fs.existsSync('public'));
check('styles/ directory exists', () => fs.existsSync('styles'));
check('public/lottie/ directory exists', () => fs.existsSync('public/lottie'));

console.log('\n🔍 Checking Component Files...\n');

// Check component files
check('HeroLottie.jsx exists', () => fs.existsSync('components/HeroLottie.jsx'));
check('pages/_app.js exists', () => fs.existsSync('pages/_app.js'));
check('pages/_document.js exists', () => fs.existsSync('pages/_document.js'));
check('pages/index.js exists', () => fs.existsSync('pages/index.js'));

console.log('\n🔍 Checking Style Files...\n');

// Check style files
check('styles/globals.css exists', () => fs.existsSync('styles/globals.css'));

console.log('\n🔍 Checking Lottie Assets...\n');

// Check Lottie files
check('hero-blob.json exists', () => fs.existsSync('public/lottie/hero-blob.json'));
check('achievement-icon.json exists', () => fs.existsSync('public/lottie/achievement-icon.json'));

console.log('\n🔍 Checking Documentation...\n');

// Check documentation
check('README-NEXTJS.md exists', () => fs.existsSync('README-NEXTJS.md'));
check('QUICKSTART.md exists', () => fs.existsSync('QUICKSTART.md'));
check('DEPLOYMENT-GUIDE.md exists', () => fs.existsSync('DEPLOYMENT-GUIDE.md'));
check('TESTING-GUIDE.md exists', () => fs.existsSync('TESTING-GUIDE.md'));
check('PROJECT-SUMMARY.md exists', () => fs.existsSync('PROJECT-SUMMARY.md'));

console.log('\n🔍 Checking Dependencies...\n');

// Check package.json dependencies
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  check('next dependency present', () => packageJson.dependencies.next);
  check('react dependency present', () => packageJson.dependencies.react);
  check('framer-motion dependency present', () => packageJson.dependencies['framer-motion']);
  check('lottie-react dependency present', () => packageJson.dependencies['lottie-react']);
  check('tailwindcss dev dependency present', () => packageJson.devDependencies.tailwindcss);
  
  // Check if node_modules exists
  check('node_modules installed', () => fs.existsSync('node_modules'));
} catch (error) {
  console.log(`❌ Error reading package.json: ${error.message}`);
  failed++;
}

console.log('\n🔍 Checking Build Files...\n');

// Check if build was successful
check('.next directory exists (build run)', () => fs.existsSync('.next'));

console.log('\n' + '═'.repeat(60) + '\n');
console.log(`📊 Results: ${passed} passed, ${failed} failed\n`);

if (failed === 0) {
  console.log('✅ All checks passed! Your project is set up correctly.\n');
  console.log('🚀 Next steps:');
  console.log('   1. Run: npm run dev');
  console.log('   2. Open: http://localhost:3000');
  console.log('   3. Check: QUICKSTART.md for usage\n');
} else {
  console.log('⚠️  Some checks failed. Please review the errors above.\n');
  console.log('💡 Try running:');
  console.log('   npm install    (if dependencies missing)');
  console.log('   npm run build  (if build directory missing)\n');
}

console.log('📚 Documentation:');
console.log('   - QUICKSTART.md      → Quick start guide');
console.log('   - README-NEXTJS.md   → Full documentation');
console.log('   - TESTING-GUIDE.md   → QA checklist');
console.log('   - DEPLOYMENT-GUIDE.md → Production deployment\n');

process.exit(failed > 0 ? 1 : 0);
