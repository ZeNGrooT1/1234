
import { AuthForm } from "@/components/auth/AuthForm";

export default function AdminLogin() {
  return (
    <AuthForm
      role="admin"
      roleTitle="Administrator"
      gradient="bg-gradient-to-br from-red-500/20 to-pink-500/20"
    />
  );
}
