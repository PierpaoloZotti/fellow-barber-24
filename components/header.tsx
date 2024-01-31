import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between px-5 py-5">
        <Image alt="logo" src="/logoFB.png" width={140} height={18} />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
