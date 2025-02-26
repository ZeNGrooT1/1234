
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function CoordinatorDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Coordinator Dashboard</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Content will be added here */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Coming Soon</h3>
            <p className="text-sm text-muted-foreground">
              Bus management and schedule controls will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
