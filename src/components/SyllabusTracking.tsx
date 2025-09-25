import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Users,
  TrendingUp,
  Calendar,
  Target,
  Award,
  AlertCircle
} from "lucide-react";

interface SyllabusTrackingProps {
  role: string;
  className?: string;
}

export const SyllabusTracking = ({ role, className }: SyllabusTrackingProps) => {
  const syllabusData = {
    student: {
      subjects: [
        {
          name: "Mathematics",
          chapters: 12,
          completed: 8,
          current: "Quadratic Equations",
          nextTest: "2024-01-15",
          progress: 67,
        },
        {
          name: "Physics",
          chapters: 10,
          completed: 6,
          current: "Motion and Force",
          nextTest: "2024-01-20",
          progress: 60,
        },
        {
          name: "Chemistry",
          chapters: 14,
          completed: 9,
          current: "Periodic Table",
          nextTest: "2024-01-18",
          progress: 64,
        },
      ],
      overallProgress: 64,
    },
    teacher: {
      classes: [
        {
          name: "Class 10-A Mathematics",
          students: 30,
          chapters: 12,
          completed: 8,
          current: "Quadratic Equations",
          avgProgress: 67,
          onTrack: 25,
          behind: 5,
        },
        {
          name: "Class 10-B Mathematics", 
          students: 28,
          chapters: 12,
          completed: 7,
          current: "Linear Equations",
          avgProgress: 58,
          onTrack: 20,
          behind: 8,
        },
      ],
    },
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "success";
    if (progress >= 60) return "warning";
    return "destructive";
  };

  if (role === "student") {
    const data = syllabusData.student;
    
    return (
      <Card className={`p-6 ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">My Syllabus Progress</h3>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {data.overallProgress}% Complete
          </Badge>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-muted-foreground">{data.overallProgress}%</span>
          </div>
          <Progress value={data.overallProgress} className="h-2" />
        </div>

        <div className="space-y-4">
          {data.subjects.map((subject, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">{subject.name}</h4>
                <Badge variant={getProgressColor(subject.progress) as any}>
                  {subject.progress}%
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>{subject.completed}/{subject.chapters} chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Test: {subject.nextTest}</span>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-sm text-muted-foreground mb-1">Current Topic:</p>
                <p className="text-sm font-medium">{subject.current}</p>
              </div>

              <Progress value={subject.progress} className="h-1" />
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-accent" />
            <h4 className="text-sm font-medium">Learning Goals</h4>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Complete Math Chapter 4 by end of week</li>
            <li>• Physics lab report submission due Monday</li>
            <li>• Chemistry test preparation - 3 more topics</li>
          </ul>
        </div>
      </Card>
    );
  }

  if (role === "teacher") {
    const data = syllabusData.teacher;
    
    return (
      <Card className={`p-6 ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Syllabus Tracking - My Classes</h3>
          </div>
          <Button variant="outline" size="sm">
            Update Progress
          </Button>
        </div>

        <div className="space-y-6">
          {data.classes.map((classData, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">{classData.name}</h4>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{classData.students} students</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{classData.avgProgress}%</div>
                  <div className="text-xs text-muted-foreground">Avg Progress</div>
                </div>
                <div className="text-center p-3 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">{classData.onTrack}</div>
                  <div className="text-xs text-muted-foreground">On Track</div>
                </div>
                <div className="text-center p-3 bg-warning/10 rounded-lg">
                  <div className="text-2xl font-bold text-warning">{classData.behind}</div>
                  <div className="text-xs text-muted-foreground">Behind</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Chapter Progress: {classData.completed}/{classData.chapters}</span>
                <Badge variant="outline">{classData.current}</Badge>
              </div>
              
              <Progress value={classData.avgProgress} className="h-2 mb-3" />

              {classData.behind > 0 && (
                <div className="flex items-center gap-2 p-2 bg-warning/10 rounded-md">
                  <AlertCircle className="w-4 h-4 text-warning" />
                  <span className="text-sm text-warning">
                    {classData.behind} students need additional support
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
          <Button variant="default" className="w-full">
            <Award className="w-4 h-4 mr-2" />
            Student Reports
          </Button>
        </div>
      </Card>
    );
  }

  return null;
};