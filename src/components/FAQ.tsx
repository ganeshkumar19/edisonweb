import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'

export type FAQItem = {
  q: string
  a: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    q: 'What is a digital ACT platform?',
    a: 'A digital ACT platform lets tutors create, assign, and grade ACT practice tests online while replicating the official test-taking experience.',
  },
  {
    q: 'Can I prepare for ACT and Digital SAT using EdisonOS?',
    a: 'Yes. EdisonOS supports both Digital SAT and ACT. It mirrors official interfaces (like Bluebook for DSAT) and offers detailed performance reports, adaptive modules, and targeted practice tools.',
  },
  {
    q: 'Does it replicate the official ACT online testing interface?',
    a: 'Yes. The testing experience simulates the official ACT online test with timer, navigation, and structure so students feel test-day ready.',
  },
  {
    q: 'Can I customize ACT practice tests?',
    a: 'Absolutely. Build full-length or sectional tests, adjust difficulty, include your own questions, and assemble tests quickly to match your curriculum.',
  },
  {
    q: 'Is the platform suitable for small tutoring setups?',
    a: 'Yes. Whether you are an individual tutor or a large test prep company, EdisonOS scales with intuitive tools and dashboards.',
  },
]

function FAQRow({ item, index, openIndex, setOpenIndex }: { item: FAQItem; index: number; openIndex: number | null; setOpenIndex: (i: number | null) => void }) {
  const open = openIndex === index
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.87, ease: 'easeOut' }}
      className={[
        'group relative overflow-hidden rounded-2xl backdrop-blur',
        'ring-1 ring-zinc-200 bg-white/80 transition-shadow',
        open ? 'ring-blue-200 shadow-md' : 'shadow-sm hover:shadow-md hover:ring-zinc-300',
      ].join(' ')}
    >
      {/* Accent bar */}
      <div className={[
        'pointer-events-none absolute left-0 top-0 h-full w-1',
        open ? 'bg-blue-600' : 'bg-blue-600/0 group-hover:bg-blue-600/60 transition-colors',
      ].join(' ')} />

      <button
        type="button"
        onClick={() => setOpenIndex(open ? null : index)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base md:text-ld lg:text-xl font-semibold tracking-tight text-zinc-900">{item.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="grid h-6 w-6 place-items-center rounded-md bg-blue-600/10 text-blue-700 ring-1 ring-inset ring-blue-200"
        >
          +
        </motion.span>
      </button>

      <motion.div
        layout
        style={{ overflow: 'hidden' }}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="px-5 pb-5"
      >
        <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm md:text-md lg:text-lg leading-6 text-zinc-700">
          {item.a}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section id="faq" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white" />
      </div>
      <div className="mx-auto max-w-7xl xxl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 md:text-xl lg:text-2xl text-zinc-600">
            Answers to common questions about EdisonOS and our ACT testing experience.
          </p>
        </div>

        <LayoutGroup>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5">
            {FAQ_ITEMS.map((item, idx) => (
              <FAQRow key={item.q} item={item} index={idx} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            ))}
          </div>
        </LayoutGroup>

        <div className="mt-10 text-center">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 hover:bg-blue-50"
          >
            Still have questions? Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ 