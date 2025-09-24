import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export type Testimonial = {
  quote: string
  name: string
  company: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "EdisonOS transformed our outdated workflow with a flexible, reliable platform that truly mirrors official testing.",
    name: 'Najeeb Shaik',
    company: 'The Edge Learning Center',
  },
  {
    quote:
      "The more we use the platform, the more impressed we are. It’s become an invaluable resource for our prep programs.",
    name: 'Joe Krupnick',
    company: 'Krupnick Approach',
  },
  {
    quote:
      "Students feel comfortable and prepared because the interface mirrors the official experience. Scores improved notably.",
    name: 'Jin Bae',
    company: 'Test Prep Instructor',
  },
  {
    quote:
      "Your responsiveness is unmatched. The tech is robust and dependable — exactly what a test prep business needs.",
    name: 'Michael Ermann',
    company: 'OliveBook',
  },
  {
    quote:
      "Simple to use and reliable. Our tutors save hours building tests and get granular analytics instantly.",
    name: 'Kevin Parrish',
    company: 'Prep Expert',
  },
  {
    quote:
      "The tools fit perfectly with our classes and content. We enjoy working with the team — great support and outcomes.",
    name: 'Nara Legrand',
    company: 'Legrand Prep',
  },
]

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
  return (
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-600/10 text-blue-700 text-sm font-semibold">
      {initials}
    </div>
  )
}

const cardVariants = {
  hidden: (i: number) => ({ opacity: 0, y: i % 2 === 0 ? -100 : 100 }),
  visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl xxl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            They Just Don’t Stop Loving Us
          </h2>
          <p className="mt-4 text-zinc-600">
            From solo tutors to large prep centers, professionals share how EdisonOS streamlines prep and improves outcomes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.blockquote
              key={t.name + idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex h-full flex-col justify-between rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200"
            >
              <p className="text-zinc-800">“{t.quote}”</p>
              <footer className="mt-6 flex items- justify-end gap-3">
                <Avatar name={t.name} />
                <div>
                  <div className="text-sm font-semibold text-zinc-900">{t.name}</div>
                  <div className="text-xs text-zinc-600">{t.company}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 hover:bg-blue-50"
          >
            Book a Personalized Demo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 