import React, { useEffect } from 'react';
import {
  Navigation,
  Hero,
  Services,
  Portfolio,
  Team,
  Testimonials,
  Pricing,
  Contact,
  Footer,
} from './components';
import ClickstreamLogger from './utils/ClickstreamLogger';

function App() {
  useEffect(() => {
    // Khởi tạo Clickstream Logger khi app load
    ClickstreamLogger.init();
  }, []);

  return (
    <div className="font-body">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
