
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { signOut, user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">Campus Bus Assistant</h1>
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2"
            onClick={() => signOut()}
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
