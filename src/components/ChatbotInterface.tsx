import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Globe, 
  BookOpen,
  DollarSign,
  Award 
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: string;
  language?: string;
}

export const ChatbotInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. I can help you with government schemes, scholarships, and educational queries. You can ask me in English, Hindi, or other regional languages.",
      sender: "bot",
      timestamp: "10:00 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "te", name: "తెలుగు" },
    { code: "ta", name: "தமிழ்" },
  ];

  const quickQueries = [
    { text: "Show me scholarship opportunities", icon: Award },
    { text: "Government education schemes", icon: BookOpen },
    { text: "Financial aid programs", icon: DollarSign },
    { text: "My attendance summary", icon: MessageSquare },
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(newMessage),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setNewMessage("");
  };

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("scholarship")) {
      return "Here are current scholarship opportunities:\n\n• National Merit Scholarship (Deadline: March 15)\n• State Education Grant (Monthly stipend: ₹2,000)\n• Minority Community Scholarship\n• Excellence in STEM Award\n\nWould you like detailed information about any specific scholarship?";
    }
    
    if (lowerQuery.includes("attendance")) {
      return "Your current attendance status:\n\n• Overall: 92% (Excellent)\n• This month: 95%\n• Days present: 23/25\n• Last RFID scan: Today 8:15 AM\n\nYou're maintaining excellent attendance! Keep it up!";
    }
    
    if (lowerQuery.includes("scheme") || lowerQuery.includes("government")) {
      return "Latest Government Education Schemes:\n\n• Digital India Education Initiative\n• Skill Development Program 2024\n• Free Textbook Distribution\n• Mid-day Meal Program\n• Teacher Training Enhancement\n\nThese schemes are actively running in your district. Would you like application details?";
    }
    
    return "I understand your query. Let me provide you with relevant information from our database. You can ask me about:\n\n• Government scholarships and schemes\n• Attendance tracking\n• Academic support resources\n• Application procedures\n\nHow can I assist you further?";
  };

  const handleQuickQuery = (query: string) => {
    setNewMessage(query);
  };

  return (
    <Card className="h-[550px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-gradient-card">
        <div className="flex items-center gap-3">
          <div className="w-10 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">AI Education Assistant</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs text-muted-foreground">Online & Ready to Help</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <select 
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="text-sm border rounded px-2 py-1 bg-background"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "bot" && (
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
            )}
            
            <div className={`max-w-[80%] ${message.sender === "user" ? "order-1" : ""}`}>
              <div
                className={`rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.content}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1 px-3">
                {message.timestamp}
              </p>
            </div>

            {message.sender === "user" && (
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-accent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Queries */}
      <div className="p-4 border-t bg-muted/20">
        <p className="text-xs text-muted-foreground mb-3">Quick queries:</p>
        <div className="grid grid-cols-2 gap-2">
          {quickQueries.map((query, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="justify-start text-xs h-8"
              onClick={() => handleQuickQuery(query.text)}
            >
              <query.icon className="w-3 h-3 mr-2" />
              {query.text}
            </Button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={`Type your message in ${languages.find(l => l.code === selectedLanguage)?.name}...`}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="sm">
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Ask about government schemes, scholarships, attendance, or academic support
        </p>
      </div>
    </Card>
  );
};