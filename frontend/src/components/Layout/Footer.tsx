import React from 'react';
import Link from 'next/link';
import { FiMessageCircle, FiShoppingBag, FiFileText, FiActivity, FiBook, FiUsers } from 'react-icons/fi';

const Footer: React.FC = () => {
  const footerServices = [
    {
      icon: <FiMessageCircle className="w-8 h-8" />,
      title: "Consult with a doctor",
      description: "Get expert medical advice",
      href: "/consult"
    },
    {
      icon: <FiShoppingBag className="w-8 h-8" />,
      title: "Order Medicines",
      description: "Quick medicine delivery",
      href: "/medicines"
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "View medical records",
      description: "Access your health data",
      href: "/records"
    },
    {
      icon: <FiActivity className="w-8 h-8" />,
      title: "Book test",
      description: "Schedule lab tests",
      href: "/tests",
      isNew: true
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: "Read articles",
      description: "Health tips & insights",
      href: "/articles"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "For healthcare providers",
      description: "Join our network",
      href: "/providers"
    }
  ];

  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {footerServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
            >
              <div className="relative mb-3">
                <div className="text-practo-blue group-hover:text-practo-darkBlue transition-colors duration-200">
                  {service.icon}
                </div>
                {service.isNew && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-xs text-gray-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Practo</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-gray-600 hover:text-practo-blue">About</Link></li>
                <li><Link href="/blog" className="text-sm text-gray-600 hover:text-practo-blue">Blog</Link></li>
                <li><Link href="/careers" className="text-sm text-gray-600 hover:text-practo-blue">Careers</Link></li>
                <li><Link href="/press" className="text-sm text-gray-600 hover:text-practo-blue">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">For patients</h4>
              <ul className="space-y-2">
                <li><Link href="/doctors" className="text-sm text-gray-600 hover:text-practo-blue">Search for doctors</Link></li>
                <li><Link href="/hospitals" className="text-sm text-gray-600 hover:text-practo-blue">Search for clinics</Link></li>
                <li><Link href="/medicines" className="text-sm text-gray-600 hover:text-practo-blue">Medicines</Link></li>
                <li><Link href="/insurance" className="text-sm text-gray-600 hover:text-practo-blue">Insurance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">For doctors</h4>
              <ul className="space-y-2">
                <li><Link href="/practo-pro" className="text-sm text-gray-600 hover:text-practo-blue">Practo Pro</Link></li>
                <li><Link href="/practo-consult" className="text-sm text-gray-600 hover:text-practo-blue">Practo Consult</Link></li>
                <li><Link href="/practo-health-feed" className="text-sm text-gray-600 hover:text-practo-blue">Health Feed</Link></li>
                <li><Link href="/practo-profile" className="text-sm text-gray-600 hover:text-practo-blue">Profile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">More</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-sm text-gray-600 hover:text-practo-blue">Help</Link></li>
                <li><Link href="/developers" className="text-sm text-gray-600 hover:text-practo-blue">Developers</Link></li>
                <li><Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-practo-blue">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-gray-600 hover:text-practo-blue">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-center text-sm text-gray-600">
            © 2024 Practo Clone. All rights reserved. This is a demo project for internship purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;