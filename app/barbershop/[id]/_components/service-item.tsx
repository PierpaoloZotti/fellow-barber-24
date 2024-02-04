import { Button } from "@/components/ui/button";
import { Service } from "@prisma/client";
import Image from "next/image";

type ServiceItemProps = {
  service: Service;
};

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-muted p-2 shadow-md lg:justify-normal">
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-lg">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col lg:w-full lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col">
          <h2 className="text-sm font-bold lg:text-lg">{service.name}</h2>
          <p className="text-xs text-muted-foreground lg:text-base">
            {service.description}
          </p>
        </div>
        <div className="mt-2 flex items-center justify-between lg:mt-0 lg:flex-col lg:space-y-2">
          <p className="text-primary">R$ {service.price.toFixed(2)} </p>
          <Button size="sm">Agendar</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
