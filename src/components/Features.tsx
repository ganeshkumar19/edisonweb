import { FeatureCard } from './FeatureCard'
import { MdChecklist, MdQueryStats } from 'react-icons/md'
import { RiBuildingLine } from 'react-icons/ri'
import { PiExamBold } from 'react-icons/pi'
import type { ReactNode } from 'react'

type FeatureItem = {
  icon: ReactNode
  title: string
  description: string
  href?: string
  linkLabel?: string
  highlighted?: boolean
}

const FEATURE_ITEMS: FeatureItem[] = [
  {
    icon: <MdChecklist size={20} />,
    title: 'Expert‑Vetted Question Bank',
    description: 'Access 216+ ACT questions vetted by experts to start high‑quality practice immediately.',
  },
  {
    icon: <RiBuildingLine size={20} />,
    title: 'Build Official‑like Practice Tests',
    description: 'Assemble practice tests that mimic the real ACT experience in under 60 minutes.',
  },
  {
    icon: <MdQueryStats size={20} />,
    title: 'Deep Performance Analytics',
    description: 'Pinpoint strengths and gaps with second‑by‑second insights to guide targeted practice.',
  },
  {
    icon: <PiExamBold size={20} />,
    title: 'Official‑like ACT Test Experience',
    description: 'A digital interface that mirrors the official ACT online test so students are test‑day ready.',
    href: '#why',
    linkLabel: 'See more',
    highlighted: true,
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl xxl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            All‑in‑One Tools for ACT Test Prep Success
          </h2>
          <p className="mt-4 text-zinc-600">
            A feature‑rich digital ACT software for tutors to easily build, deliver, and evaluate ACT practice tests — all under one platform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_ITEMS.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              href={item.href}
              linkLabel={item.linkLabel}
              highlighted={item.highlighted}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 