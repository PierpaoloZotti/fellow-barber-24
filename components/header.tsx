"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { signIn } from "next-auth/react";

const Header = () => {
  const handleLogin = async () => {
    signIn();
  };
  return (
    <Card>
      <CardContent className="flex items-center justify-between px-5 py-5">
        <Image alt="logo" src="/logoFB.png" width={140} height={18} />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
        <Button variant="secondary" size="sm" onClick={handleLogin}>
          Login
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
