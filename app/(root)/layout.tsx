import type { Metadata } from "next";
import "../globals.css";
import {Toaster} from "@/components/ui/sonner";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import Dashboard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import logo from "@/public/foundation_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
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
                        <Toaster position="top-right" />
                </main>
            </SidebarProvider>

        </>
    );
}
