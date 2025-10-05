import { Rocket } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const navItems = [
    { id: "principal", label: "Home" },
    { id: "descripcion", label: "Description" },
    { id: "creadores", label: "Creators" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Rocket className="w-8 h-8 text-primary animate-float" />
            <h1 className="text-2xl font-bold bg-gradient-solar bg-clip-text text-transparent">
              Helios Flu
            </h1>
          </div>
          
          <div className="flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
