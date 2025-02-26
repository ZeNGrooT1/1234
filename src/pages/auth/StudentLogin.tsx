
import { AuthForm } from "@/components/auth/AuthForm";

export default function StudentLogin() {
  return (
    <AuthForm
      role="student"
      roleTitle="Student"
      gradient="bg-gradient-to-br from-blue-500/20 to-purple-500/20"
    />
  );
}
