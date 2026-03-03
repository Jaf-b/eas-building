"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Calendar, Home, Inbox, LayoutDashboard, LogOut, Search, Settings} from "lucide-react"
import Link from "next/link";
import { SidenavItem } from "@/types";
import { usePathname } from "next/navigation";
import { logout } from "@/lib/actions/Auth.action";

export function Sidenav({items}:{items:SidenavItem[]}) {
    const pathname = usePathname();
    return (
        <Sidebar collapsible="icon"  className="mt-15 border bg-transparent">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="sidenav-group-label-container">
                        <h4 className="font-semibold">Vue ensemble</h4>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    className="sidenav-btn-item"
                                    isActive={pathname === "/"}
                                    asChild
                                >
                                    <Link href="/">
                                        <LayoutDashboard />
                                        <span>Tableau de bord</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className="sidenav-group-label-container">
                        <h4 className="font-semibold">Overview</h4>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        className="sidenav-btn-item"
                                        isActive={pathname === item.link}
                                        asChild
                                    >
                                        <Link href={item.link}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            className="sidenav-btn-item text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={async () => await logout()}
                        >
                            <LogOut />
                            <span>Déconnexion</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default Sidenav