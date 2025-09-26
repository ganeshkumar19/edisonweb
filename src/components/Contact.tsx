import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Section background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-sky-50 to-white" />
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(600px_600px_at_80%_-10%,#93c5fd_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(500px_500px_at_10%_110%,#bae6fd_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl xxl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Connect with our ACT expert
          </h2>
          <p className="mt-4 md:text-xl lg:text-2xl text-zinc-600">
            Customize the platform to your needs. Book a personalized demo or send us a message — we’ll get back shortly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-blue-100 backdrop-blur lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100" />
            <form className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-zinc-800" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-zinc-800" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-zinc-800" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your tutoring needs…" className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
                <button type="button" className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Send Message
                </button>
                <a href="https://www.edisonos.com/book-a-demo" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-md bg-white/70 px-6 py-3 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 backdrop-blur hover:bg-white">
                  Book a Demo
                </a>
              </div>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-blue-100 backdrop-blur"
          >
            <h3 className="text-base font-semibold text-zinc-900">Quick info</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li><span className="font-medium text-zinc-800">Response time:</span> Under 24 hours</li>
              <li><span className="font-medium text-zinc-800">Availability:</span> Mon–Fri, 9am–6pm</li>
              <li><span className="font-medium text-zinc-800">Best for:</span> Tutors and test‑prep companies</li>
            </ul>
            <div className="mt-6">
              <a href="#get-started" className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                Start Free Trial
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default Contact 