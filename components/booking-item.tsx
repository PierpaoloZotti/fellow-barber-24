import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="flex justify-between p-0">
        <div className="flex flex-col space-y-2 p-5">
          <Badge className="w-fit bg-muted text-primary hover:bg-muted">
            Confirmado
          </Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage
                src="https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png"
                alt="Avatar"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">Vintage Barber Shop</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l px-5">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl font-bold">15</p>
          <p className="text-sm">10:45</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
