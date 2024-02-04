import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

import { Sheet, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between px-5 py-5">
        <Image alt="logo" src="/logoFB.png" width={140} height={18} />
        <div className="flex items-center gap-x-2">
          <Sheet>
            <SheetTrigger>
              <Button variant="outline" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SideMenu />
          </Sheet>
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
