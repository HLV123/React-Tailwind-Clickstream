import React from 'react';
import { FOOTER_LINKS } from '../../utils/constants';
import ClickstreamLogger from '../../utils/ClickstreamLogger';

const Footer = () => {
  const handleLinkClick = (linkText) => {
    ClickstreamLogger.logClick('footer-link', linkText, 'footer');
  };

  return (
    <footer className="bg-charcoal py-16 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <span 
              onClick={() => handleLinkClick('Logo')}
              className="font-display text-2xl font-bold text-cream cursor-pointer"
            >
              LeVanHung<span className="text-primary">.</span>
            </span>
            <p className="text-cream/50 mt-4 text-sm leading-relaxed">
              Công ty cung cấp giải pháp công nghệ hàng đầu.
            </p>
          </div>

          {FOOTER_LINKS.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-cream mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-cream/50 hover:text-primary transition-colors text-sm text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">© {new Date().getFullYear()} LeVanHung Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            {['Facebook', 'LinkedIn', 'GitHub', 'YouTube'].map((social, index) => (
              <button
                key={index}
                onClick={() => ClickstreamLogger.logClick('social-link', social, `footer-social-${social}`)}
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
