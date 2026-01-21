/**
 * Peraa Design System - Main JavaScript
 * 
 * Core functionality for interactive components.
 */

(function() {
  'use strict';

  /* ═══════════════════════════════════════════════════════════════════════════
     THEME TOGGLE
     ═══════════════════════════════════════════════════════════════════════════ */

  const ThemeManager = {
    STORAGE_KEY: 'peraa-theme',
    
    init() {
      // Check for saved preference or system preference
      const savedTheme = localStorage.getItem(this.STORAGE_KEY);
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      
      this.setTheme(theme);
      this.bindToggle();
      this.watchSystemPreference();
    },
    
    setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(this.STORAGE_KEY, theme);
      
      // Update toggle button if exists
      const toggleBtn = document.querySelector('[data-theme-toggle]');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
        
        // Toggle icon visibility
        const sunIcon = toggleBtn.querySelector('.peraa-btn__icon--sun');
        const moonIcon = toggleBtn.querySelector('.peraa-btn__icon--moon');
        if (sunIcon && moonIcon) {
          // Show sun in dark mode, moon in light mode
          sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
          moonIcon.style.display = theme === 'light' ? 'block' : 'none';
        }
      }
    },
    
    toggle() {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      this.setTheme(newTheme);
    },
    
    bindToggle() {
      document.addEventListener('click', (e) => {
        if (e.target.closest('[data-theme-toggle]')) {
          this.toggle();
        }
      });
    },
    
    watchSystemPreference() {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if no saved preference
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  };

  /* ═══════════════════════════════════════════════════════════════════════════
     TABS COMPONENT
     ═══════════════════════════════════════════════════════════════════════════ */

  const TabsManager = {
    init() {
      document.querySelectorAll('.peraa-tabs').forEach(tabsContainer => {
        this.setupTabs(tabsContainer);
      });
    },
    
    setupTabs(container) {
      const tabs = container.querySelectorAll('.peraa-tabs__tab');
      const panels = container.querySelectorAll('.peraa-tabs__panel');
      
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          this.activateTab(tabs, panels, index);
        });
        
        // Keyboard navigation
        tab.addEventListener('keydown', (e) => {
          this.handleKeydown(e, tabs, panels, index);
        });
      });
    },
    
    activateTab(tabs, panels, index) {
      // Deactivate all tabs
      tabs.forEach(t => {
        t.classList.remove('peraa-tabs__tab--active');
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      
      // Hide all panels
      panels.forEach(p => {
        p.classList.remove('peraa-tabs__panel--active');
      });
      
      // Activate selected tab
      tabs[index].classList.add('peraa-tabs__tab--active');
      tabs[index].setAttribute('aria-selected', 'true');
      tabs[index].setAttribute('tabindex', '0');
      tabs[index].focus();
      
      // Show selected panel
      if (panels[index]) {
        panels[index].classList.add('peraa-tabs__panel--active');
      }
    },
    
    handleKeydown(e, tabs, panels, currentIndex) {
      const KEYS = {
        LEFT: 'ArrowLeft',
        RIGHT: 'ArrowRight',
        HOME: 'Home',
        END: 'End'
      };
      
      let newIndex = currentIndex;
      
      switch (e.key) {
        case KEYS.LEFT:
          newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
          break;
        case KEYS.RIGHT:
          newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
          break;
        case KEYS.HOME:
          newIndex = 0;
          break;
        case KEYS.END:
          newIndex = tabs.length - 1;
          break;
        default:
          return;
      }
      
      e.preventDefault();
      this.activateTab(tabs, panels, newIndex);
    }
  };

  /* ═══════════════════════════════════════════════════════════════════════════
     FRAMEWORK SWITCHER
     For toggling between HTML, React, and Tailwind code examples
     ═══════════════════════════════════════════════════════════════════════════ */

  const FrameworkSwitcher = {
    STORAGE_KEY: 'peraa-framework-preference',

    init() {
      // Get saved preference or default to 'html'
      const savedFramework = localStorage.getItem(this.STORAGE_KEY) || 'html';
      this.setGlobalFramework(savedFramework);
      this.bindSwitchers();
    },

    setGlobalFramework(framework) {
      // Set global preference on body
      document.documentElement.setAttribute('data-framework-preference', framework);
      localStorage.setItem(this.STORAGE_KEY, framework);

      // Update all switcher buttons
      document.querySelectorAll('.peraa-framework-switch__btn').forEach(btn => {
        btn.classList.toggle(
          'peraa-framework-switch__btn--active',
          btn.getAttribute('data-framework') === framework
        );
      });

      // Update all code panels
      document.querySelectorAll('.peraa-framework-code').forEach(panel => {
        panel.classList.toggle(
          'peraa-framework-code--active',
          panel.getAttribute('data-code') === framework
        );
      });
    },

    bindSwitchers() {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.peraa-framework-switch__btn');
        if (btn) {
          const framework = btn.getAttribute('data-framework');
          this.setGlobalFramework(framework);
        }
      });
    }
  };

  /* ═══════════════════════════════════════════════════════════════════════════
     SMOOTH SCROLL
     ═══════════════════════════════════════════════════════════════════════════ */

  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (href === '#') return;
          
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  };

  /* ═══════════════════════════════════════════════════════════════════════════
     INITIALIZE
     ═══════════════════════════════════════════════════════════════════════════ */

  document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    TabsManager.init();
    SmoothScroll.init();
    FrameworkSwitcher.init();
  });

  // Expose to global scope for manual initialization if needed
  window.Peraa = {
    ThemeManager,
    TabsManager,
    SmoothScroll,
    FrameworkSwitcher
  };

})();
