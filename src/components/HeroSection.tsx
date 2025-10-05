import { Sparkles } from "lucide-react";
import heroSpace from "@/assets/hero-space.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Título */}
        <div className="text-center mb-12 animate-float">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-10 h-10 text-accent animate-glow" />
            <h2 className="text-6xl font-bold bg-gradient-solar bg-clip-text text-transparent">
              Helios Flu
            </h2>
            <Sparkles className="w-10 h-10 text-secondary animate-glow" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how a solar eruption affects the entire planet in this incredible space adventure!
          </p>
        </div>

        {/* Contenedor centrado */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-b from-transparent via-background/50 to-background/90 p-8 rounded-3xl shadow-lg border-2 border-accent/50 flex items-center justify-center">
            {/* Cuadro fijo de 1000x640 */}
            <div className="relative w-[1000px] h-[640px] bg-card/60 backdrop-blur-sm rounded-2xl overflow-hidden">
              <iframe
                src="helios/index.html"
                className="absolute inset-0 w-full h-full rounded-2xl"
                title="Helios Flu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
