
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentLogin from "./pages/auth/StudentLogin";
import DriverLogin from "./pages/auth/DriverLogin";
import CoordinatorLogin from "./pages/auth/CoordinatorLogin";
import AdminLogin from "./pages/auth/AdminLogin";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import DriverDashboard from "./pages/dashboard/DriverDashboard";
import CoordinatorDashboard from "./pages/dashboard/CoordinatorDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/driver/login" element={<DriverLogin />} />
            <Route path="/coordinator/login" element={<CoordinatorLogin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/driver/dashboard" element={<DriverDashboard />} />
            <Route path="/coordinator/dashboard" element={<CoordinatorDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
