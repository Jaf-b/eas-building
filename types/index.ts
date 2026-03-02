// département : Direction général //
import { LucideIcon } from "lucide-react";

export interface SidenavItem {
    link: string;
    icon: LucideIcon;
    title: string;
}

export interface User {
    id: string;
    name: string;
    avatarUrl?: string;
    email: string;
    role: string;
    isAcive: boolean;
    joinedDate: Date;
    twoFactorEnabled: boolean;
}
export interface Project {
    id: string;
    title: string;
    status: 'In progress' | 'Completed' | 'Pending' | 'Overdue';
    pic: {
        name: string;
        avatarUrl: string;
    };
    department: string;
    role: string;
    completedTasks: number;
    totalTasks: number;
    deadline: string;
    progress: number;
    iconColor: string;
}
