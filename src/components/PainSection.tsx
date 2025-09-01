import painImage from "@/assets/pain-section.jpg";

const PainSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={painImage} 
              alt="The pain of disconnection between parent and teen"
              className="rounded-2xl shadow-[var(--shadow-gentle)] w-full"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                The silent struggle every parent knows
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="flex items-start gap-3">
                  <span className="text-concern text-2xl">•</span>
                  "They won't hang out, won't talk — and you just want to hide and cry after another fight."
                </p>
                
                <p className="flex items-start gap-3">
                  <span className="text-concern text-2xl">•</span>
                  "Anything you say feels wrong. They ignore you, but listen to everyone else."
                </p>
                
                <p className="flex items-start gap-3">
                  <span className="text-concern text-2xl">•</span>
                  "You're beyond frustrated. You wonder if you're failing as a parent."
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-hope/20 rounded-xl border-l-4 border-forest">
              <p className="text-lg font-medium text-forest">
                It's not just you. Parents everywhere feel this same heartbreak. 
                <span className="block mt-2 text-forest/80">But there's a way forward.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;