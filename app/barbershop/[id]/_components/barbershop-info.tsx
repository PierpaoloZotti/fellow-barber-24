"use client";

import { Button } from "@/components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeft, MenuIcon, PinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type BarbershopInfoProps = {
  barbershop: Barbershop;
};

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <div className=" flex flex-col">
      <div className=" relative h-[250px] w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          className="object-cover opacity-75"
          fill
        />
        <Button
          className="absolute left-4 top-4 z-50"
          size="icon"
          variant="outline"
          onClick={handleClick}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          className="absolute right-4 top-4 z-50"
          size="icon"
          variant="outline"
        >
          <MenuIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col space-y-2 border-b border-secondary p-5">
        <h1 className="text-lg font-bold">{barbershop.name}</h1>
        <div className="flex items-center space-x-2">
          <PinIcon className="h-3 w-3 text-primary" />
          <p className="text-sm text-muted-foreground">{barbershop.address}</p>
        </div>
        <div className="flex items-center space-x-2">
          <StarIcon className="h-3 w-3 fill-primary text-primary" />
          <p className="text-sm text-muted-foreground">5.0 (880 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
