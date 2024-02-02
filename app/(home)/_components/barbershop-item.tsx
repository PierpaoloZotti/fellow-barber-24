import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
type BarbershopProps = {
  barbershop: Barbershop;
};

const BarbershopItem = ({ barbershop }: BarbershopProps) => {
  return (
    <Card className="min-w-[176px] max-w-[176px] rounded-2xl">
      <CardContent className="p-1">
        <CardHeader className="relative mb-3 h-[159px] w-full  px-1">
          <div className="absolute left-1.5 top-2 z-10 rounded-full bg-secondary/80 px-2 py-1 ">
            <div className="flex items-center gap-1">
              <StarIcon className="h-4 w-4 fill-primary text-primary " />
              <p className="text-sm font-semibold">5.0</p>
            </div>
          </div>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            className="rounded-xl"
          />
        </CardHeader>
        <h1 className="overflow-hidden text-ellipsis text-nowrap font-bold">
          {barbershop.name}
        </h1>
        <p className="mt-2 overflow-hidden text-ellipsis text-nowrap text-sm text-muted-foreground">
          {barbershop.address}
        </p>
        <Button variant="secondary" className="mt-3 w-full rounded-b-xl">
          Agendar
        </Button>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
