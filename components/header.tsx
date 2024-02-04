"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  CalendarClockIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const Header = () => {
  const handleLogin = async () => {
    await signIn();
  };
  const handleLogout = async () => {
    await signOut();
  };
  const { data: session } = useSession();
  if (!session) {
    return (
      <Card>
        <CardContent className="flex items-center justify-between px-5 py-5">
          <Image alt="logo" src="/logoFB.png" width={140} height={18} />
          <Button onClick={handleLogin}>Login</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="flex items-center justify-between px-5 py-5">
        <Image alt="logo" src="/logoFB.png" width={140} height={18} />
        <div className="flex items-center gap-x-2">
          <Button variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
          <Sheet>
            <SheetTrigger>
              <Button variant="outline" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="mb-10">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={session.user?.image!} />
                    <AvatarFallback>
                      {session.user?.name?.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <h2>{session.user?.name}</h2>
                </div>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOutIcon className="h-6 w-6" />
                </Button>
              </div>
              <SheetClose asChild>
                <div className="flex flex-col space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex justify-start space-x-4"
                    asChild
                  >
                    <Link href="/">
                      <HomeIcon className="h-4 w-4" />
                      <p className="text-sm">Inicio</p>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex justify-start space-x-4"
                    asChild
                  >
                    <Link href="/">
                      <CalendarClockIcon className="h-4 w-4" />
                      <p className="text-sm">Agendamentos</p>
                    </Link>
                  </Button>
                </div>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
