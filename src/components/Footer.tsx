import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import logo from '../assets/images/logo.webp'

export function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { href: 'https://twitter.com/edisonos', label: 'Twitter', Icon: FaTwitter, hoverClass: 'hover:text-sky-400 hover:ring-sky-500/60' },
    { href: 'https://www.linkedin.com/company/edisonos/', label: 'LinkedIn', Icon: FaLinkedin, hoverClass: 'hover:text-blue-400 hover:ring-blue-500/60' },
    { href: 'https://www.youtube.com/c/EdisonOS', label: 'YouTube', Icon: FaYoutube, hoverClass: 'hover:text-red-400 hover:ring-red-500/60' },
    { href: 'https://www.facebook.com/theedisonos', label: 'Facebook', Icon: FaFacebook, hoverClass: 'hover:text-blue-400 hover:ring-blue-500/60' },
    { href: 'https://www.instagram.com/theedisonos/#', label: 'Instagram', Icon: FaInstagram, hoverClass: 'hover:text-pink-400 hover:ring-pink-500/60' },
  ]

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#why', label: 'Why EdisonOS' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#demo', label: 'Book a Demo' },
  ]

  return (
    <footer className="mt-24 bg-black text-zinc-300 overflow-hidden">
      {/* subtle top gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500" />
      <div className="mx-auto max-w-7xl xxl:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:max-w-md flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3">
              <img src={logo} alt="EdisonOS" className="h-7 w-auto md:h-8 lg:h-9" />
            </div>
            <p className="mt-3 text-sm md:text-md lg:text-lg  text-zinc-400">
              Digital ACT platform for tutors to design, deliver, and analyze practice tests with an official-like experience.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-4 lg:gap-7 sm:grid-cols-3 lg:grid-cols-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm md:text-md xl:text-lg text-zinc-400 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-center lg:justify-end gap-3">
            {socials.map(({ href, label, Icon, hoverClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={[
                  'grid h-9 w-9 lg:h-12 lg:w-12 place-items-center rounded-full bg-zinc-900 ring-1 ring-zinc-700 text-zinc-300 transition-all duration-200',
                  'hover:bg-zinc-800 hover:scale-105',
                  hoverClass,
                ].join(' ')}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 sm:flex-row">
          <p className="text-xs sm:text-sm md:text-md lg:text-lg text-zinc-500">© {year} EdisonOS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.edisonos.com/privacy-policy-and-terms-and-conditions#privacy-policy" className="text-xs sm:text-sm md:text-md lg:text-lg text-zinc-400 hover:text-white" target='_blank'>Privacy</a>
            <a href="https://www.edisonos.com/privacy-policy-and-terms-and-conditions#terms-and-conditions" className="text-xs sm:text-sm md:text-md lg:text-lg text-zinc-400 hover:text-white" target='_blank'>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 