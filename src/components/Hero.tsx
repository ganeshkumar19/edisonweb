import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl xxl:max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Exciting News: Try the first free Enhanced ACT Mock Test!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            The Most Trusted Digital ACT
            <span className="block text-blue-400">Platform for Tutors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="mt-6 text-lg leading-7 text-zinc-300"
          >
            In-house ACT online testing platform built for tutors to create high-quality ACT practice tests,
            deliver official-like digital testing experience and track insights-rich student performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Start Free Trial
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-white ring-1 ring-inset ring-zinc-700 hover:bg-zinc-800"
            >
              Book a Demo
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="mt-10 text-sm font-medium uppercase tracking-wide text-zinc-400"
          >
            Trusted by 100+ Test Prep Companies
          </motion.p>
        </div>
      </div>

      {/* Background container with rounded bottom corners only */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-b-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-slate-950 to-slate-900" />
      </div>
    </section>
  )
}

export default Hero 