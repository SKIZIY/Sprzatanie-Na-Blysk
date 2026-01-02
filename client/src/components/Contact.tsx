import { Phone, MapPin, Clock, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="kontakt" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Contact Info */}
          <div className="p-8 lg:p-16 flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Skontaktuj się z nami</h2>
            <p className="text-lg text-slate-600 mb-10">
              Chcesz zamówić sprzątanie lub dopytać o szczegóły? 
              Zadzwoń do nas – chętnie doradzimy i wycenimy usługę.
            </p>
            
            <div className="space-y-8">
              <a 
                href="tel:+48700800900" 
                className="flex items-center gap-6 group p-4 rounded-2xl transition-colors hover:bg-slate-50 border border-transparent hover:border-slate-100"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Zadzwoń teraz</p>
                  <p className="text-2xl md:text-3xl font-bold text-slate-900">+48 700 800 900</p>
                </div>
              </a>

              <div className="flex items-start gap-6 p-4">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg mb-1">Godziny pracy</p>
                  <p className="text-slate-600">Poniedziałek – Piątek: 8:00 – 18:00</p>
                  <p className="text-slate-600">Sobota: 9:00 – 14:00</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-4">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg mb-1">Obszar działania</p>
                  <p className="text-slate-600">Wrocław i okolice (do 20km)</p>
                  <p className="text-sm text-slate-400 mt-1">Biskupin, Krzyki, Fabryczna, Psie Pole, Śródmieście</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button size="lg" className="w-full sm:w-auto text-lg px-10 h-14 rounded-full shadow-xl shadow-primary/20" asChild>
                <a href="tel:+48700800900">
                  <CalendarCheck className="mr-2 w-5 h-5" />
                  Zamów sprzątanie
                </a>
              </Button>
            </div>
          </div>

          {/* Map Image / Visual */}
          <div className="lg:w-1/2 min-h-[400px] relative">
            {/* Wrocław Map Placeholder - using a static map image or abstract city representation */}
            {/* A clean map image of Wroclaw or generic city map */}
            <img 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80" 
              alt="Mapa Wrocławia" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-2xl mb-2">Działamy lokalnie</p>
                <p className="opacity-90">Szybki dojazd do każdego klienta we Wrocławiu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
