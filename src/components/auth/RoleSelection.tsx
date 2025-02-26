
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BusFront, BadgeHelp, ShieldCheck } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Student",
      description: "Access bus schedules, vote for routes, and report issues",
      path: "/student/login",
      icon: GraduationCap,
      gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Driver",
      description: "Manage your schedule and receive real-time updates",
      path: "/driver/login",
      icon: BusFront,
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Bus Coordinator",
      description: "Oversee bus operations and handle schedules",
      path: "/coordinator/login",
      icon: BadgeHelp,
      gradient: "bg-gradient-to-br from-orange-500/20 to-amber-500/20",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
        {/* Main Title with Animation */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Campus Bus Assistant
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Select your role to access personalized features and services
          </p>
        </div>
        
        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl p-4">
          {roles.map((role, index) => (
            <Card 
              key={role.title} 
              className={`group relative p-6 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl
                ${role.gradient} backdrop-blur-xl bg-opacity-10 border border-white/10`}
              style={{ 
                animation: `fade-in 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0 
              }}
            >
              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4">
                  <role.icon className="w-10 h-10 text-white/80" />
                </div>
                <h2 className="text-xl font-semibold mb-3">{role.title}</h2>
                <p className="text-muted-foreground mb-6 flex-grow">{role.description}</p>
                <Button 
                  className="w-full bg-white/10 hover:bg-white/20 transition-all duration-300
                    backdrop-blur-lg border border-white/20 text-white"
                  onClick={() => navigate(role.path)}
                >
                  Login as {role.title}
                </Button>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
              </div>
            </Card>
          ))}
        </div>

        {/* Admin Button */}
        <Button 
          variant="outline" 
          className="absolute top-4 right-4 backdrop-blur-md border border-white/10 
            hover:bg-white/10 transition-all duration-300 space-x-2"
          onClick={() => navigate("/admin/login")}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Admin Login</span>
        </Button>
      </div>

      {/* Add a subtle floating animation to background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 animate-float-slow" />
      </div>
    </div>
  );
};

export default RoleSelection;
