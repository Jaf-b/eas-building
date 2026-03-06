import {SidenavItem, User} from "@/types";
import { Folder, Users, LayoutDashboard, Calendar, CheckSquare, BarChart2, CreditCard, LifeBuoy, Users2, FileText, UserPlus, Share2 } from "lucide-react";

export const archivisteDashboardMenu: SidenavItem[] = [

    {
        title: "Projects",
        link: "/projects",
        icon: Folder,
    },
    {
        title: "listes des utilisateurs",
        link: "/users",
        icon: Users2,
    },
];

export const juristeDashboardMenu: SidenavItem[] = [
    {
        title: "Projects",
        link: "/",
        icon: Folder,
    },
];

export const ONE_WEEK = 60 * 60 * 24 * 7 ;