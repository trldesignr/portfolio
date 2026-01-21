/**
 * Peraa Design System - Tailwind CSS Configuration
 * 
 * This config extends Tailwind with Peraa's design tokens.
 * 
 * @example
 * // In your tailwind.config.js
 * const peraaConfig = require('@peraa/tailwind/tailwind.config');
 * module.exports = {
 *   presets: [peraaConfig],
 *   // your customizations...
 * }
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary Purple Scale
        purple: {
          50: '#f5e9fc',
          100: '#e5c7f7',
          200: '#d3a1f1',
          300: '#bf79eb',
          400: '#ab51e5',
          500: '#6F1FAC', // Primary brand color
          600: '#5c1a8f',
          700: '#491572',
          800: '#361055',
          900: '#230b38',
        },
        // Neutral Scale
        neutral: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        // Accent Colors
        accent: {
          teal: '#14b8a6',
          coral: '#f97066',
          gold: '#eab308',
          blue: '#3b82f6',
        },
        // Status Colors
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#0ea5e9',
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],      // 12px
        sm: ['0.875rem', { lineHeight: '1.5' }],    // 14px
        base: ['1rem', { lineHeight: '1.5' }],      // 16px
        lg: ['1.125rem', { lineHeight: '1.375' }],  // 18px
        xl: ['1.25rem', { lineHeight: '1.375' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '1.375' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '1.2' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }],  // 36px
        '5xl': ['3rem', { lineHeight: '1.2' }],     // 48px
        '6xl': ['3.75rem', { lineHeight: '1.2' }],  // 60px
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        // Peraa spacing scale (4px base)
        'peraa-1': '0.25rem',   // 4px
        'peraa-2': '0.5rem',    // 8px
        'peraa-3': '0.75rem',   // 12px
        'peraa-4': '1rem',      // 16px
        'peraa-5': '1.25rem',   // 20px
        'peraa-6': '1.5rem',    // 24px
        'peraa-8': '2rem',      // 32px
        'peraa-10': '2.5rem',   // 40px
        'peraa-12': '3rem',     // 48px
        'peraa-16': '4rem',     // 64px
        'peraa-20': '5rem',     // 80px
        'peraa-24': '6rem',     // 96px
      },
      borderRadius: {
        'peraa-none': '0',
        'peraa-sm': '0.25rem',   // 4px
        'peraa-md': '0.5rem',    // 8px
        'peraa-lg': '0.75rem',   // 12px
        'peraa-xl': '1rem',      // 16px
        'peraa-2xl': '1.5rem',   // 24px
        'peraa-full': '9999px',
      },
      boxShadow: {
        'peraa-xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'peraa-sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'peraa-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'peraa-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'peraa-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'peraa-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      transitionDuration: {
        'peraa-75': '75ms',
        'peraa-100': '100ms',
        'peraa-150': '150ms',
        'peraa-200': '200ms',
        'peraa-300': '300ms',
        'peraa-500': '500ms',
      },
      transitionTimingFunction: {
        'peraa-ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'peraa-ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'peraa-ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        'peraa-0': '0',
        'peraa-10': '10',
        'peraa-20': '20',
        'peraa-30': '30',
        'peraa-40': '40',
        'peraa-50': '50',
        'peraa-100': '100',
      },
    },
  },
  plugins: [],
};
