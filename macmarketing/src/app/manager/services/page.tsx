"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Check } from "lucide-react"
import { useState } from "react"

// Mock data for services - extensive list based on the image
const mockServices = [
  { id: "AC-01", name: "Pose capsules en retrait sur les pieds à partir d'une semi-permanent", price: "25.0 €", status: "active" },
  { id: "AC-02", name: "Retrait et re-pose à partir d'une capsule en retrait - gel à partir semi", price: "30.0 €", status: "active" },
  { id: "AM-01", name: "Supplement Brou Taing", price: "10.0 €", status: "active" },
  { id: "AM-02", name: "Supplement En ou", price: "3.0 €", status: "active" },
  { id: "CA-01", name: "Supplement Car Parts", price: "5.0 €", status: "active" },
  { id: "CW", name: "Car Sponsored", price: "8.0 €", status: "active" },
  { id: "CH-01", name: "Décolle des pieds", price: "15.0 €", status: "active" },
  { id: "CH-02", name: "Eau-de-Cologne su les ongles capsule", price: "10.0 €", status: "active" },
  { id: "CH-04", name: "Biscuit qui l'huile (pairments)", price: "18.0 €", status: "active" },
  { id: "CM-01", name: "Décolle des pieds & those ou entre semi permanent", price: "15.0 €", status: "active" },
  { id: "EN", name: "En", price: "5.0 €", status: "active" },
  { id: "PP-12", name: "Supplement Protein Hands", price: "12.0 €", status: "active" },
  { id: "PA", name: "Supplément Protein Pedicure", price: "8.0 €", status: "active" },
  { id: "PC-01", name: "Vernis ou gel sur les ongles naturels en Pose semi permant", price: "25.0 €", status: "active" },
  { id: "SG-01", name: "Options: Supplément en gel-flasq sur les ongles naturels en Pose", price: "30.0 €", status: "active" },
  { id: "SP-01", name: "Supplément Forme mains sur ongles naturels en Pose semi permanent", price: "8.0 €", status: "active" },
  { id: "CP-01", name: "Décolle en retrait sur ongles naturels en Pose semi permant", price: "6.0 €", status: "active" },
  { id: "AP-17", name: "Peinture Diverses", price: "15.0 €", status: "active" },
  { id: "MP-1", name: "Mani Spa (Removal Cuticle & Filing Hand avec Supplément", price: "15.0 €", status: "active" },
  { id: "CT-01", name: "Hand Spa - Crema", price: "12.0 €", status: "active" },
  { id: "HL-01", name: "Hand Spa", price: "23.0 €", status: "active" },
  { id: "SL-01", name: "Dérangement en gel et gesso sur les ongles", price: "25.0 €", status: "active" },
  { id: "PC-15", name: "Pose de crèmes capsaules sur les pieds", price: "18.0 €", status: "active" },
  { id: "ST-18", name: "Pose de crème capsaules sur les pieds", price: "16.0 €", status: "active" },
  { id: "ST-19", name: "Pose de crème capsaules sur les pieds", price: "16.0 €", status: "active" },
  { id: "TC-01", name: "Traitement Rubcort En spende (pairments)", price: "12.0 €", status: "active" },
  { id: "TC-02", name: "Manticour blanche des ongles sup semi permanent ressemble", price: "60.0 €", status: "active" },
  { id: "TC-03", name: "Manticour blue des ongles sur semi permanent ressemble", price: "60.0 €", status: "active" },
  { id: "TC-16", name: "Cleaning", price: "15.0 €", status: "active" },
  { id: "TM-01", name: "Diverses parts 10 pieds", price: "15.0 €", status: "active" },
  { id: "TM-02", name: "Diverses parts & fond de vente massage", price: "50.0 €", status: "active" },
  { id: "TM-03", name: "Diverses parts à fond de vente massage", price: "50.0 €", status: "active" },
  { id: "TN-16", name: "Manticour (Optional)", price: "15.0 €", status: "active" },
  { id: "TN-15", name: "Manticour à fond de vente massage", price: "15.0 €", status: "active" },
  { id: "TN-24", name: "Diverse essai permanent & Manticour à fond semi permanent", price: "45.0 €", status: "active" }
]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  
  const filteredServices = mockServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-cyan-500 text-white p-4 rounded-lg">
        <h1 className="text-xl font-bold">QUẢN LÝ DỊCH VỤ</h1>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">Tên dịch vụ (*)</label>
              <Input placeholder="..." />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Mã (*)</label>
              <Input placeholder="..." />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Trạng thái</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Vô hiệu</option>
                <option>Hoạt động</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Lưu
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Services Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">STT</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tên dịch vụ</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Giá</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Trạng thái</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service, index) => (
                  <tr key={service.id} className="border-b hover:bg-gray-50 text-xs">
                    <td className="px-4 py-2 text-sm">{index + 1}</td>
                    <td className="px-4 py-2 text-sm">
                      <div className="font-medium text-blue-600">{service.id}</div>
                      <div className="text-gray-600 max-w-md">{service.name}</div>
                    </td>
                    <td className="px-4 py-2 text-sm font-medium">{service.price}</td>
                    <td className="px-4 py-2">
                      <Check className="w-4 h-4 text-green-500" />
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-2 py-1">
                          Sửa
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

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Hiển thị {filteredServices.length} dịch vụ
        </p>
      </div>
    </div>
  )
}