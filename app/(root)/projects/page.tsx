import React from 'react'
import { StatsCards } from "@/components/StatsCards";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";
import { sampleProjects } from "@/constant/projects";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

function Projects() {
    return (

    <div className="flex flex-col gap-6 p-6 w-full max-w-[1400px] mx-auto  min-h-screen">
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
            <p className="text-sm text-muted-foreground">Track and organize all your team's projects in one place</p>
        </div>

        <StatsCards />

        <div className="flex flex-col gap-4">
            <FilterBar />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div className="flex items-center justify-between mt-6 px-1">
                <Pagination className="justify-start w-auto">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" className="text-xs h-8" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive className="h-8 w-8 text-xs">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" className="h-8 w-8 text-xs">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" className="h-8 w-8 text-xs">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis className="h-8 w-8" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" className="h-8 w-8 text-xs">7</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" className="text-xs h-8" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Showing 1 to 6 of 42 entries</span>
                    <Button variant="outline" size="sm" className="h-8 text-xs">Show All</Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects
