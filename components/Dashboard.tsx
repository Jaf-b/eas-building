"use client"
import Sidenav from "@/components/sidenav";
import {archivisteDashboardMenu} from "@/constant";


function Dashboard() {
    return (
        <Sidenav items={archivisteDashboardMenu}/>
    )
}

export default Dashboard
