
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

interface BusScheduleCardProps {
  busNumber: string;
  routeName: string;
  departureTime: string;
  arrivalTime: string;
  stops: string[];
}

export function BusScheduleCard({
  busNumber,
  routeName,
  departureTime,
  arrivalTime,
  stops,
}: BusScheduleCardProps) {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Bus {busNumber}</h3>
          <p className="text-sm text-muted-foreground">{routeName}</p>
        </div>
        <Badge variant="secondary">Active</Badge>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span>
            {departureTime} - {arrivalTime}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>Stops</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {stops.map((stop, index) => (
            <Badge key={index} variant="outline">
              {stop}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
