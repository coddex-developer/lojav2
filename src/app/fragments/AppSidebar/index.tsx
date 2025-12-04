import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
    Calendar,
    Home,
    Inbox,
    Search,
    Settings,
    ShoppingBasket
} from "lucide-react"

import Link from "next/link"

// Menu items
const menuItems = [
    { title: "Home", url: "/", icon: Home },
    { title: "Carrinho", url: "/carrinho", icon: ShoppingBasket },
    { title: "Inbox", url: "#", icon: Inbox },
    { title: "Calendário", url: "#", icon: Calendar },
    { title: "Buscar", url: "#", icon: Search },
    { title: "Configurações", url: "#", icon: Settings },
]

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Estação Clima</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
