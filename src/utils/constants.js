// Color system constants
export const COLORS = {
  // New primary color system
  primary: '#2563eb',
  secondary: '#0c2a52',
  // Backward compatibility with existing colors
  deepNavy: '#1E293B',
  warmGray: '#64748B', 
  pristineWhite: '#FFFFFF',
  accentCoral: '#FF6B6B',
  softGold: '#F59E0B',
  gradients: {
    primary: 'linear-gradient(45deg, #0c2a52, #2563eb)',
    legacy: 'linear-gradient(135deg, #1E293B 0%, #64748B 100%)',
    accent: 'linear-gradient(135deg, #FF6B6B 0%, #F59E0B 100%)',
    subtle: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(12, 42, 82, 0.1) 100%)'
  }
}

// Breakpoint constants
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1440px'
}

// Spacing constants
export const SPACING = {
  sectionPadding: '4rem 0',
  containerMaxWidth: '1280px',
  contentSpacing: '2rem'
}