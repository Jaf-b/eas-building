import React from 'react'
import Image from "next/image";
import { Search, Info, Settings, Mail, Bell, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import logo from "@/public/foundation_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
function NavBar() {
    return (
        <div className="p-4 fixed flex items-center gap-2 border-b bg-muted w-full z-50">
        <Image src={logo} width={27} height={27} alt="logo" className="text-black" />
        <h1 className="text-xl font-bold">EAS Building</h1>
</div>
    )
}

export default NavBar
