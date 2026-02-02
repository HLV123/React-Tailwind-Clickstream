import React, { useEffect } from 'react';
import { TESTIMONIALS } from '../../utils/constants';
import ClickstreamLogger from '../../utils/ClickstreamLogger';

const Testimonials = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ClickstreamLogger.logSectionView('testimonials', 'Testimonials Section');
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('.testimonials-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section py-32 bg-sand/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-subheading">Đánh giá</span>
          <h2 className="section-heading mt-4">Khách hàng nói gì</h2>
        </div>

        <div className="relative">
          <div className="absolute -top-8 left-0 text-primary/20">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-[1fr,200px] gap-8 items-center">
              <div>
                <p className="font-display text-2xl md:text-3xl text-charcoal leading-relaxed mb-8">
                  "{TESTIMONIALS[0].quote}"
                </p>
                <div>
                  <div className="font-semibold text-charcoal">{TESTIMONIALS[0].author}</div>
                  <div className="text-charcoal/60 text-sm">{TESTIMONIALS[0].role}</div>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={TESTIMONIALS[0].img} alt={TESTIMONIALS[0].author} className="w-48 h-48 rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
