import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Check, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
  return (
    <section id="cennik" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 bg-white text-primary border-primary/20 px-4 py-1 text-sm">Cennik 2024</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Przejrzyste Ceny</h2>
          <p className="text-lg text-slate-600">
            Bez ukrytych kosztów. Ceny brutto dla klientów indywidualnych.
            Wystawiamy faktury VAT.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: Cleaning Packages */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full block"></span>
              Sprzątanie Mieszkań i Domów
            </h3>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[50%]">Metraż / Rodzaj</TableHead>
                    <TableHead className="text-right text-slate-900 font-bold">Podstawowe</TableHead>
                    <TableHead className="text-right text-primary font-bold">Generalne</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Kawalerka 20 m²</TableCell>
                    <TableCell className="text-right">150 zł</TableCell>
                    <TableCell className="text-right font-bold text-slate-900">250 zł</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1-pok (&lt;40 m²)</TableCell>
                    <TableCell className="text-right">200 zł</TableCell>
                    <TableCell className="text-right font-bold text-slate-900">350 zł</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1-pok (&gt;40 m²)</TableCell>
                    <TableCell className="text-right">250 zł</TableCell>
                    <TableCell className="text-right font-bold text-slate-900">450 zł</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2-pok (40–60 m²)</TableCell>
                    <TableCell className="text-right">300 zł</TableCell>
                    <TableCell className="text-right font-bold text-slate-900">500 zł</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">3-pok (60–80 m²)</TableCell>
                    <TableCell className="text-right">350 zł</TableCell>
                    <TableCell className="text-right font-bold text-slate-900">550 zł</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium">Domy (90–120 m²)</TableCell>
                    <TableCell className="text-right">450 zł</TableCell>
                    <TableCell className="text-right font-bold text-slate-900">700 zł</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100 flex gap-3 items-start">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">
                <strong>Dopłaty:</strong> Mycie okien – od 35 zł. Balkon/taras – od 50 zł.
                <br/>
                Ceny mogą się różnić w zależności od zakresu i stopnia zabrudzenia – <a href="tel:+48700800900" className="text-primary font-bold underline">zadzwoń po szybką wycenę</a>.
              </p>
            </div>
          </div>

          {/* Column 2: Specialist Services */}
          <div className="space-y-8">
            
            {/* Upholstery */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-orange-400 rounded-full block"></span>
                Pranie Tapicerki i Wykładzin
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Pranie kanapy/sofy</span>
                  <span className="font-bold text-slate-900">od 150 zł</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Narożnik</span>
                  <span className="font-bold text-slate-900">od 200 zł</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Materac (Jedynka / Dwójka)</span>
                  <span className="font-bold text-slate-900">200 / 300 zł</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Pranie wykładziny</span>
                  <span className="font-bold text-slate-900">15 zł / m²</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-600">Krzesła tapicerowane</span>
                  <span className="font-bold text-slate-900">20 – 30 zł</span>
                </li>
              </ul>
            </div>

            {/* Garage & Floors */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-slate-500 rounded-full block"></span>
                Posadzki i Garaże
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Mycie hal garażowych</span>
                  <span className="font-bold text-slate-900">od 150 zł</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Mycie maszynowe</span>
                  <span className="font-bold text-slate-900">1,80 zł / m²</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Zamiatanie ręczne</span>
                  <span className="font-bold text-slate-900">0,70 zł / m²</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Odkurzanie posadzki</span>
                  <span className="font-bold text-slate-900">1,00 zł / m²</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-600">Doczyszczanie posadzek</span>
                  <span className="font-bold text-slate-900">4,20 zł / m²</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
