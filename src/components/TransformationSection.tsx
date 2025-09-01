import transformationImage from "@/assets/transformation-hug.jpg";

const TransformationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-hope/20 via-relief/10 to-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="text-forest">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real change happens when teens feel heard, parents feel hope, and families rediscover their connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-forest mb-6">Parents see...</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-hope/20 rounded-lg">
                  <div className="text-2xl">😊</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Teens who laugh, talk, and reconnect</h4>
                    <p className="text-muted-foreground">Your teen comes home with stories to share and genuine smiles</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-relief/20 rounded-lg">
                  <div className="text-2xl">💚</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hope restored at home</h4>
                    <p className="text-muted-foreground">Family dinners feel different when connection is rebuilt</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-hope/20 rounded-lg">
                  <div className="text-2xl">🌟</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Relief knowing progress is possible</h4>
                    <p className="text-muted-foreground">You're not failing as a parent - there is a path forward</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-river mb-6">Teens feel...</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-trust/10 rounded-lg">
                  <div className="text-2xl">🤗</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Accepted without judgment</h4>
                    <p className="text-muted-foreground">Finally, a space where they can be themselves</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-trust/10 rounded-lg">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Energized by adventure</h4>
                    <p className="text-muted-foreground">Physical challenges unlock emotional breakthroughs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-trust/10 rounded-lg">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Open to communication and trust</h4>
                    <p className="text-muted-foreground">Ready to rebuild relationships with new tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={transformationImage} 
              alt="Teen and parent embracing after completing outdoor adventure, showing genuine connection and joy"
              className="rounded-2xl shadow-[var(--shadow-forest)] w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-gold/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-gold text-2xl">✨</div>
              <p className="text-sm font-medium text-foreground">Real transformation</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-forest/5 to-hope/5 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl text-gold mb-4">"</div>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
              We tried everything before. After one event, our son came home smiling and actually talking again. I cried — not out of sadness, but relief.
            </blockquote>
            <cite className="text-muted-foreground font-medium">
              — Parent, Baltimore, MD
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;