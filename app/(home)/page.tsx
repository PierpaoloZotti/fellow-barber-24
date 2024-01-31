import Header from "@/components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col gap-2 p-5">
        <h2 className="text-xl font-bold">Olá Fulano</h2>
        <p className="text-sm capitalize text-muted-foreground">
          {format(new Date(), "EEEE',' d 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="mt-6 px-5">
        <Search />
      </div>
    </main>
  );
}
