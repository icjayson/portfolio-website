// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    }
  },
  stagger: {
    visible: { 
      transition: { 
        staggerChildren: 0.15 
      } 
    }
  },
  cardExpand: {
    collapsed: { 
      height: 'auto', 
      opacity: 1 
    },
    expanded: { 
      height: 'auto', 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    }
  }
}

// Easing curves
export const EASING_CURVES = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  spring: [0.68, -0.55, 0.265, 1.55],
  bounce: [0.68, -0.6, 0.32, 1.6]
}

// Animation durations
export const DURATIONS = {
  fast: 0.3,
  medium: 0.6,
  slow: 0.8,
  verySlow: 1.2
}