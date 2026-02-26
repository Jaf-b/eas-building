import { SidenavItem } from "@/types";
import { Folder, Users } from "lucide-react";

export const archivisteDashboardMenu: SidenavItem[] = [
    {
        title: "projets",
        link: "/projects",
        icon: Folder,
    },
    {
        title: "liste des utilisateurs",
        link: "/users",
        icon: Users,
    },
]
export const juristeDashboardMenu: SidenavItem[] = [
    {
        title: "projets",
        link: "/projects",
        icon: Folder,
    },
]
