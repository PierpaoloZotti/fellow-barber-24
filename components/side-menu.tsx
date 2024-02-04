"use client"

import Link from "next/link";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { CalendarClockIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";

const SideMenu = () => {
    const handleLogin = async () => {
        await signIn();
      };
      const handleLogout = async () => {
        await signOut();
      };
      const { data: session } = useSession();
  return (
    <SheetContent>
      <SheetHeader className="mb-10">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      {session ? (
        <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={session.user?.image!} />
            <AvatarFallback>{session.user?.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>

          <h2>{session.user?.name}</h2>
        </div>
        <Button variant="ghost" size="icon" onClick={handleLogout}>
          <LogOutIcon className="h-6 w-6" />
        </Button>
      </div>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
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
      </SheetClose>{" "}
    </SheetContent>
  );
};

export default SideMenu;
