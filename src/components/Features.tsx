import { FeatureCard } from './FeatureCard'
import { MdChecklist, MdQueryStats } from 'react-icons/md'
import { RiBuildingLine } from 'react-icons/ri'
import { PiExamBold } from 'react-icons/pi'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import featuresImage from '../assets/images/features.png'

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
             Comprehensive Digital Suite for ACT Success
          </h2>
          <p className="mt-4 text-zinc-600">
          All-in-one ACT preparation suite enabling educators to design, deliver, and assess practice exams for optimal student performance.
          </p>
        </div>

        {/* Features Content - Row on large screens, Column on mobile */}
        <div className="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3}}
              transition={{ duration: 0.85 }}
              className="relative rounded-sm lg:rounded-2xl overflow-hidden shadow-lg"
            >
              <motion.img
                src={featuresImage}
                alt="ACT Test Prep Features Overview"
                className="w-full h-auto object-cover"
                style={{
                  maxHeight: '800px',
                  minHeight: '400px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>
          </div>

          {/* Feature Cards Section */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  )
}

export default Features 