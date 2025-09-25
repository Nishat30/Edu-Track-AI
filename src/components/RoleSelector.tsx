import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, GraduationCap, Heart, Settings } from "lucide-react";
import heroImage from "@/assets/hero-attendance.jpg";

interface Role {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const roles: Role[] = [
  {
    id: "student",
    title: "Student",
    description: "View attendance, syllabus tracking, chat with AI assistant",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "primary",
  },
  {
    id: "teacher",
    title: "Teacher",
    description: "Manage classes, today's work, attendance & syllabus tracking",
    icon: <Users className="w-8 h-8" />,
    color: "accent",
  },
  {
    id: "school-admin",
    title: "School Administrator",
    description: "School management, staff oversight, system administration",
    icon: <Settings className="w-8 h-8" />,
    color: "gradient",
  },
  {
    id: "government",
    title: "Government Official",
    description: "Policy oversight, district analytics, compliance monitoring",
    icon: <Heart className="w-8 h-8" />,
    color: "secondary",
  },
];

interface RoleSelectorProps {
  onRoleSelect: (role: string) => void;
}

export const RoleSelector = ({ onRoleSelect }: RoleSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center">
      <div className="w-full max-w-md mx-auto p-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Welcome</h1>
            <p className="text-muted-foreground">Select your role to continue</p>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Role</label>
            <Select onValueChange={onRoleSelect}>
              <SelectTrigger className="w-full h-12 bg-muted border border-border hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border shadow-lg">
                <SelectItem value="student" className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950">
                  Student
                </SelectItem>
                <SelectItem value="teacher" className="text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950">
                  Teacher
                </SelectItem>
                <SelectItem value="school-admin" className="text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950">
                  Administrator
                </SelectItem>
                <SelectItem value="government" className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950">
                  Government Official
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};