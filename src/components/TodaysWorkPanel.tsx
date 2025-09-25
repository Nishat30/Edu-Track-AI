import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  CalendarDays,
  Clock,
  BookOpen,
  Users,
  CheckCircle,
  Upload,
  Plus,
  Edit
} from "lucide-react";

interface TodaysWorkPanelProps {
  className?: string;
}

export const TodaysWorkPanel = ({ className }: TodaysWorkPanelProps) => {
  const todaysWork = [
    {
      subject: "Mathematics",
      topic: "Quadratic Equations - Chapter 4",
      class: "Class 10-A",
      time: "09:00 - 10:00 AM",
      status: "completed",
      attendance: "28/30",
    },
    {
      subject: "Physics",
      topic: "Motion and Force - Lab Exercise",
      class: "Class 10-B",
      time: "11:00 - 12:00 PM",
      status: "in-progress",
      attendance: "25/30",
    },
    {
      subject: "Chemistry",
      topic: "Periodic Table - Elements Study",
      class: "Class 10-A",
      time: "02:00 - 03:00 PM",
      status: "upcoming",
      attendance: "-",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "success";
      case "in-progress": return "warning";
      case "upcoming": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <CalendarDays className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Today's Work</h3>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </Badge>
        </div>
        <Button size="sm" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Add Work
        </Button>
      </div>

      <div className="space-y-4">
        {todaysWork.map((work, index) => (
          <div 
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <h4 className="font-medium">{work.subject}</h4>
                  <Badge variant={getStatusColor(work.status) as any} className="text-xs">
                    {work.status.replace('-', ' ')}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{work.topic}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {work.class}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {work.time}
                  </div>
                  {work.attendance !== "-" && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {work.attendance} present
                    </div>
                  )}
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="w-4 h-4" />
              </Button>
            </div>

            {work.status === "in-progress" && (
              <div className="bg-muted/30 rounded-md p-3 mt-3">
                <div className="flex gap-2 mb-2">
                  <Input placeholder="Add quick notes..." className="flex-1 h-8" />
                  <Button size="sm" variant="outline">
                    <Upload className="w-3 h-3 mr-1" />
                    Upload
                  </Button>
                </div>
              </div>
            )}

            {work.status === "completed" && (
              <div className="bg-success/10 rounded-md p-3 mt-3">
                <p className="text-sm text-success font-medium">
                  ✓ Lesson completed - 28 students marked present
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Add Form */}
      <div className="mt-6 p-4 bg-muted/20 rounded-lg">
        <h4 className="text-sm font-medium mb-3">Quick Add Today's Work</h4>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <Input placeholder="Subject" className="h-8" />
          <Input placeholder="Class" className="h-8" />
        </div>
        <Textarea placeholder="Topic and description..." className="mb-3" rows={2} />
        <div className="flex gap-2">
          <Input type="time" className="h-8" />
          <Button size="sm" className="ml-auto">
            Add Work
          </Button>
        </div>
      </div>
    </Card>
  );
};