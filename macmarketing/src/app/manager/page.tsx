"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react"
import { useState } from "react"

// Mock data for quotes
const mockQuotes = [
  {
    id: "HD-20251004-0006",
    date: "04/10/2025 18:15",
    price: "54.0 €",
    customer: "David",
    status: "PI"
  },
  {
    id: "HD-20251004-0004",
    date: "04/10/2025 16:06",
    price: "10.0 €",
    customer: "Kylie",
    status: "PI"
  },
  {
    id: "HD-20251004-0003",
    date: "04/10/2025 16:03",
    price: "35.0 €",
    customer: "Niko",
    status: "PI"
  },
  {
    id: "HD-20251004-0002",
    date: "04/10/2025 16:02",
    price: "45.0 €",
    customer: "Anna",
    status: "PI"
  },
  {
    id: "HD-20251004-0001",
    date: "04/10/2025 15:37",
    price: "31.2 €",
    customer: "Céline",
    status: "PI"
  }
]

export default function ManagerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  
  const filteredQuotes = mockQuotes.filter(quote =>
    quote.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.customer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-600">DS BÁO GIÁ HOÀN THÀNH</h1>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Thêm mới
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Nhập từ khóa tìm kiếm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="bg-purple-600 text-white hover:bg-purple-700">
          Tìm kiếm
        </Button>
      </div>

      {/* Table */}
      <Card className="w-full">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">STT</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Mã Báo giá</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Ngày tạo Báo giá</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Giá</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tên nhân viên</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Lẻ tán</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuotes.map((quote, index) => (
                  <tr key={quote.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{index + 1}</td>
                    <td className="px-4 py-3 text-sm text-blue-600 font-medium">
                      {quote.id}
                      <Edit className="inline w-3 h-3 ml-2 text-gray-400" />
                    </td>
                    <td className="px-4 py-3 text-sm">{quote.date}</td>
                    <td className="px-4 py-3 text-sm font-medium">{quote.price}</td>
                    <td className="px-4 py-3 text-sm text-blue-600">{quote.customer}</td>
                    <td className="px-4 py-3 text-sm">{quote.status}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-2 py-1">
                          Sửa
                        </Button>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs px-2 py-1">
                          Xem
                        </Button>
                        <Button size="sm" variant="destructive" className="text-xs px-2 py-1">
                          Xóa
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination could be added here */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Hiển thị {filteredQuotes.length} kết quả
        </p>
      </div>
    </div>
  )
}