import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const websiteServices = [
    {
      feature: "Thời gian thực hiện",
      silver: "1 tuần",
      gold: "2 tuần",
      platinum: "4 tuần",
      details: "Thiết kế website chuyên nghiệp"
    },
    {
      feature: "Hosting và tên miền website",
      silver: true,
      gold: true,
      platinum: true,
      details: "Bao gồm hosting và domain"
    },
    {
      feature: "Viết bài giới thiệu và thiết kế web theo yêu cầu hoặc theo bộ nhận diện thương hiệu",
      silver: "$99 MỘT LẦN\nnội dung có sẵn",
      gold: "$199 MỘT LẦN\nnội dung tùy chỉnh theo yêu cầu",
      platinum: "$299 MỘT LẦN\nnội dung tùy chỉnh theo yêu cầu + nội dung ĐỘC QUYỀN",
      hasPinkBg: true
    },
    {
      feature: "Quản trị và duy trì website",
      silver: true,
      gold: true,
      platinum: true,
      details: "Dịch vụ quản trị website"
    },
    {
      feature: "Liến kết các good review từ các mạng xã hội",
      silver: true,
      gold: true,
      platinum: true,
      details: "Quảng bá trực tuyến"
    },
    {
      feature: "Tạo menu trực tuyến qua QR code",
      silver: false,
      gold: true,
      platinum: true,
      details: "Tạo nội dung chuyên nghiệp"
    },
    {
      feature: "Thông báo lịch hẹn về Email / SMS",
      silver: false,
      gold: false,
      platinum: true,
      details: "Website thương mại điện tử"
    },
    {
      feature: "Tạo lịch hẹn / order và thanh toán trực tuyến",
      silver: false,
      gold: false,
      platinum: true,
      details: "Thiết kế logo và email marketing"
    },
    {
      feature: "Tạo, Bán, và Quản lý Gift Card Online",
      silver: false,
      gold: false,
      platinum: true,
      details: "Chiến dịch quảng cáo chuyên nghiệp"
    },
  ]

  const digitalServices = [
    {
      feature: "MIỄN PHÍ tạo tài khoản social media chuyên nghiệp (nếu cần)",
      silver: true,
      gold: true,
      platinum: true,
      details: "Tạo tài khoản miễn phí"
    },
    {
      feature: "Hỗ trợ cập nhật thông tin tiệm theo yêu cầu (hình ảnh, dịch vụ, giá cả, thời gian mở cửa, số phone, email,...) không giới hạn",
      silver: true,
      gold: true,
      platinum: true,
      details: "Cập nhật thông tin không giới hạn"
    },
    {
      feature: "Quản lý tài khoản Facebook, Instagram, Google & Yelp chuyên nghiệp với những nội dung thu hút",
      silver: "32 bài/tháng",
      gold: "48 bài/tháng",
      platinum: "60 bài/tháng",
      details: "Quản lý đa nền tảng"
    },
    {
      feature: "Cam kết tiếp cận lượng khách hàng tiềm năng qua Facebook",
      silver: "1,000 người",
      gold: "3,000 người",
      platinum: "5,000 người",
      details: "Tiếp cận khách hàng tiềm năng"
    },
    {
      feature: "Theo dõi và trả lời những đánh giá từ thời điểm bắt đầu dịch vụ marketing trên Google Business để giữ thứ hạng đánh giá cao cho doanh nghiệp.",
      silver: true,
      gold: true,
      platinum: true,
      details: "Quản lý đánh giá Google Business"
    },
    {
      feature: "Bảo vệ tài khoản Google khỏi những đánh giá giá từ đối thủ",
      silver: false,
      gold: true,
      platinum: true,
      details: "Bảo vệ tài khoản Google"
    },
    {
      feature: "Tạo video quảng cáo mỗi tháng",
      silver: false,
      gold: "1 video",
      platinum: "2 video",
      details: "Video quảng cáo hàng tháng"
    },
    {
      feature: "Báo cáo hoạt động hàng tháng",
      silver: true,
      gold: true,
      platinum: true,
      details: "Báo cáo định kỳ"
    },
    {
      feature: "Vận hành bởi đội ngũ lâu năm, chuyên nghiệp",
      silver: true,
      gold: true,
      platinum: true,
      details: "Đội ngũ chuyên nghiệp"
    }
  ]

  const seoWebServices = [
    {
      feature: "Viết nội dung, thiết kế hình ảnh thu hút, chuẩn SEO đăng tải lên website",
      tier1: true,
      tier2: true,
      tier3: true,
      details: "Content SEO cho website"
    },
    {
      feature: "Từ khóa lên top: Nails Salon near me, Nail salon + zip code, Nails salon + tên thành phố, Nails salon + tên con đường/ khu vực...",
      tier1: "1-2 từ khóa lên top 10 trang nhất Google",
      tier2: "1-3 từ khóa lên top 5 trang nhất Google",
      tier3: "1-3 từ khóa lên top 3 trang nhất Google",
      details: "Tối ưu từ khóa"
    }
  ]

  const seoMapServices = [
    {
      feature: "Đảm bảo nội dung Google Page tiệm, hấp dẫn khách hàng tới tiệm",
      tier3: true,
      details: "Tối ưu Google Business Profile"
    },
    {
      feature: "Từ khóa lên top: Nail Salon /Manicure /Pedicure near me, Nail salon /Manicure /Pedicure + zip code, Nail salon /Manicure /Pedicure + tên thành phố",
      tier3: "1-3 từ khóa lên top 3 trang nhất Google MAP",
      details: "Tối ưu từ khóa Google Maps"
    }
  ]

  const additionalServices = [
    {
      service: "Thiết kế Logo",
      price: "$100 - $200",
      description: "Thiết kế logo chuyên nghiệp cho thương hiệu"
    },
    {
      service: "Video quảng cáo (bao marketing)",
      price: "$500 - $1,000",
      description: "Sản xuất video quảng cáo chất lượng cao"
    },
    {
      service: "Dịch vụ bán Logo",
      price: "Thỏa thuận",
      description: "Dịch vụ thiết kế logo theo yêu cầu"
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFEEEA' }}>
      <Header />

      {/* Hero Section */}
      <section className="py-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center mb-6">
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold" style={{ color: '#273F4F' }}>
              PRICING TABLE FOR
              <span className="block mt-2" style={{ color: '#FE7743' }}>NAIL SALON</span>
            </h1>
            <div className="flex justify-center mt-6">
              <div 
                className="w-24 h-1 rounded-full"
                style={{ backgroundColor: '#FE7743' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Design Services */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl p-6" style={{ backgroundColor: '#A3DC9A' }}>
            <div className="bg-white rounded-xl overflow-hidden" style={{ backgroundColor: '#A3DC9A' }}>
            {/* Header */}
            <div className="text-white p-6" style={{ backgroundColor: '#A3DC9A' }}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold" style={{ color: '#273F4F' }}>WEBSITE DESIGN</h2>
                <div 
                  className="text-sm font-medium px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: '#273F4F' }}
                >
                  DỊCH VỤ MARKETING HỖ TRỢ 1 BƯỚC
                </div>
              </div>
            </div>

            {/* Pricing Headers */}
            <div className="grid grid-cols-4 gap-2 p-2 rounded-lg" style={{ backgroundColor: '#EFEEEA' }}>
              <div className="p-4"></div>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="font-bold text-lg">SILVER</div>
                <div className="text-3xl font-bold mt-2">$59</div>
                <div className="text-sm mt-1">mỗi tháng</div>
              </div>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <div className="font-bold text-lg">GOLD</div>
                <div className="text-3xl font-bold mt-2">$69</div>
                <div className="text-sm mt-1">mỗi tháng</div>
              </div>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <div className="font-bold text-lg">PLATINUM</div>
                <div className="text-3xl font-bold mt-2">$79</div>
                <div className="text-sm mt-1">mỗi tháng</div>
              </div>
            </div>

            {/* Features */}
            {websiteServices.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b transition-colors duration-150 hover:bg-[#F1F5F9]"
                style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: 'rgba(39,63,79,0.08)' }}
              >
                <div className="p-4 text-sm font-medium" style={{ color: '#273F4F' }}>{service.feature}</div>
                <div className="p-4 text-center">
                  {typeof service.silver === 'boolean' ? (
                    service.silver ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-sm font-medium" style={{ color: '#273F4F' }}>{service.silver}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {typeof service.gold === 'boolean' ? (
                    service.gold ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-sm font-medium" style={{ color: '#273F4F' }}>{service.gold}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {typeof service.platinum === 'boolean' ? (
                    service.platinum ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-sm font-medium" style={{ color: '#273F4F' }}>{service.platinum}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="p-6" style={{ backgroundColor: '#EFEEEA' }}>
              <div style={{ color: '#273F4F' }}>
                <div className="font-bold mb-3 text-lg" style={{ color: '#FE7743' }}>Tiện ích thêm: QR code thu thập đánh giá $99/năm</div>
                <div className="font-bold mb-3 text-lg" style={{ color: '#FE7743' }}>Đặc biệt</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#FE7743' }}></div>
                    $299 chỉ riêng website + $99/năm bảo trì
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#FE7743' }}></div>
                    Giảm $99 phí cài đặt & giảm 50% gói website khi có merchant account
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#FE7743' }}></div>
                    $99/năm + giảm $99 phí cài đặt khi combo website + merchant account + digital marketing + SEO
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#FE7743' }}></div>
                    Để được thiết kế web miễn phí, cần đăng ký gói tháng Silver hoặc cao hơn.
                  </li>
                </ul>
              </div>
            </div>
            </div>{/* end inner card */}
          </div>
        </div>
      </section>

      {/* Digital Package */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl p-6" style={{ backgroundColor: '#C6E7FF' }}>
            <div className="bg-white rounded-xl overflow-hidden border-gray-100" style={{ backgroundColor: '#C6E7FF' }}>
            {/* Header */}
            <div className="text-white p-6" style={{ backgroundColor: '#C6E7FF' }}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold" style={{ color: '#273F4F' }}>DIGITAL PACKAGE</h2>
                <div 
                  className="text-sm font-medium px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: '#273F4F' }}
                >
                  DỊCH VỤ MARKETING HỖ TRỢ 1 BƯỚC
                </div>
              </div>
            </div>

            {/* Pricing Headers */}
            <div className="grid grid-cols-4 gap-2 p-2 rounded-lg" style={{ backgroundColor: '#EFEEEA' }}>
              <div className="p-4"></div>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="font-bold text-lg">EAGLE</div>
                <div className="text-3xl font-bold mt-2">$119</div>
                <div className="text-sm mt-1">mỗi tháng</div>
              </div>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <div className="font-bold text-lg">CLOUD</div>
                <div className="text-3xl font-bold mt-2">$199</div>
                <div className="text-sm mt-1">mỗi tháng</div>
              </div>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <div className="font-bold text-lg">STAR</div>
                <div className="text-3xl font-bold mt-2">$299</div>
                <div className="text-sm mt-1">mỗi tháng</div>
              </div>
            </div>

            {/* Features */}
            {digitalServices.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b transition-colors duration-150 hover:bg-[#F1F5F9]"
                style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: 'rgba(39,63,79,0.08)' }}
              >
                <div className="p-4 text-sm font-medium" style={{ color: '#273F4F' }}>{service.feature}</div>
                <div className="p-4 text-center">
                  {typeof service.silver === 'boolean' ? (
                    service.silver ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-sm font-medium" style={{ color: '#273F4F' }}>{service.silver}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {typeof service.gold === 'boolean' ? (
                    service.gold ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-sm font-medium" style={{ color: '#273F4F' }}>{service.gold}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {typeof service.platinum === 'boolean' ? (
                    service.platinum ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-sm font-medium" style={{ color: '#273F4F' }}>{service.platinum}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Payment Info */}
            <div className="p-4" style={{ backgroundColor: '#EFEEEA' }}>
              <div style={{ color: '#273F4F' }}>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm h-full">
                    <div className="font-bold mb-2" style={{ color: '#FE7743' }}>**Lưu ý:**</div>
                    <div className="text-sm mb-3">Cần thanh toán tối thiểu 3 tháng ngay khi bắt đầu dịch vụ.</div>
                    <div className="font-semibold mb-2" style={{ color: '#273F4F' }}>Dịch vụ thanh toán một lần (tuỳ chọn):</div>
                    <div className="text-sm">$99 chỉ để tạo tài khoản mạng xã hội chuyên nghiệp (Facebook, Google & Instagram)</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm h-full">
                    <div className="font-bold mb-2" style={{ color: '#FE7743' }}>**Lưu ý:**</div>
                    <div className="text-sm">Gói FLAG không bao gồm quản lý Yelp. Gói yêu cầu thanh toán tối thiểu 12 tháng dịch vụ.</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm h-full">
                    <div className="font-bold mb-2" style={{ color: '#FE7743' }}>**Lưu ý:**</div>
                    <div className="text-sm">Để đạt hiệu quả tối đa và thu hút nhiều khách hàng mới, Mac USA Marketing khuyến nghị ngân sách quảng cáo hằng ngày từ $10 đến $15.</div>
                  </div>
                </div>
              </div>
            </div>
            </div>{/* end inner card */}
          </div>
        </div>
      </section>

      {/* SEO Web Services */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl p-6" style={{ backgroundColor: '#9B7EBD' }}>
            <div className="bg-white rounded-xl overflow-hidden border-gray-100" style={{ backgroundColor: '#9B7EBD' }}>
            {/* Header */}
            <div className="text-white p-6" style={{ backgroundColor: '#9B7EBD' }}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold" style={{ color: '#273F4F' }}>DỊCH VỤ SEO WEB</h2>
                <div 
                  className="text-sm font-medium px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: '#273F4F' }}
                >
                  1 ZIPCODE - 1 KHÁCH HÀNG! HỖ TRỢ 1 BƯỚC
                </div>
              </div>
            </div>

            {/* Pricing Headers */}
            <div className="grid grid-cols-4 gap-2 p-2 rounded-lg" style={{ backgroundColor: '#EFEEEA' }}>
              <div className="p-4"></div>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="font-bold text-lg">TOP 10</div>
                <div className="text-3xl font-bold mt-2">$79</div>
                <div className="text-sm mt-1">mỗi tháng</div>
              </div>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <div className="font-bold text-lg">TOP 5</div>
                <div className="text-3xl font-bold mt-2">$139</div>
                <div className="text-sm mt-1">mỗi tháng</div>
              </div>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <div className="font-bold text-lg">TOP 3</div>
                <div className="text-3xl font-bold mt-2">$299+</div>
                <div className="text-sm mt-1">mỗi tháng</div>
              </div>
            </div>

            {/* Features */}
            {seoWebServices.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b transition-colors duration-150 hover:bg-[#F1F5F9]"
                style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: 'rgba(39,63,79,0.08)' }}
              >
                <div className="p-4 text-sm font-medium" style={{ color: '#273F4F' }}>{service.feature}</div>
                <div className="p-4 text-center">
                  {typeof service.tier1 === 'boolean' ? (
                    service.tier1 ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-xs font-medium" style={{ color: '#273F4F' }}>{service.tier1}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {typeof service.tier2 === 'boolean' ? (
                    service.tier2 ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-xs font-medium" style={{ color: '#273F4F' }}>{service.tier2}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {typeof service.tier3 === 'boolean' ? (
                    service.tier3 ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-xs font-medium" style={{ color: '#273F4F' }}>{service.tier3}</span>
                  )}
                </div>
              </div>
            ))}
            </div>{/* end inner card */}
          </div>
        </div>
      </section>

      {/* SEO Map Services */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl p-6" style={{ backgroundColor: '#FF8A8A' }}>
            <div className="bg-white rounded-xl overflow-hidden border-gray-100" style={{ backgroundColor: '#FF8A8A' }}>
            {/* Header */}
            <div className="text-white p-6" style={{ backgroundColor: '#FF8A8A' }}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold" style={{ color: '#273F4F' }}>DỊCH VỤ SEO MAP</h2>
                <div 
                  className="text-sm font-medium px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: '#273F4F' }}
                >
                  1 ZIPCODE - 1 KHÁCH HÀNG! HỖ TRỢ 1 BƯỚC
                </div>
              </div>
            </div>

            {/* Single Pricing Header */}
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#EFEEEA' }}>
              <div className="text-white p-6 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <div className="text-3xl font-bold">TOP 3 $ 299</div>
                <div className="text-lg mt-2">mỗi tháng</div>
              </div>
            </div>

            {/* Features */}
            {seoMapServices.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-b transition-colors duration-150 hover:bg-[#F1F5F9]"
                style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: 'rgba(39,63,79,0.08)' }}
              >
                <div className="p-4 text-sm font-medium" style={{ color: '#273F4F' }}>{service.feature}</div>
                <div className="p-4 text-center">
                  {typeof service.tier3 === 'boolean' ? (
                    service.tier3 ? <Check className="w-6 h-6 mx-auto" style={{ color: '#FE7743' }} /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                  ) : (
                    <span className="text-xs font-medium" style={{ color: '#273F4F' }}>{service.tier3}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Payment Note */}
            <div className="p-6" style={{ backgroundColor: '#EFEEEA' }}>
              <div style={{ color: '#273F4F' }}>
                <div className="text-sm">
                  <span className="font-bold" style={{ color: '#FE7743' }}>NOTE:</span> Thanh toán trước tối thiểu 6 tháng. Mac Marketing hoàn trả 100% chi phí nếu trong vòng 6 tháng không đạt cam kết.<br/>
                  <span className="font-bold" style={{ color: '#273F4F' }}>Sau 6 tháng, Mac Marketing gợi ý quy khách giữ service để giữ được thứ hạng với ưu đãi 20% off giá phía trên.</span>
                </div>
              </div>
            </div>
            </div>{/* end inner card */}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Contact Info */}
            <div className="p-8" style={{ backgroundColor: '#273F4F' }}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Liên hệ ngay để được tư vấn!</h3>
                <p className="text-lg text-white mb-6">Chúng tôi cam kết mang lại hiệu quả tốt nhất cho salon của bạn</p>
                <Button 
                  className="px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: '#FE7743', color: 'white' }}
                  asChild
                >
                  <Link href="/contact">Liên hệ ngay</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
