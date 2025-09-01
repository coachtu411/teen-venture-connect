import { Button } from "@/components/ui/button";
import raftingImage from "@/assets/rafting-adventure.jpg";
import ziplineImage from "@/assets/zipline-action.jpg";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-hope/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="text-forest">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At each Success Systems Network event, your teen will discover new strengths, build trust, and reconnect with what matters most.
          </p>
        </div>

        {/* What Teens Will Do */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            What Your Teen Will Experience
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <img 
                src={raftingImage} 
                alt="Teens enjoying whitewater rafting adventure with safety gear"
                className="rounded-xl shadow-[var(--shadow-forest)] w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold">Adventure Challenges</h4>
                <p className="text-white/90">Whitewater rafting & team building</p>
              </div>
            </div>

            <div className="relative group">
              <img 
                src={ziplineImage} 
                alt="Teens on zipline adventure looking thrilled and energized"
                className="rounded-xl shadow-[var(--shadow-forest)] w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-river/80 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold">Ziplining & Heights</h4>
                <p className="text-white/90">Overcome fears & build confidence</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl shadow-[var(--shadow-gentle)]">
              <div className="text-3xl mb-3">🏞️</div>
              <h4 className="font-semibold text-forest mb-2">Adventure Challenges</h4>
              <p className="text-muted-foreground">Tackle whitewater rafting & ziplining with expert guidance</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-[var(--shadow-gentle)]">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold text-forest mb-2">Guided Sharing</h4>
              <p className="text-muted-foreground">Share stories and listen in safe, supportive group sessions</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-[var(--shadow-gentle)]">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold text-forest mb-2">Safe Environment</h4>
              <p className="text-muted-foreground">Experience support with certified facilitators & peer connections</p>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-gradient-to-r from-forest/5 to-river/5 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Event Snapshot</h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-forest text-2xl font-bold">📅</div>
              <h4 className="font-semibold text-foreground">When</h4>
              <p className="text-muted-foreground">Twice per month</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-river text-2xl font-bold">⏰</div>
              <h4 className="font-semibold text-foreground">Format</h4>
              <p className="text-muted-foreground">One-day immersive event</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-sunset text-2xl font-bold">👥</div>
              <h4 className="font-semibold text-foreground">For Who</h4>
              <p className="text-muted-foreground">Teens ages 13–21 and families</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-gold text-2xl font-bold">💰</div>
              <h4 className="font-semibold text-foreground">Price</h4>
              <p className="text-muted-foreground font-semibold">$350 per participant</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="adventure" size="lg">
            Learn More About Our Next Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;