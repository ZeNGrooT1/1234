
import { AuthForm } from "@/components/auth/AuthForm";

export default function CoordinatorLogin() {
  return (
    <AuthForm
      role="coordinator"
      roleTitle="Bus Coordinator"
      gradient="bg-gradient-to-br from-orange-500/20 to-amber-500/20"
    />
  );
}
