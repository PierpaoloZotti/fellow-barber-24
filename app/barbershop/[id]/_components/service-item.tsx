"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Service } from "@prisma/client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ptBR } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { generateDayTimeList } from "../_utils/hours";
import { format, set } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
type ServiceItemProps = {
  service: Service;
  isAuthenticated: boolean;
  barbershop: string;
};

const ServiceItem = ({
  service,
  isAuthenticated,
  barbershop,
}: ServiceItemProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hour, setHour] = useState<string | undefined>();

  const handleDateClick = (date: Date | undefined) => {
    setDate(date);
    setHour(undefined);
  };
  const handleHourClick = (time: string) => {
    setHour(time);
  };
  const timeList = useMemo(() => {
    return date ? generateDayTimeList(date) : [];
  }, [date]);
  const handleBooking = () => {
    if (!isAuthenticated) {
      return signIn("google");
    } else {
      return service;
    }
  };
  const confirmationDisabled = !(service && date && hour && barbershop);
  const handleBookingConfirmation = () => {
    console.log(service.name, date, hour, barbershop);
  };
  let timeDisponibility = date && timeList.length > 0;
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
          <p className="text-primary">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(service.price))}
          </p>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" onClick={handleBooking}>
                Agendar
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0">
              <SheetHeader className="border-b border-secondary px-5 py-4 text-left text-sm">
                <SheetTitle className="text-sm">Agendar serviço</SheetTitle>
              </SheetHeader>
              <div className="flex w-full px-5">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateClick}
                  className="mt-6"
                  locale={ptBR}
                  fromDate={new Date()}
                  styles={{
                    head_cell: {
                      width: "100%",
                      textTransform: "capitalize",
                    },
                    cell: {
                      width: "100%",
                    },
                    button: {
                      width: "100%",
                    },
                    nav_button_previous: {
                      width: "32px",
                      height: "32px",
                    },
                    nav_button_next: {
                      width: "32px",
                      height: "32px",
                    },
                    caption: {
                      textTransform: "capitalize",
                    },
                  }}
                />
              </div>
              {timeDisponibility && (
                <div className="mt-6 flex gap-x-2 overflow-x-auto border-y border-secondary px-5 py-6 [&::-webkit-scrollbar]:hidden">
                  {timeList.map((time) => (
                    <Button
                      key={time}
                      size="sm"
                      variant={hour === time ? "default" : "outline"}
                      className="rounded-full"
                      onClick={() => handleHourClick(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              )}
              <div className="px-5 py-4">
                <Card>
                  <CardContent className="py-4">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <h3>{service.name}</h3>
                        <p>
                          {Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(Number(service.price))}
                        </p>
                      </div>
                      {date && (
                        <div className="flex items-center justify-between text-xs">
                          <p className="text-muted-foreground">Data</p>
                          <p className="text-white/75">
                            {format(date!, "d 'de' MMMM", {
                              locale: ptBR,
                            })}
                          </p>
                        </div>
                      )}
                      {hour && (
                        <div className="flex items-center justify-between text-xs">
                          <p className="text-muted-foreground">Horário</p>
                          <p className="text-white/75">{hour}</p>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-xs">
                        <p className="text-muted-foreground">Barbearia</p>
                        <p className="text-white/75">{barbershop}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <SheetFooter className="py-5">
                  <Button
                    size="lg"
                    variant="default"
                    disabled={!timeDisponibility || confirmationDisabled}
                    className="w-full lg:mx-auto lg:w-1/2"
                    onClick={handleBookingConfirmation}
                  >
                    Agendar
                  </Button>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
