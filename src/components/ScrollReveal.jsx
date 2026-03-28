import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Reusable scroll reveal wrapper.
 * Variants: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale'
 */
const variants = {
  fadeUp: {
    hidden:  { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0  },
  },
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden:  { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0  },
  },
  slideRight: {
    hidden:  { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0   },
  },
  scale: {
    hidden:  { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1    },
  },
}

export default function ScrollReveal({
  children,
  variant   = 'fadeUp',
  delay     = 0,
  duration  = 0.7,
  className = '',
  once      = true,
  margin    = '-80px',
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once, margin })

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}