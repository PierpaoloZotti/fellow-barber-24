import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { Barbershop, Service } from "@prisma/client";
import { ChevronLeft, MenuIcon, PinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

type BarbershopDetailsProps = {
  params: Barbershop & {
    Services: Service[];
  };
};

const BarbershopDetails = async ({ params }: BarbershopDetailsProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return <div>Barbershop not found</div>; //Implement a Not Found page
  }
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      <div className="flex flex-col space-y-3  p-5">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetails;
