import { motion } from 'framer-motion'
import thankyouImage from '../assets/images/thankyou.png'

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
      "The more we use the platform, the more impressed we are. It's become an invaluable resource for our prep programs.",
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

function Avatar({ name, colorClass }: { name: string; colorClass: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
  return (
    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${colorClass} text-sm font-semibold`}>
      {initials}
    </div>
  )
}

const cardVariants = {
  hidden: (i: number) => ({ opacity: 0, y: i % 2 === 0 ? -100 : 100 }),
  visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
}

export function Testimonials() {
  const gradients = [
    { from: 'from-blue-500', to: 'to-cyan-500', nameColor: 'text-blue-600', avatarColor: 'bg-blue-600/10 text-blue-700' },
    { from: 'from-violet-500', to: 'to-fuchsia-500', nameColor: 'text-violet-600', avatarColor: 'bg-violet-600/10 text-violet-700' },
    { from: 'from-emerald-500', to: 'to-teal-500', nameColor: 'text-emerald-600', avatarColor: 'bg-emerald-600/10 text-emerald-700' },
    { from: 'from-amber-500', to: 'to-orange-500', nameColor: 'text-amber-600', avatarColor: 'bg-amber-600/10 text-amber-700' },
    { from: 'from-rose-500', to: 'to-pink-500', nameColor: 'text-rose-600', avatarColor: 'bg-rose-600/10 text-rose-700' },
    { from: 'from-indigo-500', to: 'to-purple-500', nameColor: 'text-indigo-600', avatarColor: 'bg-indigo-600/10 text-indigo-700' },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl xxl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Loved by Educators Everywhere
          </h2>
          <p className="mt-4 md:text-xl lg:text-2xl text-zinc-600">
            From independent tutors to national prep companies, professionals trust EdisonOS to simplify planning and boost student scores.
          </p>
        </div>

        {/* Testimonials Content - Row on large screens, Column on mobile */}
        <div className="mt-16 flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Testimonials Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t, idx) => {
                const g = gradients[idx % gradients.length]
                return (
                  <motion.div
                    key={t.name + idx}
                    custom={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={`rounded-2xl p-[1px] shadow-sm bg-gradient-to-r ${g.from} ${g.to}`}
                  >
                    <blockquote className="flex h-full flex-col justify-between rounded-2xl bg-zinc-50 p-6">
                      <p className="text-zinc-800">"{t.quote}"</p>
                      <footer className="mt-6 flex items- justify-end gap-3">
                        <Avatar name={t.name} colorClass={g.avatarColor} />
                        <div>
                          <div className={`text-sm font-semibold ${g.nameColor}`}>{t.name}</div>
                          <div className="text-xs text-zinc-600">{t.company}</div>
                        </div>
                      </footer>
                    </blockquote>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-sm lg:rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={thankyouImage}
                alt="Thank You - Customer Success"
                className="w-full h-auto object-contain sm:object-cover lg:min-h-[500px] lg:max-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 