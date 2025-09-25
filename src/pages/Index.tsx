import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { RoleSelector } from "@/components/RoleSelector";
import { AttendanceDashboard } from "@/components/AttendanceDashboard";
import { ChatbotInterface } from "@/components/ChatbotInterface";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showChatbot, setShowChatbot] = useState(false);

  const handleLogin = (role: string, credentials: any) => {
    // In a real app, this would validate credentials with Supabase
    setIsAuthenticated(true);
    setSelectedRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedRole(null);
    setShowChatbot(false);
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleBackToRoles = () => {
    setSelectedRole(null);
    setShowChatbot(false);
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  // If authenticated but no role selected (fallback)
  if (!selectedRole) {
    return <RoleSelector onRoleSelect={handleRoleSelect} />;
  }

  // Main dashboard with floating chatbot
  return (
    <div className="relative">
      <AttendanceDashboard role={selectedRole} onBack={handleLogout} />
      
      {/* Floating Chatbot Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChatbot ? (
          <div className="bg-background border shadow-2xl rounded-2xl w-96 h-[600px] mb-4">
            <ChatbotInterface />
          </div>
        ) : null}
        
        <Button
          variant="hero"
          size="lg"
          className="rounded-full w-14 h-14 shadow-colored"
          onClick={() => setShowChatbot(!showChatbot)}
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
