import { Clock, ShieldCheck, CheckCircle2, UserCheck, MapPin, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Punktualność",
    description: "Szanujemy Twój czas. Zawsze zjawiamy się o umówionej godzinie."
  },
  {
    icon: ShieldCheck,
    title: "Bezpieczne Środki",
    description: "Używamy profesjonalnej chemii bezpiecznej dla dzieci i zwierząt."
  },
  {
    icon: Sparkles,
    title: "Dokładność",
    description: "Nie pomijamy żadnych kątów. Sprawdzamy jakość po każdym sprzątaniu."
  },
  {
    icon: CheckCircle2,
    title: "Szybkie Terminy",
    description: "Często możemy przyjąć zlecenie z dnia na dzień. Sprawdź dostępność!"
  },
  {
    icon: UserCheck,
    title: "Zaufany Personel",
    description: "Nasi pracownicy są sprawdzeni, przeszkoleni i ubezpieczeni."
  },
  {
    icon: MapPin,
    title: "Wrocław i Okolice",
    description: "Dojazd na terenie Wrocławia w cenie usługi. Obsługujemy też gminy ościenne."
  }
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="section-padding bg-primary text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dlaczego warto nas wybrać?</h2>
          <p className="text-blue-100 text-lg">
            Setki zadowolonych klientów we Wrocławiu. Stawiamy na jakość i relacje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-blue-50 opacity-90 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
