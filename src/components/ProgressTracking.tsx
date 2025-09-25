import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Trophy,
  TrendingUp,
  Calendar 
} from "lucide-react";

interface ProgressTrackingProps {
  role: string;
}

const studentProgress = [
  { subject: "Mathematics", progress: 85, grade: "A", lastTest: 92 },
  { subject: "Science", progress: 78, grade: "B+", lastTest: 84 },
  { subject: "English", progress: 92, grade: "A+", lastTest: 95 },
  { subject: "History", progress: 74, grade: "B", lastTest: 78 },
  { subject: "Geography", progress: 89, grade: "A", lastTest: 91 },
];

const achievements = [
  { title: "Perfect Attendance", month: "November", icon: Trophy, color: "text-yellow-500" },
  { title: "Top Performer", subject: "Mathematics", icon: CheckCircle, color: "text-green-500" },
  { title: "Improved Grade", subject: "Science", icon: TrendingUp, color: "text-blue-500" },
];

export const ProgressTracking = ({ role }: ProgressTrackingProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Academic Progress</h2>
          <p className="text-muted-foreground">Track your performance across subjects</p>
        </div>
        <Badge variant="outline" className="bg-success/10 text-success">
          Overall: 83.6%
        </Badge>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Overall Performance</h3>
              <p className="text-sm text-muted-foreground">Your academic journey</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Current GPA</span>
              <span className="text-lg font-bold text-success">3.8</span>
            </div>
            <Progress value={83.6} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>83.6% Complete</span>
              <span>Excellent Performance</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Attendance Summary</h3>
              <p className="text-sm text-muted-foreground">This semester</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Days Present</span>
              <span className="text-lg font-bold text-success">142/154</span>
            </div>
            <Progress value={92.2} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>92.2% Attendance</span>
              <span>Excellent</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Subject Progress */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Subject-wise Progress</h3>
        <div className="space-y-4">
          {studentProgress.map((subject, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="font-medium">{subject.subject}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{subject.grade}</Badge>
                  <span className="text-sm text-muted-foreground">
                    Last Test: {subject.lastTest}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Recent Achievements</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                <span className="font-medium">{achievement.title}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {achievement.month && `Earned in ${achievement.month}`}
                {achievement.subject && `Excellence in ${achievement.subject}`}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};