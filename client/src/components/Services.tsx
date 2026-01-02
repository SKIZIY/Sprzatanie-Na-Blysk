import { 
  Sparkles, 
  Home, 
  Building2, 
  Eraser, 
  Armchair, 
  Droplets,
  Layers,
  CarFront
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Sprzątanie Podstawowe",
    description: "Regularne utrzymanie czystości. Odkurzanie, mycie podłóg, ścieranie kurzy, łazienka i kuchnia.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Sparkles,
    title: "Sprzątanie Generalne",
    description: "Kompleksowe porządki. Mycie wewnątrz szafek, fugi, odkamienianie, trudno dostępne miejsca.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Droplets,
    title: "Mycie Okien",
    description: "Mycie szyb, ram i parapetów. Okna lśniące bez smug. Dostępne również mycie witryn sklepowych.",
    color: "bg-sky-100 text-sky-600"
  },
  {
    icon: Layers,
    title: "Balkony i Tarasy",
    description: "Gruntowne czyszczenie posadzek balkonowych, mycie barierek i usuwanie ptasich odchodów.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Armchair,
    title: "Pranie Tapicerki",
    description: "Ekstrakcyjne pranie kanap, narożników, foteli i krzeseł. Usuwanie plam i roztoczy.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Eraser,
    title: "Pranie Wykładzin",
    description: "Czyszczenie wykładzin biurowych i dywanów domowych. Przywracamy świeżość i kolor.",
    color: "bg-rose-100 text-rose-600"
  },
  {
    icon: Building2,
    title: "Doczyszczanie Posadzek",
    description: "Maszynowe mycie podłóg twardych. Usuwanie trudnych zabrudzeń poremontowych.",
    color: "bg-slate-100 text-slate-600"
  },
  {
    icon: CarFront,
    title: "Mycie Garaży",
    description: "Zamiatanie i maszynowe mycie hal garażowych w blokach i domach prywatnych.",
    color: "bg-teal-100 text-teal-600"
  }
];

export function Services() {
  return (
    <section id="uslugi" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze Usługi</h2>
          <p className="text-lg text-slate-600">
            Zajmujemy się każdym rodzajem powierzchni. Od małych kawalerek po duże biura i hale garażowe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
