export const theme = {
  colors: {
    primary: {
      main: '#4F46E5', // Indigo 600
      light: '#818CF8', // Indigo 400
      dark: '#3730A3', // Indigo 800
      gradient: 'linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)',
    },
    secondary: {
      main: '#10B981', // Emerald 500
      light: '#34D399', // Emerald 400
      dark: '#059669', // Emerald 600
    },
    background: {
      light: '#FFFFFF',
      dark: '#1F2937', // Gray 800
      gradient: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
    },
    text: {
      primary: '#111827', // Gray 900
      secondary: '#4B5563', // Gray 600
      light: '#F9FAFB', // Gray 50
    },
    accent: {
      purple: '#8B5CF6', // Violet 500
      pink: '#EC4899', // Pink 500
      blue: '#3B82F6', // Blue 500
    },
  },
  animations: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
    scale: {
      initial: { scale: 0.9 },
      animate: { scale: 1 },
      exit: { scale: 0.9 },
    },
    stagger: {
      container: {
        animate: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      },
      item: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      },
    },
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
    fast: 'all 0.15s ease-in-out',
    slow: 'all 0.5s ease-in-out',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
}; 