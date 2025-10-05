"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, Search } from "lucide-react"
import { useState } from "react"

// Mock data for statistics
const mockStats = [
  {
    employee: "Anna",
    date: "04/10/2025",
    stt: "HD-20251004-0006",
    revenue: "45.0 €",
    cost: "45.0 €",
    orders: "138.0 €",
    revenue2: "70.0 €"
  },
  {
    employee: "Céline",
    date: "04/10/2025",
    stt: "HD-20251004-0004",
    revenue: "45.0 €",
    cost: "45.0 €",
    orders: "14.7 €",
    revenue2: "14.7 €"
  },
  {
    employee: "David",
    date: "04/10/2025",
    stt: "HD-20251004-0002",
    revenue: "43.0 €",
    cost: "43.0 €",
    orders: "138.0 €",
    revenue2: "70.0 €"
  },
  {
    employee: "Julia",
    date: "04/10/2025",
    stt: "HD-20251004-0000",
    revenue: "43.0 €",
    cost: "43.0 €",
    orders: "138.0 €",
    revenue2: "101.0 €"
  },
  {
    employee: "Kylie",
    date: "04/10/2025",
    stt: "HD-20251004-0001",
    revenue: "33.0 €",
    cost: "30.0 €",
    orders: "138.0 €",
    revenue2: "40.0 €"
  }
]

export default function StatisticsPage() {
  const [dateFrom, setDateFrom] = useState("04/10/2025")
  const [dateTo, setDateTo] = useState("04/10/2025")
  const [selectedEmployee, setSelectedEmployee] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-cyan-500 text-white p-4 rounded-lg">
        <h1 className="text-xl font-bold">THỐNG KÊ</h1>
      </div>

      {/* Filter Section */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">Check 04/10/2025 - 04/10/2025</label>
              <div className="text-sm text-gray-600">Tùy chọn với 1 Tùy chọn đã chọn</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Từ ngày</label>
              <div className="text-sm text-gray-600">Check với 1 tùy chọn đã chọn</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Đến ngày</label>
              <div className="text-sm text-gray-600">Ngày PTT</div>
            </div>
            
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Tìm kiếm
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tên nhân viên</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Ngày đáng</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">STT</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Mã Báo giá</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Giá</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Chuẩn</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tổng điểm</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tổng thanh</th>
                </tr>
              </thead>
              <tbody>
                {mockStats.map((stat, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">{stat.employee}</td>
                    <td className="px-4 py-3 text-sm">{stat.date}</td>
                    <td className="px-4 py-3 text-sm">1</td>
                    <td className="px-4 py-3 text-sm text-blue-600">{stat.stt}</td>
                    <td className="px-4 py-3 text-sm">{stat.revenue}</td>
                    <td className="px-4 py-3 text-sm">{stat.cost}</td>
                    <td className="px-4 py-3 text-sm">{stat.orders}</td>
                    <td className="px-4 py-3 text-sm">{stat.revenue2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-600">Tổng cộng</div>
            <div className="text-lg font-bold">209.0 €</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-600">Giảm giá</div>
            <div className="text-lg font-bold">206.0 €</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-600">Chênh lệch</div>
            <div className="text-lg font-bold">690.0 €</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-600">Tổng điểm</div>
            <div className="text-lg font-bold">369.4 €</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-600">Tổng thanh</div>
            <div className="text-lg font-bold">365.4 €</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}