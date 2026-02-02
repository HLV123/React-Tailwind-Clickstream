import React, { useEffect } from 'react';
import { Monitor, BarChart3, Eye, Database, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../utils/constants';
import ClickstreamLogger from '../../utils/ClickstreamLogger';

const iconMap = { Monitor, BarChart3, Eye, Database };

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon];

  const handleClick = () => {
    ClickstreamLogger.logClick('service-card', service.title, `service-${service.id}`);
  };

  const handleHover = () => {
    ClickstreamLogger.logHover('service-card', service.title);
  };

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={handleHover}
      className="group bg-white rounded-3xl p-8 hover:bg-charcoal transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="w-16 h-16 rounded-2xl bg-sand/50 group-hover:bg-primary flex items-center justify-center text-charcoal group-hover:text-white transition-all duration-500 mb-6">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-cream transition-colors duration-500 mb-3">
        {service.title}
      </h3>
      <p className="text-charcoal/60 group-hover:text-cream/70 transition-colors duration-500 text-sm leading-relaxed">
        {service.description}
      </p>
      <div className="mt-6 flex items-center gap-2 text-primary group-hover:text-secondary transition-colors duration-500 text-sm font-medium">
        Tìm hiểu thêm
        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ClickstreamLogger.logSectionView('services', 'Services Section');
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('services');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 relative noise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-subheading">Dịch vụ</span>
          <h2 className="section-heading mt-4 mb-6">Những gì chúng tôi làm tốt nhất</h2>
          <p className="text-charcoal/60 leading-relaxed">
            Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi mang đến giải pháp toàn diện cho mọi nhu cầu.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
