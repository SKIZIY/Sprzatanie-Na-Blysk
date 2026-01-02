import { useState } from "react";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

export function Footer() {
  const mutation = useCreateSubscriber();
  
  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" }
  });

  const onSubmit = (data: InsertSubscriber) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center font-bold">S</div>
              <span className="text-xl font-bold font-display">Sprzątanie Na Błysk</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Profesjonalna firma sprzątająca we Wrocławiu. 
              Dbamy o czystość Twojego domu i biura, abyś Ty mógł zająć się tym, co ważne.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">FB</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">IG</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Szybkie linki</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById("uslugi")?.scrollIntoView({behavior: "smooth"})} className="hover:text-primary transition-colors">Usługi</button></li>
              <li><button onClick={() => document.getElementById("cennik")?.scrollIntoView({behavior: "smooth"})} className="hover:text-primary transition-colors">Cennik</button></li>
              <li><button onClick={() => document.getElementById("faq")?.scrollIntoView({behavior: "smooth"})} className="hover:text-primary transition-colors">FAQ</button></li>
              <li><button onClick={() => document.getElementById("kontakt")?.scrollIntoView({behavior: "smooth"})} className="hover:text-primary transition-colors">Kontakt</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Zapisz się, aby otrzymywać informacje o promocjach.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Twój email" 
                            {...field} 
                            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-primary"
                          />
                          <Button size="icon" type="submit" disabled={mutation.isPending}>
                            {mutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sprzątanie Na Błysk Wrocław. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Polityka Prywatności</a>
            <a href="#" className="hover:text-white">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
