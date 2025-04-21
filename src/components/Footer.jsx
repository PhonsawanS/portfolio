'use client';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center">
            <Mail size={18} className="mr-2 text-gray-500" />
            <a
              href="mailto:phonsawan.suarab@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              phonsawan.suarab@gmail.com
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {currentYear} Phonsawan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
