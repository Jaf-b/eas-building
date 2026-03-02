"use client"

import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { User } from "@/types"
import {
  User as UserIcon,
  Mail,
  Shield,
  Activity,
  Calendar,
  Fingerprint,
  Search,
  Filter,
  Plus,
  Download,
  Settings2,
  EyeOff,
  MoreHorizontal,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  Pencil,
  Trash2,
  Lock, AtSign
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const sampleUsers: User[] = [
  {
    id: "1",
    name: "Liam Smith",
    email: "smith@example.com",
    role: "Project Manager",
    isAcive: true,
    joinedDate: new Date("2024-06-24T21:23:00"),
    twoFactorEnabled: true,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam"
  },
  {
    id: "2",
    name: "Noah Anderson",
    email: "anderson@example.com",
    role: "UX Designer",
    isAcive: true,
    joinedDate: new Date("2023-03-15T14:45:00"),
    twoFactorEnabled: true,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah"
  },
  {
    id: "3",
    name: "Isabella Garcia",
    email: "garcia@example.com",
    role: "Front-End Developer",
    isAcive: false,
    joinedDate: new Date("2022-04-10T11:30:00"),
    twoFactorEnabled: false,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella"
  },
  {
    id: "4",
    name: "William Clark",
    email: "clark@example.com",
    role: "Product Owner",
    isAcive: true,
    joinedDate: new Date("2023-02-28T18:15:00"),
    twoFactorEnabled: true,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=William"
  },
  {
    id: "5",
    name: "James Hall",
    email: "hall@example.com",
    role: "Business Analyst",
    isAcive: true,
    joinedDate: new Date("2024-05-19T07:55:00"),
    twoFactorEnabled: true,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  }
]

export default function UserTable() {
  return (
    <div className="w-full space-y-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              User management <span className="text-sm font-normal text-muted-foreground ml-1">74</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              Add User
              <Plus className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 border-dashed">
              <Table className="mr-2 h-4 w-4" />
              Table
            </Button>
            <Button variant="ghost" size="sm" className="h-8">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Board
            </Button>
            <Button variant="ghost" size="sm" className="h-8">
              <List className="mr-2 h-4 w-4" />
              List
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm">
              <EyeOff className="h-4 w-4 mr-2" />
              Hide
            </Button>
            <Button variant="ghost" size="sm">
              <Settings2 className="h-4 w-4 mr-2" />
              Customize
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
           <Button variant="outline" size="sm" className="rounded-full h-8 text-xs">
             Role <ChevronDown className="ml-1 h-3 w-3" />
           </Button>
           <Button variant="outline" size="sm" className="rounded-full h-8 text-xs">
             <Fingerprint className="mr-1 h-3 w-3" />
             2F Auth <ChevronDown className="ml-1 h-3 w-3" />
           </Button>
           <Button variant="ghost" size="sm" className="text-muted-foreground h-8 text-xs">
             <Plus className="mr-1 h-3 w-3" />
             Add filter
           </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-md border ">
        <Table>
          <TableHeader>
            <TableRow >
              <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <UserIcon className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Full name</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <AtSign className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Email</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Role</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <Activity className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Status</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Joined date</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>2F Auth</span>
                </div>
              </TableHead>
              <TableHead>
                 <div className="flex items-center gap-2">
                  <Settings2 className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Actions</span>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                      <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span>{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground hover:underline cursor-pointer">
                  {user.email}
                </TableCell>
                <TableCell className="text-muted-foreground">{user.role}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${user.isAcive ? "bg-emerald-500" : "bg-red-500"}`} />
                    <span className="text-sm">{user.isAcive ? "Active" : "Inactive"}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {user.joinedDate.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}, {user.joinedDate.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  }).toLowerCase()}
                </TableCell>
                <TableCell>
                   <Badge
                     variant="outline"
                     className={cn(
                       "font-medium",
                       user.twoFactorEnabled
                         ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                         : "bg-amber-50 text-amber-700 border-amber-200"
                     )}
                   >
                     {user.twoFactorEnabled ? "Enabled" : "Disabled"}
                   </Badge>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                     <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                       <Pencil className="h-3.5 w-3.5 mr-1" />
                       Edit
                     </Button>
                     <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                       <Trash2 className="h-3.5 w-3.5 mr-1" />
                       Delete
                     </Button>
                   </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between px-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <Button variant="outline" size="sm" className="h-8 px-2 justify-between gap-2">
            15 <ChevronDown className="h-3 w-3" />
          </Button>
          <span className="ml-2">1-15 of 380 rows</span>
        </div>
        <div className="flex items-center gap-1">
           <Button variant="outline" size="icon" className="h-8 w-8">
             <ChevronLeft className="h-4 w-4" />
           </Button>
           <Button variant="outline" size="sm" className="h-8 w-8 bg-slate-100 text-foreground">1</Button>
           <Button variant="ghost" size="sm" className="h-8 w-8">2</Button>
           <span className="px-2">...</span>
           <Button variant="ghost" size="sm" className="h-8 w-8">5</Button>
           <Button variant="outline" size="icon" className="h-8 w-8">
             <ChevronRight className="h-4 w-4" />
           </Button>
        </div>
      </div>
    </div>
  )
}
