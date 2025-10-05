import { Sun, Users, Zap, Shield } from "lucide-react";
import solarFlare from "@/assets/solar-flare.jpg";

const DescriptionSection = () => {
  const features = [
    {
      icon: Sun,
      title: "Solar Flares",
      description: "Learn about amazing solar storms and how they affect our planet.",
    },
    {
      icon: Users,
      title: "Interactive Storytelling",
      description: "Experience an exciting story as you uncover the science behind space phenomena.",
    },
    {
      icon: Zap,
      title: "Educational Adventure",
      description: "Combine fun and learning in a unique space experience.",
    },
    {
      icon: Shield,
      title: "Made For The Youth",
      description: "Designed especially for young minds curious about the universe.",
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            What is Helios Flu?
          </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
    Helios Flu is an educational game that tells the story of how a powerful solar eruption impacts people’s lives on Earth. 
    Through an interactive narrative, children will learn about space phenomena in a fun and memorable way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-cosmic"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-solar rounded-xl shadow-glow">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="sticky top-32">
              <img
                src={solarFlare}
                alt="Erupción Solar"
                className="w-full h-auto rounded-3xl shadow-cosmic border-2 border-accent/30 animate-float"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-cosmic rounded-full blur-3xl opacity-50 animate-glow"></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-space p-8 rounded-3xl border border-primary/30 shadow-cosmic">
          <h3 className="text-3xl font-bold mb-4 text-center">An Space Adventure</h3>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            A short game with a linear story that showcases the effects of space weather over the planet Earth and how we perceive it. 
            The player gets to interact with the world while getting info drops on the behavior of solar storms their interaction with Earth's atmosphere. This would promote the awareness of these type of events, with the potential to cause major disruptions in the modern society that relies so much on electrical devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
