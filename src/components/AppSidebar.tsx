import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  Home, 
  Users, 
  Calendar, 
  BookOpen, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  Bell,
  FileText,
  ClipboardList,
  TrendingUp,
  Shield,
  Database,
  Award,
  Map,
  Building
} from "lucide-react";

interface AppSidebarProps {
  role: string;
  onNavigate?: (section: string) => void;
  currentSection?: string;
}

const getSidebarItems = (role: string) => {
  const commonItems = [
    { title: "Dashboard", url: "dashboard", icon: Home },
    { title: "Attendance", url: "attendance", icon: Calendar },
    { title: "AI Assistant", url: "chatbot", icon: MessageSquare },
    { title: "Notifications", url: "notifications", icon: Bell },
  ];

  const roleSpecificItems = {
    student: [
      { title: "My Syllabus", url: "syllabus", icon: BookOpen },
      { title: "My Progress", url: "progress", icon: TrendingUp },
      { title: "Schemes & Scholarships", url: "schemes", icon: Award },
    ],
    teacher: [
      { title: "Today's Work", url: "todays-work", icon: ClipboardList },
      { title: "Syllabus Tracking", url: "syllabus", icon: BookOpen },
      { title: "Reports", url: "reports", icon: FileText },
    ],
    "school-admin": [
      { title: "Staff Management", url: "staff", icon: Users },
      { title: "School Analytics", url: "analytics", icon: BarChart3 },
      { title: "System Settings", url: "settings", icon: Settings },
      { title: "Compliance", url: "compliance", icon: Shield },
    ],
    government: [
      { title: "District Overview", url: "district", icon: Map },
      { title: "School Networks", url: "schools", icon: Building },
      { title: "Policy Management", url: "policies", icon: FileText },
      { title: "Data Analytics", url: "data", icon: Database },
    ],
  };

  return [
    ...commonItems,
    ...(roleSpecificItems[role as keyof typeof roleSpecificItems] || []),
  ];
};

export function AppSidebar({ role, onNavigate, currentSection = "dashboard" }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const items = getSidebarItems(role);

  const getRoleTitle = () => {
    const titles = {
      student: "Student Portal",
      teacher: "Teacher Portal",
      "school-admin": "School Admin",
      government: "Government Portal",
    };
    return titles[role as keyof typeof titles] || "Dashboard";
  };

  const isActive = (path: string) => currentSection === path;

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"}>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "hidden" : ""}>
            {getRoleTitle()}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={isActive(item.url) ? "bg-accent text-accent-foreground" : ""}
                  >
                    <button
                      onClick={() => onNavigate?.(item.url)}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}