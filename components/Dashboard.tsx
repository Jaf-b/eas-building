"use client"
import Sidenav from "@/components/sidenav";
import {archivisteDashboardMenu, juristeDashboardMenu} from "@/constant";
import {useGlobalContext} from "@/context/GlobalProvider";


function Dashboard() {
    const { user } = useGlobalContext();
    
    // Déterminer le menu en fonction du rôle de l'utilisateur
    // Par défaut on montre le menu archiviste si le rôle n'est pas reconnu ou non défini
    const menuItems = user?.role === "Juriste" ? juristeDashboardMenu : archivisteDashboardMenu;

    return (
        <Sidenav items={menuItems} />
    )
}

export default Dashboard
