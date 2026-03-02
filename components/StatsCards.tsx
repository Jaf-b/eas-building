import { Card, CardContent } from "@/components/ui/card";
import { Box, CheckCircle2, CircleDashed, Clock, AlertTriangle } from "lucide-react";

const stats = [
  { label: "Total Projects", value: "42", icon: Box, color: "text-gray-600", bgColor: "bg-gray-100" },
  { label: "Completed Projects", value: "20", icon: CheckCircle2, color: "text-teal-600", bgColor: "bg-teal-100" },
  { label: "In Progress", value: "14", icon: CircleDashed, color: "text-orange-600", bgColor: "bg-orange-100" },
  { label: "Pending Projects", value: "8", icon: Clock, color: "text-purple-600", bgColor: "bg-purple-100" },
  { label: "Overdue", value: "2", icon: AlertTriangle, color: "text-red-600", bgColor: "bg-red-100" },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-none shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className={`p-2 rounded-lg ${stat.bgColor} ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
