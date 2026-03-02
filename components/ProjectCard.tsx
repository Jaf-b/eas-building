import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { MoreHorizontal, FileText, Shield, User, Briefcase, Calendar } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'In progress': return 'bg-orange-100 text-orange-600 border-orange-200';
      case 'Completed': return 'bg-emerald-100 text-emerald-600 border-emerald-200';
      case 'Pending': return 'bg-purple-100 text-purple-600 border-purple-200';
      case 'Overdue': return 'bg-red-100 text-red-600 border-red-200';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getProgressColor = (status: Project['status']) => {
      switch (status) {
          case 'In progress': return 'bg-orange-400';
          case 'Completed': return 'bg-teal-400';
          case 'Pending': return 'bg-purple-400';
          case 'Overdue': return 'bg-red-400';
          default: return 'bg-blue-400';
      }
  }

  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
             <div className={`p-2 rounded-lg ${project.iconColor.split(' ')[1]} ${project.iconColor.split(' ')[0]}`}>
                <FileText size={18} />
             </div>
             <h3 className="font-semibold text-sm line-clamp-1">{project.title}</h3>
          </div>
          <Badge variant="outline" className={`font-normal text-[10px] px-2 py-0 h-5 ${getStatusColor(project.status)}`}>
            {project.status === 'In progress' && <span className="mr-1 h-1 w-1 rounded-full bg-orange-600" />}
            {project.status === 'Completed' && <span className="mr-1 h-1 w-1 rounded-full bg-emerald-600" />}
            {project.status}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-y-4 mb-6">
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">PIC:</p>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={project.pic.avatarUrl} alt={project.pic.name} />
                <AvatarFallback>{project.pic.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium">{project.pic.name}</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Department/Role:</p>
            <div className="flex flex-col">
              <span className="text-xs font-medium">{project.department}</span>
              <span className="text-[10px] text-muted-foreground">{project.role}</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Completed Tasks:</p>
            <p className="text-xs font-medium"><span className="text-muted-foreground">{project.completedTasks}</span> / {project.totalTasks}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Deadline:</p>
            <p className="text-xs font-medium">{project.deadline}</p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-muted-foreground">Progress:</span>
            <span className="font-medium text-orange-500">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-1.5" indicatorClassName={getProgressColor(project.status)} />
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 text-[11px] h-8 font-normal text-muted-foreground">
            View Details
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-[11px] h-8 font-normal text-muted-foreground">
            Edit Project Info
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
