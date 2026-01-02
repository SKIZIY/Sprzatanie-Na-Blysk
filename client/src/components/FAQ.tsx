import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ile czasu zajmuje sprzątanie mieszkania?",
    answer: "Standardowe sprzątanie mieszkania do 50m² zajmuje zazwyczaj 2-3 godziny. Sprzątanie generalne może potrwać od 4 do 6 godzin w zależności od stopnia zabrudzenia."
  },
  {
    question: "Czy zapewniacie środki czystości?",
    answer: "Tak, przyjeżdżamy z pełnym wyposażeniem i profesjonalnymi środkami czystości. Jeśli masz preferencje co do używania własnych środków (np. ekologicznych), prosimy o informację przy rezerwacji."
  },
  {
    question: "Czy dojazd na terenie Wrocławia jest płatny?",
    answer: "Nie, dojazd na terenie całego Wrocławia jest wliczony w cenę usługi. Dojazd do miejscowości podwrocławskich wyceniamy indywidualnie (zazwyczaj symboliczna opłata paliwowa)."
  },
  {
    question: "Co obejmuje sprzątanie generalne a co podstawowe?",
    answer: "Sprzątanie podstawowe to odkurzanie, mycie podłóg, ścieranie kurzy z dostępnych powierzchni, mycie armatury łazienkowej i kuchennej. Sprzątanie generalne obejmuje dodatkowo: mycie wewnątrz szafek, mycie płytek od sufitu do podłogi, czyszczenie fug, odtłuszczanie okapu, odkamienianie, mycie drzwi i listew przypodłogowych."
  },
  {
    question: "Jak przygotować mieszkanie do prania tapicerki?",
    answer: "Prosimy o usunięcie drobnych przedmiotów z pranych mebli. Jeśli to możliwe, warto odsunąć meble od ściany. Resztą zajmiemy się my!"
  },
  {
    question: "Czy myjecie okna po remoncie?",
    answer: "Tak, specjalizujemy się w doczyszczaniu poremontowym. Usuwamy ślady po farbie, kleju i taśmach z ram okiennych i szyb przy użyciu bezpiecznych skrobaków i chemii."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Częste pytania</h2>
          <p className="text-slate-600">Odpowiedzi na najczęściej zadawane pytania przez naszych klientów.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100">
              <AccordionTrigger className="text-left text-lg font-medium text-slate-800 hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
