"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  BarChart3, 
  FileText, 
  Settings, 
  CreditCard, 
  Gift, 
  Users,
  Menu,
  X,
  LogOut
} from "lucide-react"
import { useState } from "react"

const sidebarItems = [
  {
    title: "TẠO BÁO GIÁ",
    href: "/manager",
    icon: FileText,
    bgColor: "bg-green-500",
    textColor: "text-white"
  },
  {
    title: "Quản lý ca",
    href: "/manager/shifts",
    icon: Users,
    bgColor: "bg-purple-500",
    textColor: "text-white"
  },
  {
    title: "Quản lý nhân viên",
    href: "/manager/employees",
    icon: Users,
    bgColor: "bg-purple-500",
    textColor: "text-white"
  },
  {
    title: "Quản lý dịch vụ",
    href: "/manager/services",
    icon: Settings,
    bgColor: "bg-purple-500",
    textColor: "text-white"
  },
  {
    title: "Phân việc dịch vụ",
    href: "/manager/service-assignment",
    icon: Settings,
    bgColor: "bg-purple-500",
    textColor: "text-white"
  },
  {
    title: "Phương thức thanh toán",
    href: "/manager/payment-methods",
    icon: CreditCard,
    bgColor: "bg-cyan-500",
    textColor: "text-white"
  },
  {
    title: "Voucher - Mã giảm giá",
    href: "/manager/vouchers",
    icon: Gift,
    bgColor: "bg-purple-500",
    textColor: "text-white"
  },
  {
    title: "DS báo giá hoàn thành",
    href: "/manager/completed-quotes",
    icon: FileText,
    bgColor: "bg-cyan-500",
    textColor: "text-white"
  },
  {
    title: "DS báo giá chờ",
    href: "/manager/pending-quotes",
    icon: FileText,
    bgColor: "bg-purple-500",
    textColor: "text-white"
  },
  {
    title: "Check",
    href: "/manager/check",
    icon: Settings,
    bgColor: "bg-purple-500",
    textColor: "text-white"
  }
]

const statisticsItems = [
  {
    title: "Thống kê",
    href: "/manager/statistics",
    icon: BarChart3,
    bgColor: "bg-purple-500",
    textColor: "text-white"
  }
]

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">M</div>
          <div className="flex items-center space-x-2">
            <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">
              Ca đang mở: Pi
            </span>
            <Button variant="destructive" size="sm">
              Đóng ca
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src="/api/placeholder/24/24" alt="France" className="w-6 h-4" />
            <img src="/api/placeholder/24/24" alt="Vietnam" className="w-6 h-4" />
          </div>
          <Button variant="outline" size="sm">
            Tài khoản: Quán Tri
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive 
                        ? "bg-red-100 text-red-900 border-l-4 border-red-500" 
                        : `${item.bgColor} ${item.textColor} hover:opacity-90`
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.title}
                    {item.title === "DS báo giá chờ" && (
                      <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        2
                      </span>
                    )}
                  </Link>
                )
              })}
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  THỐNG KÊ
                </h3>
                <div className="mt-2 space-y-1">
                  {statisticsItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          isActive 
                            ? "bg-red-100 text-red-900 border-l-4 border-red-500" 
                            : `${item.bgColor} ${item.textColor} hover:opacity-90`
                        )}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="flex-1 lg:ml-0">
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}