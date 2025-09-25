import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  GraduationCap, 
  Users, 
  Settings, 
  Heart, 
  Shield, 
  Lock,
  Mail,
  Eye,
  EyeOff 
} from "lucide-react";
import heroImage from "@/assets/hero-attendance.jpg";

interface LoginFormProps {
  onLogin: (role: string, credentials: any) => void;
}

const roleInfo = {
  student: {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Student Portal",
    description: "Access your attendance, syllabus, and AI assistant",
    color: "primary",
  },
  teacher: {
    icon: <Users className="w-6 h-6" />,
    title: "Teacher Portal", 
    description: "Manage classes, track progress, and today's work",
    color: "accent",
  },
  "school-admin": {
    icon: <Settings className="w-6 h-6" />,
    title: "School Administrator",
    description: "School management and system administration",
    color: "gradient",
  },
  government: {
    icon: <Heart className="w-6 h-6" />,
    title: "Government Portal",
    description: "Policy oversight and district analytics",
    color: "secondary",
  },
};

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [selectedRole, setSelectedRole] = useState<string>("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      onLogin(selectedRole, { email, password });
      setIsLoading(false);
    }, 1500);
  };

  const getDemoCredentials = (role: string) => {
    const credentials = {
      student: { email: "student@edutrack.demo", password: "demo123" },
      teacher: { email: "teacher@edutrack.demo", password: "demo123" },
      "school-admin": { email: "admin@edutrack.demo", password: "demo123" },
      government: { email: "gov@edutrack.demo", password: "demo123" },
    };
    return credentials[role as keyof typeof credentials];
  };

  const fillDemoCredentials = () => {
    const creds = getDemoCredentials(selectedRole);
    setEmail(creds.email);
    setPassword(creds.password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  EduTrack AI
                </span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight">
                Secure Access to Your
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Education Dashboard
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Advanced RFID tracking, AI-powered insights, and real-time analytics 
                for modern educational institutions.
              </p>
            </div>
            
            <div className="relative">
              <img
                src={heroImage}
                alt="EduTrack AI Dashboard"
                className="rounded-2xl shadow-2xl border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Login Form */}
          <Card className="p-8 bg-gradient-card shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-muted-foreground">
                Sign in to access your personalized dashboard
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Role</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger className="w-full h-12 bg-muted border border-border hover:border-primary/50 transition-colors">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border shadow-lg z-50">
                    <SelectItem value="student">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span>Student</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="teacher">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>Teacher</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="school-admin">
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-primary" />
                        <span>Administrator</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="government">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-primary" />
                        <span>Government Official</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Demo Access */}
            <div className="mt-6 pt-6 border-t">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Try the demo with sample credentials
                </p>
                <Button
                  variant="outline"
                  onClick={fillDemoCredentials}
                  className="w-full"
                >
                  Use Demo Login
                </Button>
              </div>
            </div>

            {/* Security Notice */}
            
          </Card>
        </div>
      </div>
    </div>
  );
};