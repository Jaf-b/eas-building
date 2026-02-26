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
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Link from "next/link";
import { SidenavItem } from "@/types";
import { usePathname } from "next/navigation";

export function Sidenav({items}:{items:SidenavItem[]}) {
    const pathname = usePathname();
    return (
        <Sidebar>
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
                                        <Home />
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
                {/* Footer content could go here, like user profile */}
            </SidebarFooter>
        </Sidebar>
    )
}

export default Sidenav
