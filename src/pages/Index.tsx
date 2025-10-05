import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import CreatorsSection from "@/components/CreatorsSection";
import { FaGithub } from "react-icons/fa";

const Index = () => {
  const [activeSection, setActiveSection] = useState("principal");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["principal", "descripcion", "creadores"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <div id="principal">
        <HeroSection />
      </div>
      
      <div id="descripcion">
        <DescriptionSection />
      </div>
      
      <div id="creadores">
        <CreatorsSection />
      </div>

      <footer className="bg-card/50 backdrop-blur-lg border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Helios Flu. An educational space adventure. ✨
          </p>
          <a href="https://github.com/s-villanueva/helios-flu" target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
          </a>
        </div>
        
      </footer>
    </div>
  );
};

export default Index;
