import type { Metadata } from "next";
import "../globals.css";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import Dashboard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";
import React from "react";


export const metadata: Metadata = {
    title: "EAS Building",
    description: "System manager for EAS Building company ",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar/>
            <SidebarProvider >
                <Dashboard/>
                <main className="w-full  flex gap-2 h-[calc(100vh-61px)] mt-auto ">
                        <SidebarTrigger/>
                    <div className="flex flex-1 justify-center p-3">
                        {children}
                    </div>
                </main>
            </SidebarProvider>
        </>
    );
}
