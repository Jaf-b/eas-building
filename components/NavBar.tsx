"use client";

import React from 'react'
import Image from "next/image";
import { Search, Info, Settings, Mail, Bell, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import logo from "@/public/foundation_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
import { useGlobalContext } from "@/context/GlobalProvider";

function NavBar() {
    const { user } = useGlobalContext();

    return (
        <div className="p-4 fixed flex items-center justify-between border-b bg-muted w-full z-50">
            <div className="flex items-center gap-2">
                <Image src={logo} width={27} height={27} alt="logo" className="text-black" />
                <h1 className="text-xl font-bold">EAS Building</h1>
            </div>

            {user && (
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-sm font-semibold">{user.name}</span>
                        <span className="text-xs text-muted-foreground">{user.role}</span>
                    </div>
                    <Avatar>
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                </div>
            )}
        </div>
    )
}

export default NavBar
