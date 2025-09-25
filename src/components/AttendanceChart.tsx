import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Calendar, Users } from "lucide-react";

// Dummy attendance data
const weeklyData = [
  { day: "Mon", present: 145, absent: 11, percentage: 92.9 },
  { day: "Tue", present: 142, absent: 14, percentage: 91.0 },
  { day: "Wed", present: 148, absent: 8, percentage: 94.9 },
  { day: "Thu", present: 143, absent: 13, percentage: 91.7 },
  { day: "Fri", present: 149, absent: 7, percentage: 95.5 },
  { day: "Sat", present: 138, absent: 18, percentage: 88.5 },
];

const monthlyTrends = [
  { month: "Aug", attendance: 89.2 },
  { month: "Sep", attendance: 91.5 },
  { month: "Oct", attendance: 88.7 },
  { month: "Nov", attendance: 92.8 },
  { month: "Dec", attendance: 90.3 },
];

interface AttendanceChartProps {
  role: string;
}

export const AttendanceChart = ({ role }: AttendanceChartProps) => {
  const maxPresent = Math.max(...weeklyData.map(d => d.present));
  const avgAttendance = weeklyData.reduce((sum, day) => sum + day.percentage, 0) / weeklyData.length;

  return (
    <Card className="lg:col-span-2 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">
          {role === "government" ? "District Analytics" : "Attendance Analytics"}
        </h3>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-success/10 text-success">
            {avgAttendance.toFixed(1)}% Average
          </Badge>
          <Button variant="outline" size="sm">View Details</Button>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-4">This Week's Attendance</h4>
          <div className="space-y-3">
            {weeklyData.map((day, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 text-sm font-medium">{day.day}</div>
                <div className="flex-1 relative">
                  <div className="h-8 bg-muted rounded-lg overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-success to-success/80 transition-all duration-500"
                      style={{ width: `${(day.present / maxPresent) * 100}%` }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between px-3 text-sm">
                    <span className="text-success-foreground font-medium">{day.present}</span>
                    <span className="text-destructive text-xs">{day.absent} absent</span>
                  </div>
                </div>
                <div className="w-16 text-right">
                  <Badge 
                    variant={day.percentage >= 90 ? "default" : "secondary"} 
                    className={day.percentage >= 90 ? "bg-success text-success-foreground" : ""}
                  >
                    {day.percentage.toFixed(1)}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="pt-4 border-t">
          <h4 className="text-sm font-medium text-muted-foreground mb-4">Monthly Trends</h4>
          <div className="grid grid-cols-5 gap-4">
            {monthlyTrends.map((month, index) => (
              <div key={index} className="text-center">
                <div className="h-20 flex items-end justify-center mb-2">
                  <div 
                    className="w-8 bg-gradient-to-t from-primary to-primary/60 rounded-t transition-all duration-500"
                    style={{ height: `${(month.attendance / 100) * 80}px` }}
                  />
                </div>
                <div className="text-xs font-medium">{month.month}</div>
                <div className="text-xs text-muted-foreground">{month.attendance}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">Best Day</span>
            </div>
            <p className="text-lg font-bold text-success">Friday</p>
            <p className="text-xs text-muted-foreground">95.5% attendance</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">This Month</span>
            </div>
            <p className="text-lg font-bold text-primary">92.8%</p>
            <p className="text-xs text-muted-foreground">Above target</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Total Students</span>
            </div>
            <p className="text-lg font-bold text-accent">156</p>
            <p className="text-xs text-muted-foreground">Active enrollment</p>
          </div>
        </div>
      </div>
    </Card>
  );
};