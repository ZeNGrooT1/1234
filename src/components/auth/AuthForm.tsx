import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface AuthFormProps {
  role: string;
  roleTitle: string;
  gradient: string;
}

export function AuthForm({ role, roleTitle, gradient }: AuthFormProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
    usn: "",
    region: "",
    isForeignStudent: false,
  });
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Passwords do not match");
        }
        
        await signUp(
          formData.email,
          formData.password,
          role,
          formData.fullName,
          formData.phone
        );
      } else {
        await signIn(formData.email, formData.password, role);
      }
    } catch (error) {
      // Error is handled in the auth context
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <Link to="/">
        <Button
          variant="ghost"
          className="absolute top-4 left-4 gap-2 bg-white/5 hover:bg-white/10 transition-all duration-300"
          type="button"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
      </Link>

      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <Card className={`w-full max-w-md p-6 space-y-6 ${gradient} backdrop-blur-xl bg-opacity-10 border border-white/10`}>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">{roleTitle} {isSignUp ? "Registration" : "Login"}</h1>
            <p className="text-sm text-muted-foreground">
              {isSignUp
                ? "Create your account to get started"
                : "Welcome back! Please enter your details"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <>
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
                {role === "student" && (
                  <>
                    <Input
                      placeholder="USN (University Serial Number)"
                      value={formData.usn}
                      onChange={(e) =>
                        setFormData({ ...formData, usn: e.target.value })
                      }
                      required
                    />
                    <Select
                      value={formData.region}
                      onValueChange={(value) =>
                        setFormData({ ...formData, region: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hubli">Hubli</SelectItem>
                        <SelectItem value="dharwad">Dharwad</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center gap-2">
                      <Switch
                        id="foreign-student"
                        checked={formData.isForeignStudent}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, isForeignStudent: checked })
                        }
                      />
                      <Label htmlFor="foreign-student">Foreign Student</Label>
                    </div>
                  </>
                )}
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </>
            )}
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            {isSignUp && (
              <Input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
              />
            )}
            <Button
              type="submit"
              className={`w-full ${isSignUp ? 'bg-[#8B5CF6] hover:bg-[#7C3AED]' : 'bg-white/10 hover:bg-white/20'} 
                transition-all duration-300`}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>{isSignUp ? "Sign Up" : "Sign In"}</>
              )}
            </Button>
          </form>

          <div className="text-center">
            <Button
              variant="link"
              className="text-sm"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
