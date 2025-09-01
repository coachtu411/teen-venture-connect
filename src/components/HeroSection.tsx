import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Happy teen and parent enjoying outdoor time together by a peaceful river"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/70 via-forest/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center lg:text-left">
        <div className="lg:max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Feeling like your teen{" "}
            <span className="text-gold">detests everything</span>{" "}
            you say?
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            You're exhausted, worried, and desperate to reconnect. Our outdoor breakthrough experiences help teens open up and families bond again — all in one powerful day.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            className="shadow-[var(--shadow-warm)] hover:shadow-2xl text-lg font-semibold"
          >
            👉 Reserve Your Teen's Spot Now — $350 per participant
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;