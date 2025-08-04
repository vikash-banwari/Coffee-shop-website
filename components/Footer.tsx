import Link from 'next/link'

export default function Footer() {
  const services = [
    {
      icon: '👨‍⚕️',
      title: 'Consult with a doctor',
      description: 'Video consultation with verified doctors',
      href: '/consult'
    },
    {
      icon: '💊',
      title: 'Order Medicines',
      description: 'Get medicines delivered to your home',
      href: '/medicines'
    },
    {
      icon: '📋',
      title: 'View medical records',
      description: 'Access your health records anytime',
      href: '/records'
    },
    {
      icon: '🧪',
      title: 'Book test',
      description: 'Book lab tests and health checkups',
      href: '/tests',
      badge: 'New'
    },
    {
      icon: '📖',
      title: 'Read articles',
      description: 'Health tips and expert advice',
      href: '/articles'
    },
    {
      icon: '🏥',
      title: 'For healthcare providers',
      description: 'Join our network of healthcare professionals',
      href: '/providers'
    }
  ]

  return (
    <footer className="bg-white border-t">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-practo-blue hover:shadow-md transition duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-blue-50 transition duration-200">
                {service.icon}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center">
                  <h3 className="text-gray-900 font-medium group-hover:text-practo-blue transition duration-200">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{service.description}</p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-practo-blue transition duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-gray-900 font-medium mb-4">Practo</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-practo-blue text-sm">About</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-practo-blue text-sm">Blog</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-practo-blue text-sm">Careers</Link></li>
                <li><Link href="/press" className="text-gray-600 hover:text-practo-blue text-sm">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-medium mb-4">For patients</h4>
              <ul className="space-y-2">
                <li><Link href="/search" className="text-gray-600 hover:text-practo-blue text-sm">Search for doctors</Link></li>
                <li><Link href="/search?type=clinic" className="text-gray-600 hover:text-practo-blue text-sm">Search for clinics</Link></li>
                <li><Link href="/search?type=hospital" className="text-gray-600 hover:text-practo-blue text-sm">Search for hospitals</Link></li>
                <li><Link href="/plus" className="text-gray-600 hover:text-practo-blue text-sm">Practo Plus</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-medium mb-4">For doctors</h4>
              <ul className="space-y-2">
                <li><Link href="/providers/signup" className="text-gray-600 hover:text-practo-blue text-sm">Practo Profile</Link></li>
                <li><Link href="/providers/pro" className="text-gray-600 hover:text-practo-blue text-sm">Practo Pro</Link></li>
                <li><Link href="/providers/reach" className="text-gray-600 hover:text-practo-blue text-sm">Practo Reach</Link></li>
                <li><Link href="/providers/prime" className="text-gray-600 hover:text-practo-blue text-sm">Practo Prime</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-medium mb-4">More</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-600 hover:text-practo-blue text-sm">Help</Link></li>
                <li><Link href="/developers" className="text-gray-600 hover:text-practo-blue text-sm">Developers</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-practo-blue text-sm">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-practo-blue text-sm">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-practo-blue text-white px-3 py-1 rounded-lg font-bold text-lg mr-4">
                practo
              </div>
              <p className="text-gray-600 text-sm">
                © 2024 Practo Clone. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-practo-blue">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-practo-blue">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-practo-blue">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}