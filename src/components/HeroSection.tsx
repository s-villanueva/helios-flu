import { Sparkles } from "lucide-react";
import heroSpace from "@/assets/hero-space.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-float">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-10 h-10 text-accent animate-glow" />
            <h2 className="text-6xl font-bold bg-gradient-solar bg-clip-text text-transparent">
              Helios Flu
            </h2>
            <Sparkles className="w-10 h-10 text-secondary animate-glow" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how a solar eruption affects the entire planet in this incredible space adventure!          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
          >
            <div className="bg-gradient-to-b from-transparent via-background/50 to-background/90 p-8">
              <div className="aspect-video bg-card/60 backdrop-blur-sm rounded-2xl border-2 border-accent/50 flex items-center justify-center min-h-[500px]">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-solar rounded-full mx-auto mb-6 animate-glow shadow-glow"></div>
                  <p className="text-lg text-foreground/80 font-medium mb-4">
                    Aquí aparecerá el juego
                  </p>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Añade el iframe del juego en este espacio. El contenedor está listo para recibir tu juego interactivo.
                  </p>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg text-left">
                    <code className="text-xs text-accent break-all">
                      {`<iframe src="TU_URL_AQUI" className="w-full h-full rounded-xl" />`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
