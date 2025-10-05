"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Gift } from "lucide-react"
import { useState } from "react"

export default function VouchersPage() {
  const [voucherCode, setVoucherCode] = useState("")
  const [voucherType, setVoucherType] = useState("percent")
  const [discountValue, setDiscountValue] = useState("")
  const [usageLimit, setUsageLimit] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [status, setStatus] = useState("active")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 rounded-lg">
        <h1 className="text-xl font-bold">QUẢN LÝ VOUCHER</h1>
      </div>

      {/* Create/Edit Voucher Form */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Thêm / Sửa</CardTitle>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Thêm mới
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Mã Voucher (*)
              </label>
              <Input
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
                placeholder="Nhập mã voucher"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Loại Voucher</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={voucherType}
                onChange={(e) => setVoucherType(e.target.value)}
              >
                <option value="percent">Giảm giá trực tiếp</option>
                <option value="fixed">Giảm giá theo phần trăm</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Giá trị Voucher</label>
              <div className="relative">
                <Input
                  type="number"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(e.target.value)}
                  placeholder="0.0"
                  step="0.1"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  €
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Số lần sử dụng</label>
              <Input
                type="number"
                value={usageLimit}
                onChange={(e) => setUsageLimit(e.target.value)}
                placeholder="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Thời gian bắt đầu</label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Ngày bắt đầu"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Thời gian kết thúc</label>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="Ngày kết thúc"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Trạng thái</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="active">Vô hiệu</option>
                <option value="inactive">Không hoạt động</option>
              </select>
            </div>
          </div>
          
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Lưu voucher
          </Button>
        </CardContent>
      </Card>

      {/* Empty State - No vouchers yet */}
      <Card>
        <CardContent className="p-12 text-center">
          <div className="text-gray-400 mb-4">
            <Gift className="w-16 h-16 mx-auto mb-4 opacity-50" />
          </div>
          <h3 className="text-lg font-medium text-gray-500 mb-2">
            Chưa có voucher nào
          </h3>
          <p className="text-gray-400 mb-6">
            Tạo voucher đầu tiên để bắt đầu quản lý chương trình khuyến mãi
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Tạo voucher đầu tiên
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}