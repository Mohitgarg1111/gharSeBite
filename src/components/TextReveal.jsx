import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Splits text into words and reveals them with a
 * staggered clip-path animation — Awwwards standard.
 */
export default function TextReveal({
  text,
  className = '',
  delay     = 0,
  stagger   = 0.06,
  as        = 'span',
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const words = text.split(' ')
  const Tag   = as

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: '0.25em' }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0, rotate: 3 }}
            animate={inView
              ? { y: '0%', opacity: 1, rotate: 0 }
              : { y: '110%', opacity: 0, rotate: 3 }
            }
            transition={{
              delay:    delay + i * stagger,
              duration: 0.65,
              ease:     [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}