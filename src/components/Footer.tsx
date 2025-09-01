const Footer = () => {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Success Systems Network™</h3>
            <p className="text-white/80 leading-relaxed">
              Helping families reconnect through transformative outdoor experiences that build trust, communication, and lasting bonds.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-white/80">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Baltimore, MD
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@successsystemsnetwork.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Next Steps</h4>
            <div className="space-y-2">
              <a href="#reserve" className="block text-white/80 hover:text-gold transition-colors">
                Reserve Your Spot
              </a>
              <a href="#call" className="block text-white/80 hover:text-gold transition-colors">
                Schedule Parent Call
              </a>
              <a href="#safety" className="block text-white/80 hover:text-gold transition-colors">
                Safety Information
              </a>
              <a href="#testimonials" className="block text-white/80 hover:text-gold transition-colors">
                Parent Stories
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Success Systems Network™. All rights reserved. | 
            <span className="ml-1">Transforming families through outdoor breakthrough experiences</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;