import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.webp'
import { Link as ScrollLink } from 'react-scroll'

export type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Why EdisonOS', href: '#why' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]

function toTargetId(href: string) {
  return href.replace('#', '')
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleToggleMobileMenu() {
    setIsMobileMenuOpen((previous) => !previous)
  }

  function handleCloseMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={
        [
          'fixed top-0 inset-x-0 z-50 backdrop-blur transition-colors',
          'border-b',
          isScrolled ? 'bg-zinc-900/90 border-zinc-800 shadow-sm' : 'bg-zinc-900 border-transparent',
        ].join(' ')
      }
    >
      <nav className="mx-auto max-w-7xl xxl:max-w-[1400px] px-4 sm:px-4 lg:px-4" aria-label="Primary Navigation">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2" onClick={handleCloseMobileMenu}>
            <img src={logo} alt="Edison logo" className="h-8 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item.href}
                to={toTargetId(item.href)}
                spy={true}
                hashSpy={true}
                isDynamic={true}
                spyThrottle={50}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={handleCloseMobileMenu}
                className="cursor-pointer text-sm md:text-sm lg:text-lg  font-medium text-white hover:text-blue-400 hover:text-base transition-all duration-200"
                activeClass="text-blue-400 font-semibold"
              >
                {item.label}
              </ScrollLink>
            ))}
            <ScrollLink
              to={toTargetId('#get-started')}
              smooth={true}
              duration={500}
              offset={-64}
              onClick={handleCloseMobileMenu}
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
            >
              Start Free Trial
            </ScrollLink>
            <a
              href="https://www.edisonos.com/book-a-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-800"
            >
              Book a Demo
            </a>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={handleToggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Smooth mobile menu accordion */}
      <div
        id="mobile-menu"
        className={[
          'lg:hidden grid transition-[grid-template-rows] duration-300 ease-in-out',
          isMobileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        ].join(' ')}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 px-4 pb-4 pt-2 bg-zinc-900/95">
            {navItems.map((item) => (
              <ScrollLink
                key={item.href}
                to={toTargetId(item.href)}
                spy={true}
                hashSpy={true}
                isDynamic={true}
                spyThrottle={50}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={handleCloseMobileMenu}
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-200 hover:bg-zinc-800 cursor-pointer"
                activeClass="text-blue-400 font-semibold"
              >
                {item.label}
              </ScrollLink>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <ScrollLink
                to={toTargetId('#get-started')}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={handleCloseMobileMenu}
                className="block rounded-md bg-blue-600 px-3 py-2 text-center text-base font-semibold text-white hover:bg-blue-700 cursor-pointer"
              >
                Start Free Trial
              </ScrollLink>
              <a
                href="https://www.edisonos.com/book-a-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-center text-base font-semibold text-zinc-200 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-800"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar 