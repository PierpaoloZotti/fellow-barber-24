import { db } from "@/lib/prisma";
import { Barbershop, Service } from "@prisma/client";
import BarbershopInfo from "@/app/barbershop/[id]/_components/barbershop-info";
import ServiceItem from "@/app/barbershop/[id]/_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type BarbershopDetailsProps = {
  params: Barbershop & {
    Services: Service[];
  };
};

const BarbershopDetails = async ({ params }: BarbershopDetailsProps) => {
  const session = await getServerSession(authOptions);
  console.log({ session });

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
          <ServiceItem
            key={service.id}
            service={service}
            isAuthenticated={!!session?.user}
            barbershop={barbershop.name}
          />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetails;
