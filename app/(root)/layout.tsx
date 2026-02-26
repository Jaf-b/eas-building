import type { Metadata } from "next";
import "../globals.css";
import {Toaster} from "@/components/ui/sonner";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import Dashboard from "@/components/Dashboard";
import Image from "next/image";
import logo from "@/public/foundation_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"

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
        <SidebarProvider>
            <Dashboard/>
            <main className="w-full">
                <div className="p-4 flex items-center gap-2 border-b">
                    <SidebarTrigger />
                    <Image src={logo} width={27} height={27} alt="logo" className="text-black" />
                    <h1 className="text-xl font-bold">EAS Building</h1>
                </div>
                {children}
                <Toaster position="top-right" />
            </main>
        </SidebarProvider>
    );
}
