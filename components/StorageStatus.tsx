"use client"

import * as React from "react"
import { Pie, PieChart, Label } from "recharts"
import { ArrowUpRight, HardDrive } from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardAction,
} from "@/components/ui/card"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { type: "Videos", storage: 120.3, fill: "#3B82F6" },
    { type: "Apps", storage: 80.5, fill: "#F59E0B" },
    { type: "Music", storage: 53.2, fill: "#10B981" },
]

const chartConfig = {
    storage: {
        label: "Storage",
    },
    Videos: {
        label: "Videos",
        color: "hsl(var(--chart-1))",
    },
    Apps: {
        label: "Apps",
        color: "hsl(var(--chart-2))",
    },
    Music: {
        label: "Music",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

function StorageStatus() {
    const totalStorage = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.storage, 0)
    }, [])

    const totalCapacity = 254 // GB
    const percentage = Math.round((totalStorage / totalCapacity) * 100)

    return (
        <Card className="card flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                        <HardDrive className="h-5 w-5 text-black" />
                    </div>
                    <CardTitle className="text-lg font-medium">Memory status</CardTitle>
                </div>
                <CardAction>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </CardAction>
            </CardHeader>
            <CardContent className="flex-1 w-75 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-62.5"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="storage"
                            nameKey="type"
                            innerRadius={70}
                            outerRadius={90}
                            strokeWidth={8}
                            paddingAngle={5}
                            cornerRadius={10}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {percentage}%
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground text-xs"
                                                >
                                                    {totalStorage.toLocaleString()} of {totalCapacity} GB used
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default StorageStatus
