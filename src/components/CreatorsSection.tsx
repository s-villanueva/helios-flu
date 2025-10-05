import { Heart, Star } from "lucide-react";

const CreatorsSection = () => {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Star className="w-10 h-10 text-accent animate-glow" />
            <h2 className="text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              Game Creators
            </h2>
            <Star className="w-10 h-10 text-secondary animate-glow" />
          </div>
        </div>

        <div className="bg-card p-12 rounded-3xl border-2 border-primary/30 shadow-cosmic mb-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-solar rounded-full shadow-glow mb-6 animate-float">
              <Heart className="w-16 h-16 text-primary-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold">Moondust Crusaders</h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
                  Helios Flu was created by a passionate team of designers, game developers, 
                  and space scientists who believe in the power of learning through fun.
              </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 bg-muted/50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-cosmic rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-lg mb-2">Dynamic Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Creating significant learning experiences
                </p>
              </div>

              <div className="p-6 bg-muted/50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-solar rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-lg mb-2">Development</h4>
                <p className="text-sm text-muted-foreground">
                  Turning ideas into interactive reality               </p>
              </div>

              <div className="p-6 bg-muted/50 rounded-2xl">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-lg mb-2">Space Science</h4>
                <p className="text-sm text-muted-foreground">
                  Ensuring scientific accuracy
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-space p-8 rounded-3xl border border-accent/30 text-center">
          <p className="text-xl mb-4">
            💫 <span className="font-bold">Our Mission:</span> Inspire the next generation of space explorers
          </p>
          <p className="text-muted-foreground">
            Through educational games, we aim to spark curiosity about space and science in children around the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
