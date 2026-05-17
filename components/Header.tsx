import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span className="font-bold text-xl text-gray-900">My Company</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Team
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Case Studies
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Testimonials
            </Link>
          </nav>
          <Link
            href="/services"
            className="hidden md:inline-flex px-5 py-2.5 gradient-bg text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}