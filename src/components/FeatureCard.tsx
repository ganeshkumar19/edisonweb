import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export type FeatureCardProps = {
  icon: ReactNode
  title: string
  description: string
  href?: string
  linkLabel?: string
  highlighted?: boolean
  delay?: number
}

export function FeatureCard({ icon, title, description, href, linkLabel, highlighted = false, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      className={[
        'rounded-2xl p-6 shadow-sm',
        highlighted ? 'border border-blue-200 bg-blue-50' : 'border border-zinc-200 bg-white',
      ].join(' ')}
    >
      <div className={[
        'h-10 w-10 rounded-lg grid place-items-center text-lg',
        highlighted ? 'bg-blue-600 text-white' : 'bg-blue-600/10 text-blue-700',
      ].join(' ')}>
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-zinc-900">{title}</h3>
      <p className={[
        'mt-2 text-sm leading-6',
        highlighted ? 'text-zinc-700' : 'text-zinc-600',
      ].join(' ')}>
        {description}
      </p>
      {href && linkLabel && (
        <a href={href} className="mt-3 inline-flex text-sm font-medium text-blue-700 hover:underline underline-offset-4">
          {linkLabel}
        </a>
      )}
    </motion.div>
  )
}

export default FeatureCard 