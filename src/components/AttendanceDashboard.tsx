import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TodaysWorkPanel } from "@/components/TodaysWorkPanel";
import { SyllabusTracking } from "@/components/SyllabusTracking";
import { ProgressTracking } from "@/components/ProgressTracking";
import { SchemesScholarships } from "@/components/SchemesScholarpships";
import { AttendanceChart } from "@/components/AttendanceChart";
import { ChatbotInterface } from "@/components/ChatbotInterface";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Radio,
  MessageSquare,
  Bell,
  Calendar,
  BarChart3,
  Building,
  Shield,
  Database,
  Map,
  GraduationCap,
  School,
  Globe,
  FileText,
  BookOpen,
  Settings
} from "lucide-react";

interface AttendanceDashboardProps {
  role: string;
  onBack: () => void;
}

const mockData = {
  student: {
    name: "Alex Johnson",
    attendance: 92,
    todayStatus: "present",
    lastScan: "08:15 AM",
    weeklyStats: [95, 80, 92, 100, 85, 90, 95],
  },
  teacher: {
    name: "Sarah Wilson",
    totalStudents: 156,
    presentToday: 142,
    absentees: 14,
    classAverage: 89,
  },
  "school-admin": {
    name: "Dr. Michael Brown",
    totalStudents: 1250,
    totalTeachers: 45,
    presentToday: 1180,
    systemHealth: 98,
    alerts: 5,
  },
  government: {
    name: "Dr. Priya Sharma",
    totalSchools: 125,
    totalStudents: 45000,
    avgAttendance: 89,
    policyCompliance: 94,
    alerts: 12,
  },
};


export const AttendanceDashboard = ({ role, onBack }: AttendanceDashboardProps) => {
  const [currentSection, setCurrentSection] = useState("dashboard");

  const getRoleTitle = () => {
    const titles = {
      student: "Student Dashboard",
      teacher: "Teacher Dashboard", 
      "school-admin": "School Administrator Dashboard",
      government: "Government Portal Dashboard",
    };
    return titles[role as keyof typeof titles] || "Dashboard";
  };

  const getWelcomeMessage = () => {
    const data = mockData[role as keyof typeof mockData];
    if (!data) return "Welcome";
    
    if ('name' in data) return `Welcome back, ${data.name}`;
    return "System Overview";
  };

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
  };

  const renderMainContent = () => {
    switch (currentSection) {
      case "todays-work":
        return role === "teacher" ? <TodaysWorkPanel /> : renderDashboard();
      case "syllabus":
        return (role === "student" || role === "teacher") ? 
          <SyllabusTracking role={role} /> : renderDashboard();
      case "progress":
        return role === "student" ? <ProgressTracking role={role} /> : renderDashboard();
      case "schemes":
        return role === "student" ? <SchemesScholarships /> : renderDashboard();
      case "chatbot":
        return <ChatbotInterface />;
      default:
        return renderDashboard();
    }
  };

  const renderDashboard = () => {

    return (
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {role === "student" && (
            <>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Attendance Rate</p>
                    <p className="text-3xl font-bold text-success">92%</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Today's Status</p>
                    <Badge variant="default" className="bg-success text-success-foreground">
                      Present
                    </Badge>
                  </div>
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Last Scan</p>
                    <p className="text-lg font-semibold">08:15 AM</p>
                  </div>
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Syllabus Progress</p>
                    <p className="text-lg font-semibold">64%</p>
                  </div>
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
              </Card>
            </>
          )}

          {role === "teacher" && (
            <>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                    <p className="text-3xl font-bold">156</p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Present Today</p>
                    <p className="text-3xl font-bold text-success">142</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Classes Today</p>
                    <p className="text-3xl font-bold text-accent">3</p>
                  </div>
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Progress</p>
                    <p className="text-3xl font-bold text-primary">67%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </Card>
            </>
          )}

          {role === "school-admin" && (
            <>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                    <p className="text-3xl font-bold">1,250</p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Present Today</p>
                    <p className="text-3xl font-bold text-success">1,180</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Teachers</p>
                    <p className="text-3xl font-bold text-accent">45</p>
                  </div>
                  <School className="w-8 h-8 text-accent" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">System Health</p>
                    <p className="text-3xl font-bold text-success">98%</p>
                  </div>
                  <Shield className="w-8 h-8 text-success" />
                </div>
              </Card>
            </>
          )}

          {role === "government" && (
            <>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Schools</p>
                    <p className="text-3xl font-bold">125</p>
                  </div>
                  <Building className="w-8 h-8 text-primary" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                    <p className="text-3xl font-bold text-accent">45,000</p>
                  </div>
                  <Users className="w-8 h-8 text-accent" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Attendance</p>
                    <p className="text-3xl font-bold text-success">89%</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Policy Compliance</p>
                    <p className="text-3xl font-bold text-primary">94%</p>
                  </div>
                  <Globe className="w-8 h-8 text-primary" />
                </div>
              </Card>
            </>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Attendance Chart */}
          <AttendanceChart role={role} />

          {/* Quick Actions */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              <Badge variant="default" className="bg-primary/10 text-primary">
                Active
              </Badge>
            </div>
            <div className="space-y-3">
              {role === "student" && (
                <>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => handleNavigation("syllabus")}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    View My Syllabus
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => handleNavigation("progress")}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    My Progress
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => handleNavigation("schemes")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Schemes & Scholarships
                  </Button>
                </>
              )}
              
              {role === "teacher" && (
                <>
                  <Button variant="outline" className="w-full justify-start" onClick={() => handleNavigation("syllabus")}>
                    <Users className="w-4 h-4 mr-2" />
                    Syllabus Tracking
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => handleNavigation("todays-work")}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Today's Work 
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => handleNavigation("reports")}>
                    <FileText className="w-4 h-4 mr-2" />
                    Reports
                  </Button>
                </>
              )}

              {role === "school-admin" && (
                <>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Staff
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    System Settings
                  </Button>
                </>
              )}

              {role === "government" && (
                <>
                  <Button variant="outline" className="w-full justify-start">
                    <Map className="w-4 h-4 mr-2" />
                    District Overview
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Database className="w-4 h-4 mr-2" />
                    Data Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Policy Management
                  </Button>
                </>
              )}
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { 
                time: "08:15 AM", 
                event: role === "government" ? "District compliance report generated" : "RFID scan detected at main entrance", 
                type: "success" 
              },
              { 
                time: "08:10 AM", 
                event: role === "government" ? "Policy update notification sent to all schools" : "Daily attendance report generated", 
                type: "info" 
              },
              { 
                time: "07:45 AM", 
                event: role === "government" ? "125 schools system health verified" : "System health check completed", 
                type: "success" 
              },
              { 
                time: "07:30 AM", 
                event: "New government scheme notification", 
                type: "info" 
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === "success" ? "bg-success" : "bg-primary"
                }`} />
                <div className="flex-1">
                  <p className="text-sm">{activity.event}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex">
        <AppSidebar 
          role={role} 
          onNavigate={handleNavigation}
          currentSection={currentSection}
        />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-card border-b">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                  <div className="space-y-1">
                    <h1 className="text-2xl font-bold">{getRoleTitle()}</h1>
                    <p className="text-muted-foreground">{getWelcomeMessage()}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-success/10 px-3 py-2 rounded-lg">
                    <Radio className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium text-success">RFID Online</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={onBack}>
                    ← Switch Role
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bell className="w-4 h-4" />
                    Notifications
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 container mx-auto px-4 py-8">
            {renderMainContent()}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};