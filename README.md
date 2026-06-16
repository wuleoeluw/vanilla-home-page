# Global Languages Institute

A clean, mobile-first static website for the Global Languages Institute featuring three public-facing pages built with semantic HTML, responsive CSS, and vanilla JavaScript.

## Design Direction

- **Simple, clean, text-focused** – no unnecessary embellishment
- **Mobile-first responsive layout** – stacks naturally on small screens, expands on desktop
- **Academic, global, trustworthy, and modern** aesthetic
- **Folder-based page structure** – easy to extend with new content

## Color Palette

- **Primary:** #1F2A44 (Oxford blue)
- **Secondary:** #EAE7DF (parchment cream)
- **Accent:** #B08D57 (muted gold)

## Pages

- **Home** (`/`) – Main landing page with mission, focus, and featured page cards
- **Institute for Living Languages** (`/institute-for-living-languages/`) – Institute overview and core commitments
- **The Great Evolution Game** (`/the-great-evolution-game/`) – Educational experience page concept

## Features

✓ **Web Components** – Reusable header and footer components (SiteHeader, SiteFooter) eliminate HTML duplication across pages  
✓ **SEO Optimized** – Canonical links, Open Graph tags, Twitter Cards, robots meta tags, and author metadata  
✓ **Browser Support** – X-UA-Compatible for IE, color-scheme for dark mode support across all modern browsers  
✓ **Social Media Ready** – og:image.png (1200x630px) for rich social previews  
✓ Internal navigation with active page indicators  
✓ Mobile-responsive hamburger menu  
✓ Footer with site links on every page  
✓ Clean, readable typography (IBM Plex Serif + Inter)  
✓ SVG favicon with GLI initials  
✓ Relative internal links for GitHub Pages compatibility  
✓ No build step required – pure HTML, CSS, and vanilla JS  

## File Structure

```
vanilla-home-page/
├── index.html                          (Home page)
├── institute-for-living-languages/
│   └── index.html                      (Institute page)
├── the-great-evolution-game/
│   └── index.html                      (Game page)
├── assets/
│   ├── css/
│   │   └── styles.css                  (Shared stylesheet)
│   ├── js/
│   │   ├── components.js               (Web Components: SiteHeader, SiteFooter)
│   │   └── main.js                     (Mobile nav toggle, page utilities)
│   └── og-image.png                    (Social media preview image 1200x630px)
└── README.md                           (This file)
```

## Architecture: Web Components

The site uses native Web Components to eliminate HTML duplication:

### SiteHeader
- Encapsulates header, navigation, and menu toggle logic
- Shadow DOM provides style isolation
- Attributes:
  - `current-page` – highlights active nav link (`home`, `institute`, `game`)
  - `base-path` – adjusts href paths based on page location (`./` or `../`)

### SiteFooter
- Encapsulates footer and navigation links
- Shadow DOM styling
- Attribute:
  - `base-path` – adjusts href paths

**Usage Example:**
```html
<site-header current-page="home" base-path="./"></site-header>
<site-footer base-path="./"></site-footer>
```

## SEO & Metadata

All pages include:
- **Canonical URLs** – Prevent duplicate content issues
- **Open Graph tags** – Better social media sharing (og:title, og:description, og:image, og:url)
- **Twitter Cards** – Optimized for Twitter/X sharing
- **Robots meta** – Index and follow directives
- **Author meta** – Credit to Global Languages Institute
- **X-UA-Compatible** – Better IE edge support
- **Color-scheme meta** – Dark mode browser support

**Note:** Update canonical URLs and og:image URL from `globallangjnstl.org` to your actual domain before deployment.

## Running Locally

Serve the site with any static HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (with npx)
npx http-server

# macOS
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings > Pages** in the repository.
3. Set **Source** to `main` branch, **folder** to `/ (root)`.
4. Save and wait for the site to deploy (typically 1–2 minutes).

The site will be available at `https://your-username.github.io/vanilla-home-page/`.

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- ARIA labels on navigation and interactive elements
- Sufficient color contrast ratios
- Keyboard-accessible menu toggle
- Responsive text sizing with `clamp()`

## Browser Support

The site is optimized for modern browsers and includes fallbacks for older versions:

**Modern Browsers (Chrome, Firefox, Safari, Edge):**
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS custom properties (variables)
- SVG support for favicon
- Web Components (Custom Elements)
- Shadow DOM

**Enhanced Compatibility:**
- `X-UA-Compatible: IE=edge` – Targets IE 11 in edge mode
- `color-scheme: light dark` – Native dark mode support
- Responsive design with `clamp()` for fluid typography
- Mobile-first progressive enhancement

## License

This demo is provided as-is for educational and portfolio purposes.
