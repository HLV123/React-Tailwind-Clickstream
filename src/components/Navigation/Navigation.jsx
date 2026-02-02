import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks';
import { NAV_LINKS } from '../../utils/constants';
import ClickstreamLogger from '../../utils/ClickstreamLogger';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  const handleNavClick = (linkName) => {
    ClickstreamLogger.logClick('nav-link', linkName, `nav-${linkName}`);
  };

  const handleLogoClick = () => {
    ClickstreamLogger.logClick('logo', 'LeVanHung Logo', 'logo');
  };

  const handleCTAClick = () => {
    ClickstreamLogger.logClick('button', 'Bắt đầu ngay', 'nav-cta');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={handleLogoClick} className="font-display text-2xl font-bold text-charcoal">
          LeVanHung<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => handleNavClick(link.name)}
              className="font-body text-charcoal/70 hover:text-primary transition-colors duration-300 text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button onClick={handleCTAClick} className="btn-secondary">
            Bắt đầu ngay
          </button>
        </div>

        <button
          onClick={() => {
            setMobileOpen(!mobileOpen);
            ClickstreamLogger.logClick('button', 'Mobile Menu Toggle', 'mobile-menu');
          }}
          className="md:hidden text-charcoal p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-2xl p-6 animate-scale-in">
          {NAV_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => {
                setMobileOpen(false);
                handleNavClick(link.name);
              }}
              className="block py-3 text-charcoal/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
