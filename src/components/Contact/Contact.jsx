import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import ClickstreamLogger from '../../utils/ClickstreamLogger';

const iconMap = { MapPin, Mail, Phone };

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ClickstreamLogger.logSectionView('contact', 'Contact Section');
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    ClickstreamLogger.logFormInteraction('contact-form', name, 'input');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ClickstreamLogger.logClick('button', 'Gửi tin nhắn', 'contact-submit');
    ClickstreamLogger.logFormInteraction('contact-form', 'all', 'submit');
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-medium tracking-widest text-sm">LIÊN HỆ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-4 mb-6">
              Hãy bắt đầu dự án cùng nhau
            </h2>
            <p className="text-cream/60 leading-relaxed mb-8">
              Chúng tôi luôn sẵn sàng lắng nghe ý tưởng của bạn.
            </p>
            <div className="space-y-6">
              {CONTACT_INFO.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-cream/50 text-sm">{item.label}</div>
                      <div className="text-cream">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-charcoal/70 text-sm mb-2 block">Họ tên</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/50 border border-charcoal/10 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-primary transition-colors"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="text-charcoal/70 text-sm mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/50 border border-charcoal/10 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-primary transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="text-charcoal/70 text-sm mb-2 block">Tin nhắn</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/50 border border-charcoal/10 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Mô tả dự án của bạn..."
                />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-charcoal transition-colors duration-300">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
