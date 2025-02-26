
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { BusScheduleList } from "@/components/student/BusScheduleList";
import { Card } from "@/components/ui/card";
import { Bell, Bus } from "lucide-react";

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Welcome Back</h2>
          <p className="text-muted-foreground">
            View your bus schedules and manage your notifications.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Available Buses</h3>
              <Bus className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold">12</p>
          </Card>
          
          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Notifications</h3>
              <Bell className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold">3</p>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Available Bus Schedules</h3>
          <BusScheduleList />
        </div>
      </div>
    </DashboardLayout>
  );
}
