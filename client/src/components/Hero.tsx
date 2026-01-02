import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById("cennik")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-teal-100/50 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Profesjonalne sprzątanie we Wrocławiu</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl/tight font-display font-bold text-slate-900 mb-6">
              Sprzątanie Na Błysk <span className="text-primary">Wrocław</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Oferujemy szybkie i dokładne sprzątanie mieszkań, domów i biur. 
              Dbamy o każdy detal, używając bezpiecznych środków. 
              Odzyskaj swój wolny czas!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
                asChild
              >
                <a href="tel:+48700800900">
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń teraz
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 rounded-full bg-white/50 border-slate-200 hover:bg-white hover:text-primary transition-all"
                onClick={scrollToPricing}
              >
                Poznaj cennik
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Dostępne terminy na ten tydzień
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Dojazd gratis na terenie Wrocławia
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             {/* Abstract clean living room representation */}
             <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white">
                {/* Clean bright living room image from Unsplash */}
                {/* modern bright living room interior */}
                <img 
                  src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=800&q=80" 
                  alt="Lśniące czyste mieszkanie" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Card 1 */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-lg flex items-center gap-4 max-w-xs animate-bounce-slow">
                  <div className="bg-green-100 p-3 rounded-xl text-green-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">100% Satysfakcji</p>
                    <p className="text-xs text-slate-500">Gwarancja jakości usług</p>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
