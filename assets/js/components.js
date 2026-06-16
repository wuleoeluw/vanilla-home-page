class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const currentPage = this.getAttribute('current-page') || 'home';
    const basePath = this.getAttribute('base-path') || './';
    
    const navItems = [
      { label: 'Home', href: `${basePath}`, page: 'home' },
      { label: 'Institute for Living Languages', href: `${basePath}institute-for-living-languages/`, page: 'institute' },
      { label: 'The Great Evolution Game', href: `${basePath}the-great-evolution-game/`, page: 'game' }
    ];

    const navLinksHTML = navItems
      .map(item => {
        const isActive = currentPage === item.page ? ' active' : '';
        return `<a class="nav-link${isActive}" href="${item.href}">${item.label}</a>`;
      })
      .join('');

    const homeHref = basePath === './' ? './' : '../';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        .site-header {
          background-color: #f5f3f0;
          border-bottom: 1px solid #e0dbd3;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #1f2a44;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        
        .brand:hover {
          opacity: 0.8;
        }
        
        .brand-mark {
          font-size: 1.25rem;
          letter-spacing: 0.05em;
          font-family: Georgia, serif;
        }
        
        .brand-text {
          display: none;
        }
        
        @media (min-width: 768px) {
          .brand-text {
            display: inline;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
        }
        
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1f2a44;
          padding: 0.5rem 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: opacity 0.2s;
        }
        
        .menu-toggle:hover {
          opacity: 0.7;
        }
        
        .menu-toggle.active::after {
          content: ' ✕';
        }
        
        .menu-toggle:not(.active)::after {
          content: ' ☰';
        }
        
        @media (max-width: 767px) {
          .menu-toggle {
            display: block;
          }
          
          .site-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #f5f3f0;
            border-bottom: 1px solid #e0dbd3;
            padding: 1rem 2rem;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .site-nav.open {
            display: flex;
          }
        }
        
        @media (min-width: 768px) {
          .site-nav {
            display: flex;
            gap: 2rem;
          }
        }
        
        .nav-link {
          text-decoration: none;
          color: #1f2a44;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.2s;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
        }
        
        .nav-link:hover {
          color: #6496c8;
        }
        
        .nav-link.active {
          color: #6496c8;
          border-bottom-color: #6496c8;
        }
      </style>

      <header class="site-header">
        <div class="header-bar">
          <a class="brand" href="${homeHref}" aria-label="Global Languages Institute home">
            <span class="brand-mark">GLI</span>
            <span class="brand-text">Global Languages Institute</span>
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
            Menu
          </button>
          <nav class="site-nav" id="primary-navigation" aria-label="Primary">
            ${navLinksHTML}
          </nav>
        </div>
      </header>
    `;

    this.setupMenuToggle();
  }

  setupMenuToggle() {
    const menuToggle = this.shadowRoot.querySelector('.menu-toggle');
    const nav = this.shadowRoot.querySelector('.site-nav');

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.classList.toggle('active');
      nav.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
      });
    });
  }
}

customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const basePath = this.getAttribute('base-path') || './';
    
    const navItems = [
      { label: 'Home', href: `${basePath}` },
      { label: 'Institute for Living Languages', href: `${basePath}institute-for-living-languages/` },
      { label: 'The Great Evolution Game', href: `${basePath}the-great-evolution-game/` }
    ];

    const footerLinksHTML = navItems
      .map(item => `<a href="${item.href}">${item.label}</a>`)
      .join('');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        .site-footer {
          background-color: #f5f3f0;
          border-top: 1px solid #e0dbd3;
          margin-top: 4rem;
        }
        
        .footer-bar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: flex-start;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        p {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1f2a44;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }
        
        a {
          text-decoration: none;
          color: #1f2a44;
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        
        a:hover {
          color: #6496c8;
        }
        
        @media (min-width: 768px) {
          .footer-bar {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          
          .footer-links {
            flex-direction: row;
            gap: 2rem;
          }
        }
      </style>

      <footer class="site-footer">
        <div class="footer-bar">
          <p>Global Languages Institute</p>
          <div class="footer-links">
            ${footerLinksHTML}
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
