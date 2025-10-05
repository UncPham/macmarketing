"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Check } from "lucide-react"
import { useState } from "react"

// Mock data for payment methods
const mockPaymentMethods = [
  { id: 1, name: "CB", isActive: true },
  { id: 2, name: "TM", isActive: true },
  { id: 3, name: "PPT", isActive: true },
  { id: 4, name: "Wero T", isActive: true },
  { id: 5, name: "PPV", isActive: true },
  { id: 6, name: "Wero V", isActive: true },
  { id: 7, name: "Zef", isActive: true },
  { id: 8, name: "Cadeau physique", isActive: true },
  { id: 9, name: "Planify", isActive: true },
  { id: 10, name: "Chèque", isActive: true },
  { id: 11, name: "Cadeau online", isActive: true },
  { id: 12, name: "Wero C", isActive: true },
  { id: 13, name: "Chua rõ", isActive: true }
]

export default function PaymentMethodsPage() {
  const [newMethodName, setNewMethodName] = useState("")
  const [isActive, setIsActive] = useState(true)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 rounded-lg">
        <h1 className="text-xl font-bold">PHƯƠNG THỨC THANH TOÁN</h1>
      </div>

      {/* Add New Payment Method Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Thêm / Sửa</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Phương thức thanh toán (*)
              </label>
              <Input
                value={newMethodName}
                onChange={(e) => setNewMethodName(e.target.value)}
                placeholder="Nhập tên phương thức thanh toán"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Trạng thái</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={isActive ? "active" : "inactive"}
                onChange={(e) => setIsActive(e.target.value === "active")}
              >
                <option value="active">Vô hiệu</option>
                <option value="inactive">Không hoạt động</option>
              </select>
            </div>
          </div>
          
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Lưu
          </Button>
        </CardContent>
      </Card>

      {/* Payment Methods List */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">STT</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Kích hoạt</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {mockPaymentMethods.map((method, index) => (
                  <tr key={method.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{index + 1}</td>
                    <td className="px-4 py-3 text-sm font-medium">{method.name}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1">
                          Sửa
                        </Button>
                        <Button size="sm" variant="destructive" className="text-xs px-3 py-1">
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
    </div>
  )
}