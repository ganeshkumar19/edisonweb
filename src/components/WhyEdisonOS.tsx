import { motion} from 'framer-motion'
import { MdSecurity, MdSpeed, MdAutoGraph } from 'react-icons/md'
import { RiSettings5Line } from 'react-icons/ri'
import StatCard from './NumberStatCard'



export function WhyEdisonOS() {
  return (
    <section id="why" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Section background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-sky-100 to-white" />
        <div className="absolute inset-0 opacity-35 [background:radial-gradient(700px_700px_at_90%_-10%,#93c5fd_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-25 [background:radial-gradient(600px_600px_at_0%_110%,#bae6fd_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl xxl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Why EdisonOS for ACT Tutors
          </h2>
          <p className="mt-4 md:text-xl lg:text-2xl text-zinc-700">
            Purpose‑built to help tutors build official‑like tests, diagnose skills, and improve scores with data‑backed insights.
          </p>
        </div>

        {/* Reasons grid with a distinct media style and accent bar */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 ring-1 ring-blue-100 backdrop-blur transition-shadow hover:shadow-md"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-blue-600/80" />
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-600/10 text-blue-700 ring-1 ring-inset ring-blue-200">
                <MdAutoGraph size={22} />
              </div>
              <div>
                <h3 className="text-lg  font-semibold md:text-xl lg:text-2xl text-zinc-900">Diagnose & Personalize</h3>
                <p className="mt-2 text-sm md:text-md lg:text-lg leading-6 text-zinc-600">
                  Administer diagnostics, identify improvement areas, and build personalized ACT study plans that target gaps.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 ring-1 ring-blue-100 backdrop-blur transition-shadow hover:shadow-md"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-blue-600/80" />
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-600/10 text-blue-700 ring-1 ring-inset ring-blue-200">
                <RiSettings5Line size={22} />
              </div>
              <div>
                <h3 className="text-lg  font-semibold md:text-xl lg:text-2xl text-zinc-900">Official‑like Experience</h3>
                <p className="mt-2 text-sm md:text-md lg:text-lg leading-6 text-zinc-600">
                  Deliver a testing interface that mirrors the ACT online experience so students feel test‑day ready.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 ring-1 ring-blue-100 backdrop-blur transition-shadow hover:shadow-md"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-blue-600/80" />
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-600/10 text-blue-700 ring-1 ring-inset ring-blue-200">
                <MdSpeed size={22} />
              </div>
              <div>
                <h3 className="text-lg  font-semibold md:text-xl lg:text-2xl text-zinc-900">Save Time, Teach More</h3>
                <p className="mt-2 text-sm md:text-md lg:text-lg leading-6 text-zinc-600">
                  Build tests in under 60 minutes, auto‑grade submissions, and share clear reports with parents.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 ring-1 ring-blue-200 backdrop-blur transition-shadow hover:shadow-md"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-blue-600" />
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-600 text-white ring-1 ring-inset ring-blue-600/30">
                <MdSecurity size={22} />
              </div>
              <div>
                <h3 className="text-lg  font-semibold md:text-xl lg:text-2xl text-zinc-900">Proven Results</h3>
                <p className="mt-2 text-sm md:text-md lg:text-lg leading-6 text-zinc-700">
                  Tutors report 200+ point improvements using adaptive testing and granular analytics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats with number counting animation */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <StatCard end={70900} suffix="+" label="Tests created" />
          <StatCard end={22600} suffix="+" label="Students improved" />
          <StatCard end={7}     suffix="+" label="Hours saved per test" />
          <StatCard end={100}   suffix="+" label="Prep companies trust us" />
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base  font-semibold md:text-xl lg:text-2xl text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Start Free Trial
          </a>
          <a
            href="https://www.edisonos.com/book-a-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base  font-semibold md:text-xl lg:text-2xl text-blue-700 ring-1 ring-inset ring-blue-200 hover:bg-blue-50"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyEdisonOS 