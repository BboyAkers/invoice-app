import { Outlet } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      <Navbar />
      <main className="flex-1 w-full pt-[72px] md:pt-[80px] lg:pt-0 lg:pl-[103px]">
        <div className="max-w-[730px] mx-auto px-6 md:px-12 lg:px-0 py-8 md:py-14">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

