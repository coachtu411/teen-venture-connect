import guideImage from "@/assets/professional-guide.jpg";

const TrustSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-trust/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-trust">Trust</span> & Safety First
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your family's safety and trust matter most. Every detail is designed to create a secure, supportive environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="relative">
            <img 
              src={guideImage} 
              alt="Professional guide helping teen with safety equipment before outdoor activity"
              className="rounded-2xl shadow-[var(--shadow-gentle)] w-full"
            />
            <div className="absolute top-4 left-4 bg-trust/90 backdrop-blur-sm rounded-lg px-3 py-2">
              <p className="text-white text-sm font-medium">Certified Professional</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-[var(--shadow-gentle)]">
                <div className="bg-trust/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-trust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Certified Facilitators & Licensed Guides</h3>
                  <p className="text-muted-foreground">All staff are professionally trained in youth development and outdoor safety protocols</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-[var(--shadow-gentle)]">
                <div className="bg-forest/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Full Insurance Coverage</h3>
                  <p className="text-muted-foreground">Comprehensive liability and accident coverage for all participants and activities</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-[var(--shadow-gentle)]">
                <div className="bg-river/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-river" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Structured Group Sessions Led with Care</h3>
                  <p className="text-muted-foreground">Professional facilitators guide every conversation with expertise and compassion</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-hope/20 to-relief/20 rounded-xl border-l-4 border-trust">
              <h4 className="font-semibold text-foreground mb-2">Our Promise to You</h4>
              <p className="text-muted-foreground">
                Every parent deserves peace of mind when their teen is in our care. We maintain the highest safety standards while creating transformative experiences that last a lifetime.
              </p>
            </div>
          </div>
        </div>

        {/* Partner logos placeholder */}
        <div className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground mb-4">Trusted by families and partnered with</p>
          <div className="flex justify-center space-x-8 opacity-60">
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">Community Schools</div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">Youth Organizations</div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">Safety Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;