/**
 * Unified Site Configuration
 * Single source of truth for all site settings
 */

export const siteConfig = {
  // ============================================
  // SITE METADATA
  // ============================================
  site: {
    name: 'Blog',
    author: 'Frederick Altrock',
    url: 'https://example.com',
    description: 'Modern blog with technical content',
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    email: 'your.email@example.com',
    github: 'https://github.com/FrederickAlt',
    linkedin: 'https://linkedin.com/in/yourusername',
  },

  // ============================================
  // THEME COLORS
  // Customizable color scheme for entire site
  // ============================================
  theme: {
    colors: {
      // Primary color - Bright cyan for interactive highlights
      primary: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      // Title color - Darker cyan for headings
      title: {
        DEFAULT: '#0891b2',
        light: '#06b6d4',
        dark: '#0e7490',
      },
      // Accent color - Vibrant purple
      accent: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
      },
      // Background - Dark neutral with bluish tint
      background: {
        DEFAULT: '#23282b',
        light: '#2d3235',
        lighter: '#383d41',
      },
      // Surface - Cards and elevated content
      surface: {
        DEFAULT: '#2d3235',
        hover: '#383d41',
        light: '#4a4f54',
      },
    },
  },

  // ============================================
  // BLOG TOPICS
  // Organize content by topics
  // ============================================
  topics: [
    {
      name: 'Coding',
      slug: 'coding',
      description: 'Software development, programming languages, and technical tutorials.',
      icon: '💻',
      isEmoji: true,
    },
    {
      name: '3D Printing',
      slug: '3d-printing',
      description: 'Additive manufacturing, printer mods, and design techniques.',
      icon: '/3d-printer.png',
      isEmoji: false,
    },
    {
      name: 'AI',
      slug: 'ai',
      description: 'Artificial intelligence, machine learning, and neural networks.',
      icon: '🤖',
      isEmoji: true,
    },
    {
      name: 'Math',
      slug: 'math',
      description: 'Mathematical concepts, algorithms, and computational theory.',
      icon: '📐',
      isEmoji: true,
    },
  ],

  // ============================================
  // PRINTABLES
  // Printables.com model URLs
  // ============================================
  printables: {
    urls: [
      'https://www.printables.com/model/1415173-print-in-place-fully-articulated-skeleton-hand',
    ],
  },

  // ============================================
  // FEATURES
  // Toggle site features
  // ============================================
  features: {
    search: true,
    analytics: false,
    rss: true,
  },
} as const;

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig;
export type Topic = (typeof siteConfig.topics)[number];
export type ThemeColors = typeof siteConfig.theme.colors;
