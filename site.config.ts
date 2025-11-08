/**
 * Unified Site Configuration
 * Single source of truth for all site settings
 */

export const siteConfig = {
  // ============================================
  // SITE METADATA
  // ============================================
  site: {
    name: 'Frederick Altrock',
    author: 'Frederick Altrock',
    url: 'https://FrederickAlt.github.io',
    description: 'Frederick Altrock - Mathematics PhD researcher at University of Münster specializing in AI and deep learning theory. Published at NeurIPS. Expertise in neural tangent kernels, training dynamics, PyTorch, probability theory, and systems programming.',
  },

  // ============================================
  // CONTACT INFORMATION
  // Leave empty ('') to hide
  // cv: relative path (/cv.pdf) or full URL
  // ============================================
  contact: {
    email: 'f.altrock@uni-muenster.de',
    github: 'https://github.com/FrederickAlt',
    linkedin: 'https://www.linkedin.com/in/frederick-altrock-39492124b/',
    cv: '',
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
      'https://www.printables.com/model/1395067-cable-hook-small',
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

  // ============================================
  // PAGE SEO
  // Configure SEO metadata for each page
  // ============================================
  pages: {
    home: {
      title: 'Frederick Altrock - AI Researcher & Math PhD | University of Münster',
      description: 'Frederick Altrock - Mathematics PhD researcher at University of Münster (Uni Münster) specializing in artificial intelligence and deep learning. Published at NeurIPS. Research on neural tangent kernels, training dynamics, and neural network theory.',
      keywords: ['Frederick Altrock', 'AI researcher', 'mathematics PhD', 'University of Münster', 'Uni Münster', 'neural tangent kernels', 'NeurIPS', 'deep learning researcher', 'machine learning', 'PyTorch'],
    },
    about: {
      title: 'About Frederick Altrock',
      description: 'Frederick Altrock - Mathematics PhD researcher at University of Münster studying neural tangent kernels and deep learning training dynamics. Published at NeurIPS. Expertise in AI, probability theory, PyTorch, and systems engineering.',
      keywords: ['Frederick Altrock', 'mathematics PhD', 'University of Münster', 'Uni Münster', 'AI researcher', 'neural tangent kernels', 'training dynamics', 'NeurIPS researcher'],
    },
    research: {
      title: 'Research - Frederick Altrock',
      description: 'Frederick Altrock\'s AI and mathematics research at University of Münster. Publications on neural tangent kernels, training dynamics, and deep learning theory. NeurIPS conference papers and ongoing research.',
      keywords: ['Frederick Altrock research', 'University of Münster research', 'neural tangent kernels', 'training dynamics', 'deep learning theory', 'NeurIPS publications', 'AI research'],
    },
    topics: {
      title: 'Blog Topics - Frederick Altrock',
      description: 'Frederick Altrock\'s technical blog covering AI, mathematics, coding, and engineering. Topics include machine learning, deep learning, reverse engineering, embedded systems, and 3D printing.',
      keywords: ['Frederick Altrock blog', 'AI tutorials', 'machine learning', 'mathematics', 'reverse engineering', 'embedded systems', 'Python tutorials'],
    },
    printables: {
      title: '3D Printables - Frederick Altrock',
      description: 'Frederick Altrock\'s 3D printable designs and models for maker projects, including functional parts and engineering solutions.',
      keywords: ['Frederick Altrock', '3D printing', 'maker projects', 'printable designs', 'engineering'],
    },
  },
} as const;

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig;
export type Topic = (typeof siteConfig.topics)[number];
export type ThemeColors = typeof siteConfig.theme.colors;
