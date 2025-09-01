import { Button } from "@/components/ui/button";
import victoryImage from "@/assets/victory-highfive.jpg";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-forest/5 via-hope/10 to-gold/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready for a <span className="text-forest">breakthrough</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Spots are limited. Don't let another month pass wondering if things will ever change. 
              Reserve your teen's place today and take the first step toward rebuilding your connection.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-forest/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">One-day breakthrough experience</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-forest/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">Professional facilitators & safety staff</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-forest/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">Tools and strategies for lasting change</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl"
                className="w-full sm:w-auto shadow-[var(--shadow-warm)] hover:shadow-2xl text-lg font-bold"
              >
                Reserve Your Spot Now
              </Button>
              
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">or</span>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  Schedule a Parent Call
                </Button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gold/10 rounded-lg border-l-4 border-gold">
              <p className="text-sm text-foreground">
                <strong>Limited spots available:</strong> We keep group sizes small for maximum impact. 
                Next event filling quickly.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={victoryImage} 
              alt="Parent and teen celebrating together with a high-five after completing outdoor challenge"
              className="rounded-2xl shadow-[var(--shadow-forest)] w-full"
            />
            <div className="absolute -top-4 -left-4 bg-gold backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-white text-2xl">🙌</div>
              <p className="text-white text-sm font-medium">Victory moment</p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-forest backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-white text-2xl">💪</div>
              <p className="text-white text-sm font-medium">Breakthrough achieved</p>
            </div>
          </div>
        </div>

        {/* Urgency section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-sunset/20 to-gold/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't Wait for Things to Get Worse
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every day of disconnection makes rebuilding harder. Take action now while your teen is still open to change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;