import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, List, Grid2X2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-1">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search project..."
            className="pl-9 h-10 border-none bg-white shadow-sm"
          />
        </div>
        
        <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="h-10 w-[100px] border-none bg-white shadow-sm">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-10 w-[80px] border-none bg-white shadow-sm">
                <SelectValue placeholder="PIC" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-10 w-[120px] border-none bg-white shadow-sm">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="eng">Engineering</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-10 w-[100px] border-none bg-white shadow-sm">
                <SelectValue placeholder="Progress" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50">0-50%</SelectItem>
                <SelectItem value="51-100">51-100%</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-10 w-[100px] border-none bg-white shadow-sm">
                <SelectValue placeholder="Deadline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Tabs defaultValue="card" className="w-auto">
          <TabsList className="bg-white shadow-sm border-none h-10 p-1">
            <TabsTrigger value="list" className="h-8 data-[state=active]:bg-gray-100">
               <List size={16} className="mr-2" /> List
            </TabsTrigger>
            <TabsTrigger value="card" className="h-8 data-[state=active]:bg-gray-100">
               <Grid2X2 size={16} className="mr-2" /> Card
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Button className="bg-teal-500 hover:bg-teal-600 text-white h-10 px-4">
          <Plus size={18} className="mr-2" /> Add Project
        </Button>
      </div>
    </div>
  );
}
