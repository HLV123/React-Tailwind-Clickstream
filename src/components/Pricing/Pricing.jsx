import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../../utils/constants';
import ClickstreamLogger from '../../utils/ClickstreamLogger';

const PricingCard = ({ plan }) => {
  const handleClick = () => {
    ClickstreamLogger.logClick('pricing-card', `Chọn gói ${plan.name}`, `pricing-${plan.id}`);
  };

  const handleHover = () => {
    ClickstreamLogger.logHover('pricing-card', plan.name);
  };

  return (
    <div
      onMouseEnter={handleHover}
      className={`rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
        plan.highlighted ? 'bg-charcoal text-cream shadow-2xl scale-105' : 'bg-white shadow-lg'
      }`}
    >
      {plan.highlighted && (
        <div className="inline-block bg-primary text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
          Phổ biến nhất
        </div>
      )}
      <h3 className={`font-display text-2xl font-semibold ${plan.highlighted ? 'text-cream' : 'text-charcoal'}`}>
        {plan.name}
      </h3>
      <div className="mt-4 mb-6">
        <span className={`font-display text-5xl font-bold ${plan.highlighted ? 'text-cream' : 'text-charcoal'}`}>
          {plan.price}
        </span>
        {plan.unit && <span className={plan.highlighted ? 'text-cream/60' : 'text-charcoal/60'}> {plan.unit}</span>}
      </div>
      <p className={`text-sm mb-8 ${plan.highlighted ? 'text-cream/70' : 'text-charcoal/60'}`}>{plan.description}</p>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check size={20} className={plan.highlighted ? 'text-primary' : 'text-secondary'} />
            <span className={`text-sm ${plan.highlighted ? 'text-cream/80' : 'text-charcoal/70'}`}>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
          plan.highlighted ? 'bg-primary text-white hover:bg-primary/90' : 'bg-charcoal text-cream hover:bg-primary'
        }`}
      >
        Chọn gói này
      </button>
    </div>
  );
};

const Pricing = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ClickstreamLogger.logSectionView('pricing', 'Pricing Section');
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('.pricing-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pricing-section py-32 relative noise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-subheading">Bảng giá</span>
          <h2 className="section-heading mt-4 mb-6">Gói dịch vụ phù hợp</h2>
          <p className="text-charcoal/60 leading-relaxed">Lựa chọn gói dịch vụ phù hợp với quy mô doanh nghiệp.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
