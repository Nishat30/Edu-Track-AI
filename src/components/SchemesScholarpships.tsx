import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Calendar, 
  Users, 
  FileText, 
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle 
} from "lucide-react";

const scholarships = [
  {
    id: 1,
    title: "Merit-Based Scholarship 2024",
    provider: "Ministry of Education",
    amount: "₹50,000",
    deadline: "2024-12-15",
    status: "eligible",
    requirements: ["GPA > 3.5", "Attendance > 85%"],
    description: "For academically excellent students"
  },
  {
    id: 2,
    title: "Digital India Scholarship",
    provider: "Government of India",
    amount: "₹25,000",
    deadline: "2024-11-30",
    status: "applied",
    requirements: ["STEM Field", "Family Income < 5L"],
    description: "Promoting digital literacy and innovation"
  },
  {
    id: 3,
    title: "Sports Excellence Award",
    provider: "State Sports Council",
    amount: "₹30,000",
    deadline: "2024-12-20",
    status: "pending",
    requirements: ["State Level Participation", "Academic Performance"],
    description: "Supporting sports talent development"
  }
];

const schemes = [
  {
    id: 1,
    title: "Mid-Day Meal Scheme",
    provider: "Department of Education",
    type: "Nutritional Support",
    status: "enrolled",
    description: "Free nutritious meals for students"
  },
  {
    id: 2,
    title: "Free Textbook Scheme",
    provider: "State Government",
    type: "Educational Material",
    status: "eligible",
    description: "Free textbooks for all subjects"
  },
  {
    id: 3,
    title: "Uniform Assistance",
    provider: "Education Department",
    type: "Material Support",
    status: "enrolled",
    description: "Free school uniforms and shoes"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "eligible": return "bg-blue-100 text-blue-800";
    case "applied": return "bg-yellow-100 text-yellow-800";
    case "enrolled": return "bg-green-100 text-green-800";
    case "pending": return "bg-orange-100 text-orange-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "eligible": return AlertCircle;
    case "applied": return Clock;
    case "enrolled": return CheckCircle;
    case "pending": return Clock;
    default: return FileText;
  }
};

export const SchemesScholarships = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Schemes & Scholarships</h2>
          <p className="text-muted-foreground">Discover opportunities and benefits available to you</p>
        </div>
        <Button variant="outline">
          <FileText className="w-4 h-4 mr-2" />
          View All Applications
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-sm text-muted-foreground">Available</p>
              <p className="text-xl font-bold">12</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm text-muted-foreground">Applied</p>
              <p className="text-xl font-bold">3</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-muted-foreground">Approved</p>
              <p className="text-xl font-bold">2</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-sm text-muted-foreground">Total Value</p>
              <p className="text-xl font-bold">₹75K</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Scholarships */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Available Scholarships</h3>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            3 Active
          </Badge>
        </div>
        
        <div className="space-y-4">
          {scholarships.map((scholarship) => {
            const StatusIcon = getStatusIcon(scholarship.status);
            return (
              <div key={scholarship.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold">{scholarship.title}</h4>
                      <Badge className={getStatusColor(scholarship.status)}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {scholarship.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {scholarship.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-green-600 font-medium">{scholarship.amount}</span>
                      <span className="text-muted-foreground">By {scholarship.provider}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Deadline: {scholarship.deadline}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Details
                    </Button>
                    {scholarship.status === "eligible" && (
                      <Button size="sm">Apply Now</Button>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {scholarship.requirements.map((req, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Government Schemes */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Government Schemes</h3>
          <Badge variant="outline" className="bg-green-100 text-green-800">
            2 Enrolled
          </Badge>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {schemes.map((scheme) => {
            const StatusIcon = getStatusIcon(scheme.status);
            return (
              <div key={scheme.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">{scheme.title}</h4>
                      <Badge className={getStatusColor(scheme.status)}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {scheme.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {scheme.description}
                    </p>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Type: </span>
                      <span className="font-medium">{scheme.type}</span>
                    </div>
                  </div>
                </div>
                
                {scheme.status === "eligible" && (
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    Enroll Now
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};