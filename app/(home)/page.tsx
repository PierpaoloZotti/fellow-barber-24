import Header from "@/components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá Fulano</h2>
        <p className="text-sm capitalize text-muted-foreground">
          {format(new Date(), "EEEE',' d 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
    </main>
  );
}
