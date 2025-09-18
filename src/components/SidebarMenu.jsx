import { Calendar, Inbox, Search, Settings, ChevronDown } from "lucide-react"
import { useState } from "react"
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

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

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: RiDashboardHorizontalFill, 
    children: [
      { title: "Admin Dashboard", url: "/admin" },
      { title: "Doctor Dashboard", url: "/doctor" },
      { title: "Patient Dashboard", url: "/patient" },
    ],
  },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

export function AppSidebar() {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <Sidebar className=" ">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg gap-2 flex items-center text-white">
            <img src="/icon.png" alt="icon" className="w-7 h-7" />
            MedixPro
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    onClick={() =>
                      item.children
                        ? setOpenMenu(openMenu === item.title ? null : item.title)
                        : null
                    }
                  >
                    <div className="flex items-center justify-between w-full cursor-pointer ">
                      <div className="flex items-center gap-2">
                        <item.icon className="text-2xl" /> 
                        <span>{item.title}</span>
                      </div>

                      {item.children && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            openMenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                  </SidebarMenuButton>

                  {/* Dropdown children */}
                  {item.children && openMenu === item.title && (
                    <div className="ml-6 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <a
                          key={child.title}
                          href={child.url}
                          className="text-sm text-gray-300 hover:text-white"
                        >
                          {child.title}
                        </a>
                      ))}
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
