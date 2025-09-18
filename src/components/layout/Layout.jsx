import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../SidebarMenu"  
import { FiMenu } from "react-icons/fi"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 w-full">
          {/* Top bar trigger */}
          <div className="px-5 py-4">
            <SidebarTrigger>
              <FiMenu className="w-6 h-6 cursor-pointer" />
            </SidebarTrigger>

            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
