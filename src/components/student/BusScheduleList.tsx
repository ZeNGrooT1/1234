
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BusScheduleCard } from "./BusScheduleCard";
import { Skeleton } from "@/components/ui/skeleton";

interface Bus {
  bus_number: string;
  bus_name: string;
}

interface Route {
  name: string;
  stops: string[];
}

interface Schedule {
  id: string;
  departure_time: string;
  arrival_time: string;
  buses: Bus;
  routes: Route;
}

export function BusScheduleList() {
  const { data: schedules, isLoading } = useQuery({
    queryKey: ["bus-schedules"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("schedules")
        .select(`
          id,
          departure_time,
          arrival_time,
          buses!inner (
            bus_number,
            bus_name
          ),
          routes!inner (
            name,
            stops
          )
        `)
        .eq("is_active", true);

      if (error) throw error;
      
      // Transform the data to match our Schedule interface
      return (data as any[]).map((item): Schedule => ({
        id: item.id,
        departure_time: item.departure_time,
        arrival_time: item.arrival_time,
        buses: item.buses[0], // Get first bus since we used !inner
        routes: item.routes[0], // Get first route since we used !inner
      }));
    },
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {schedules?.map((schedule) => (
        <BusScheduleCard
          key={schedule.id}
          busNumber={schedule.buses.bus_number}
          routeName={schedule.routes.name}
          departureTime={schedule.departure_time}
          arrivalTime={schedule.arrival_time}
          stops={schedule.routes.stops}
        />
      ))}
    </div>
  );
}
