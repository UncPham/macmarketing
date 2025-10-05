import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const comboServices = [
    {
      feature: "Được sử dụng web báo giá và thống kê cho tiệm nails của Vekmarketing",
      threeMonths: true,
      sixMonths: true,
      oneYear: true,
    },
    {
      feature: "Quản lý và bảo trì Website",
      threeMonths: false,
      sixMonths: true,
      oneYear: true,
    },
    {
      feature: "SEO Website, Seo Google Maps",
      threeMonths: "Top 1-10 Google Search",
      sixMonths: "Top 1-5 Google Search",
      oneYear: "Top 1-3 Google Search",
    },
    {
      feature: "Giảm thiểu Bad Review Google Map, Planity, Treatwell",
      threeMonths: true,
      sixMonths: true,
      oneYear: true,
    },
    {
      feature: "Hỗ trợ quản lý và trả lời đánh giá Google Map",
      threeMonths: true,
      sixMonths: true,
      oneYear: true,
    },
    {
      feature: "Quản lý tài khoản mạng xã hội Facebook, Instagram, Tiktok...",
      threeMonths: true,
      sixMonths: true,
      oneYear: true,
    },
    {
      feature: "Hỗ trợ tăng Likes và Follows các trang mạng xã hội",
      threeMonths: true,
      sixMonths: true,
      oneYear: true,
    },
    {
      feature: "Hỗ trợ chạy quảng cáo trên Facebook, Instagram, Tiktok",
      threeMonths: false,
      sixMonths: true,
      oneYear: true,
    },
    {
      feature: "Video trình chiếu trên màn hình TV",
      threeMonths: false,
      sixMonths: true,
      oneYear: true,
    },
    {
      feature: "Thiết kế: Logo, Gift card, Menu, Tờ rơi",
      threeMonths: false,
      sixMonths: true,
      oneYear: true,
    },
    {
      feature: "QR Code",
      threeMonths: false,
      sixMonths: "5 QR Code",
      oneYear: "10 QR Code",
    },
    {
      feature: "Tặng bảng QR Collecting Review Linkupnex",
      threeMonths: false,
      sixMonths: "5 QR Collecting Review",
      oneYear: "10 QR Collecting Review",
    },
    {
      feature: "Báo cáo hoạt động hàng tháng",
      threeMonths: true,
      sixMonths: true,
      oneYear: true,
    },
  ];

  const websiteServices = [
    {
      feature: "Thời gian thực hiện",
      silver: "2 tuần",
      gold: "4 tuần",
    },
    {
      feature: "Viết bài giới thiệu và thiết kế web theo yêu cầu hoặc theo bộ nhận diện thương hiệu",
      silver: true,
      gold: true,
    },
    {
      feature: "Quản trị và duy trì website",
      silver: true,
      gold: true,
    },
    {
      feature: "Set up Domain & Hosting 1 năm",
      silver: true,
      gold: true,
    },
    {
      feature: "Liên kết các good review từ các mạng xã hội",
      silver: true,
      gold: true,
    },
    {
      feature: "Tạo menu trực tuyến qua QR code",
      silver: true,
      gold: true,
    },
  ];


  const digitalServices = [
    {
      feature: "MIỄN PHÍ tạo tài khoản social media chuyên nghiệp (nếu cần)",
      basic: true,
      premium: true,
    },
    {
      feature: "Hỗ trợ cập nhật thông tin tiệm theo yêu cầu (hình ảnh, dịch vụ, giá cả, số phone, email,…) không giới hạn",
      basic: true,
      premium: true,
    },
    {
      feature: "Cam kết tiếp cận lượng khách hàng tiềm năng qua Google, Instagram",
      basic: "3,000 người",
      premium: "10,000 người",
    },
    {
      feature: "Quản lý tài khoản Facebook, Instagram, Google chuyên nghiệp với những nội dung thu hút",
      basic: "16 bài/tháng",
      premium: "48 bài/tháng",
    },
    {
      feature: "Buff Likes và Follows các trang mạng xã hội (nếu cần)",
      basic: true,
      premium: true,
    },
    {
      feature: "Tối ưu Google Map, Ads Google Top 1-3 Google Map",
      basic: true,
      premium: true,
    },
    {
      feature: "Giảm thiểu Bad Review Google Map, Planity, Treatwell",
      basic: true,
      premium: true,
    },
    {
      feature: "Báo cáo hoạt động hàng tháng",
      basic: true,
      premium: true,
    },
  ];

  const seoMapServices = [
    {
      feature: "Đảm bảo nội dung Google Page tiệm, hấp dẫn khách hàng tới tiệm",
      tier3: true,
    },
    {
      feature: "Từ khóa lên top: Nail Salon /Manicure /Pedicure near me, Nail salon /Manicure /Pedicure + zip code, Nail salon /Manicure /Pedicure + tên thành phố, giảm thiểu bad review",
      tier3: "Lên top 3 trang nhất Google MAP",
    },
    {
      feature: "Hỗ trợ trả lời Review Google Map	",
      tier3: true,
    }
  ]

  const additionalServices = [
    {
      service: "Video trình chiếu trên màn hình TV",
      price: "Chỉ từ 50€",
    },
    {
      service: "Thiết kế Logo, Gift card, Menu, Tờ rơi	",
      price: "Chỉ từ 20€",
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFEEEA' }}>
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/imgi_106_hand-holding-smartphone-social-media-concept-2048x1365.jpg')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              PRICING TABLE FOR
              <span className="block mt-2" style={{ color: '#FE7743' }}>NAIL SALON</span>
            </h1>
            <div className="flex justify-center mt-4 sm:mt-6">
              <div 
                className="w-16 sm:w-24 h-1 rounded-full"
                style={{ backgroundColor: '#FE7743' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Services */}
      <section className="py-4 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-2 sm:p-4" style={{ backgroundColor: '#F5A623' }}>
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden" style={{ backgroundColor: '#F5A623' }}>
            {/* Header */}
            <div className="text-white p-2 sm:p-4" style={{ backgroundColor: '#F5A623' }}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left" style={{ color: '#273F4F' }}>ALL IN ONE</h2>
                <div 
                  className="text-sm sm:text-base font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-white text-center"
                  style={{ backgroundColor: '#DAA520' }}
                >
                  1 ZIPCODE - 1 KHÁCH HÀNG
                </div>
              </div>
            </div>

            {/* Pricing Headers */}
            <div className="grid grid-cols-4 gap-1 sm:gap-2 p-1 sm:p-2 rounded-t-lg" style={{ backgroundColor: '#EFEEEA' }}>
              <div className="p-1 sm:p-2"></div>
              <div className="text-white p-2 sm:p-4 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="font-bold text-sm sm:text-base md:text-xl">3 THÁNG</div>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">499€</div>
              </div>
              <div className="text-white p-2 sm:p-4 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <div className="font-bold text-sm sm:text-base md:text-xl">6 THÁNG</div>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">799€</div>
              </div>
              <div className="text-white p-2 sm:p-4 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <div className="font-bold text-sm sm:text-base md:text-xl">1 NĂM</div>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">1.299€</div>
              </div>
            </div>

            {/* Features */}
            {comboServices.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b transition-colors duration-150 hover:bg-[#F1F5F9]"
                style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: 'rgba(39,63,79,0.08)' }}
              >
                <div className="p-1 sm:p-2 text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.feature}</div>
                <div className="p-1 sm:p-2 text-center">
                  {typeof service.threeMonths === 'boolean' ? (
                    service.threeMonths ? <Check className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#10b981' }} /> : <X className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#ef4444' }} />
                  ) : (
                    <span className="text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.threeMonths}</span>
                  )}
                </div>
                <div className="p-1 sm:p-2 text-center">
                  {typeof service.sixMonths === 'boolean' ? (
                    service.sixMonths ? <Check className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#10b981' }} /> : <X className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#ef4444' }} />
                  ) : (
                    <span className="text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.sixMonths}</span>
                  )}
                </div>
                <div className="p-1 sm:p-2 text-center">
                  {typeof service.oneYear === 'boolean' ? (
                    service.oneYear ? <Check className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#10b981' }} /> : <X className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#ef4444' }} />
                  ) : (
                    <span className="text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.oneYear}</span>
                  )}
                </div>
              </div>
            ))}
            {/* Additional Info */}
            <div className="p-3 sm:p-6" style={{ backgroundColor: '#EFEEEA' }}>
              <div style={{ color: '#273F4F' }}>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: '#FE7743' }}></div>
                    <span>Chi phí thiết kế Website từ 100€</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: '#FE7743' }}></div>
                    <span>Các loại QR Code: QR code đặt lịch hẹn (Booking QR), QR Code Menu, QR code mạng xã hội, QR code ưu đãi/khuyến mãi, QR code phản hồi/đánh giá</span>
                  </li>
                </ul>
                <div className="font-bold mt-2 mb-2 sm:mb-3 text-sm sm:text-lg" style={{ color: '#FE7743' }}>Lưu ý</div>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: '#FE7743' }}></div>
                    <span>Chi phí tháng chưa bao gồm phí chạy Ads trên Google, để tối đa hóa kết quả và thu hút lượng khách hàng mới đáng kể đến tiệm của bạn,
VekMarketing khuyến nghị ngân sách quảng cáo hàng ngày từ 5€.</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>{/* end inner card */}
          </div>
        </div>
      </section>

      {/* Website Design Services */}
      <section className="py-4 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-2 sm:p-4" style={{ backgroundColor: '#A3DC9A' }}>
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden" style={{ backgroundColor: '#A3DC9A' }}>
            {/* Header */}
            <div className="text-white p-2 sm:p-4" style={{ backgroundColor: '#A3DC9A' }}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left" style={{ color: '#273F4F' }}>WEBSITE DESIGN</h2>
                <div 
                  className="text-sm sm:text-base font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-white text-center"
                  style={{ backgroundColor: '#6B9F65' }}
                >
                  1 ZIPCODE - 1 KHÁCH HÀNG
                </div>
              </div>
            </div>

            {/* Pricing Headers */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 p-1 sm:p-2 rounded-t-lg" style={{ backgroundColor: '#EFEEEA' }}>
              <div className="p-1 sm:p-2"></div>
              <div className="text-white p-2 sm:p-4 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="font-bold text-sm sm:text-base md:text-xl">SILVER</div>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">150€</div>
                {/* <div className="text-sm sm:text-lg mt-1 sm:mt-2">mỗi tháng</div> */}
              </div>
              <div className="text-white p-2 sm:p-4 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <div className="font-bold text-sm sm:text-base md:text-xl">GOLD</div>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">300€</div>
                {/* <div className="text-sm sm:text-lg mt-1 sm:mt-2">mỗi tháng</div> */}
              </div>
            </div>

            {/* Features */}
            {websiteServices.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-3 border-b transition-colors duration-150 hover:bg-[#F1F5F9]"
                style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: 'rgba(39,63,79,0.08)' }}
              >
                <div className="p-1 sm:p-2 text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.feature}</div>
                <div className="p-1 sm:p-2 text-center">
                  {typeof service.silver === 'boolean' ? (
                    service.silver ? <Check className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#10b981' }} /> : <X className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#ef4444' }} />
                  ) : (
                    <span className="text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.silver}</span>
                  )}
                </div>
                <div className="p-1 sm:p-2 text-center">
                  {typeof service.gold === 'boolean' ? (
                    service.gold ? <Check className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#10b981' }} /> : <X className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#ef4444' }} />
                  ) : (
                    <span className="text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.gold}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="p-3 sm:p-6" style={{ backgroundColor: '#EFEEEA' }}>
              <div style={{ color: '#273F4F' }}>
                <div className="font-bold mb-2 sm:mb-3 text-sm sm:text-lg" style={{ color: '#FE7743' }}>Lưu ý</div>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {/* <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: '#FE7743' }}></div>
                    <span>Website: từ 100€</span>
                  </li> */}
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: '#FE7743' }}></div>
                    <span>Hosting: từ 10€/ tháng</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>{/* end inner card */}
          </div>
        </div>
      </section>

      {/* Digital Package */}
      <section className="py-4 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-2 sm:p-4" style={{ backgroundColor: '#C6E7FF' }}>
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden border-gray-100" style={{ backgroundColor: '#C6E7FF' }}>
            {/* Header */}
            <div className="text-white p-2 sm:p-4" style={{ backgroundColor: '#C6E7FF' }}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left" style={{ color: '#273F4F' }}>DIGITAL PACKAGE</h2>
                <div 
                  className="text-sm sm:text-base font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-white text-center"
                  style={{ backgroundColor: '#7BB5D9' }}
                >
                  1 ZIPCODE - 1 KHÁCH HÀNG
                </div>
              </div>
            </div>

            {/* Pricing Headers */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 p-1 sm:p-2 rounded-t-lg" style={{ backgroundColor: '#EFEEEA' }}>
              <div className="p-1 sm:p-2"></div>
              <div className="text-white p-2 sm:p-4 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="font-bold text-sm sm:text-base md:text-xl">BASIC</div>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">149€</div>
                <div className="text-base sm:text-xl mt-1 sm:mt-2">mỗi tháng</div>
              </div>
              <div className="text-white p-2 sm:p-4 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <div className="font-bold text-sm sm:text-base md:text-xl">PREMIUM</div>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">249€</div>
                <div className="text-base sm:text-xl mt-1 sm:mt-2">mỗi tháng</div>
              </div>
            </div>

            {/* Features */}
            {digitalServices.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-3 border-b transition-colors duration-150 hover:bg-[#F1F5F9]"
                style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: 'rgba(39,63,79,0.08)' }}
              >
                <div className="p-1 sm:p-2 text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.feature}</div>
                <div className="p-1 sm:p-2 text-center">
                  {typeof service.basic === 'boolean' ? (
                    service.basic ? <Check className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#10b981' }} /> : <X className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#ef4444' }} />
                  ) : (
                    <span className="text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.basic}</span>
                  )}
                </div>
                <div className="p-1 sm:p-2 text-center">
                  {typeof service.premium === 'boolean' ? (
                    service.premium ? <Check className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#10b981' }} /> : <X className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#ef4444' }} />
                  ) : (
                    <span className="text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.premium}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Payment Info */}
            <div className="p-3 sm:p-6" style={{ backgroundColor: '#EFEEEA' }}>
              <div style={{ color: '#273F4F' }}>
                <div className="font-bold mb-2 sm:mb-3 text-sm sm:text-lg" style={{ color: '#FE7743' }}>Lưu ý</div>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: '#FE7743' }}></div>
                    <span>Chi phí tháng chưa bao gồm phí chạy Ads trên Google, để tối đa hóa kết quả và thu hút lượng khách hàng 
mới đáng kể đến tiệm của bạn,VekMarketing khuyến nghị ngân sách quảng cáo hàng ngày từ 10 đến 15€.</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>{/* end inner card */}
          </div>
        </div>
      </section>

      {/* SEO Map Services */}
      <section className="py-4 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-2 sm:p-4" style={{ backgroundColor: '#FF8A8A' }}>
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden border-gray-100" style={{ backgroundColor: '#FF8A8A' }}>
            {/* Header */}
            <div className="text-white p-2 sm:p-4" style={{ backgroundColor: '#FF8A8A' }}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left" style={{ color: '#273F4F' }}>DỊCH VỤ SEO MAP</h2>
                <div 
                  className="text-sm sm:text-base font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-white text-center"
                  style={{ backgroundColor: '#CC5C5C' }}
                >
                  1 ZIPCODE - 1 KHÁCH HÀNG! HỖ TRỢ 1 BƯỚC
                </div>
              </div>
            </div>

            {/* Pricing Headers */}
            <div className="grid grid-cols-2 gap-1 sm:gap-2 p-1 sm:p-2 rounded-t-lg" style={{ backgroundColor: '#EFEEEA' }}>
              <div className="p-1 sm:p-2"></div>
              <div className="text-white p-2 sm:p-4 text-center rounded-lg" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <div className="font-bold text-sm sm:text-base md:text-xl">TOP 3</div>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">299€</div>
                <div className="text-base sm:text-xl mt-1 sm:mt-2">mỗi tháng</div>
              </div>
            </div>

            {/* Features */}
            {seoMapServices.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-b transition-colors duration-150 hover:bg-[#F1F5F9]"
                style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: 'rgba(39,63,79,0.08)' }}
              >
                <div className="p-1 sm:p-2 text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.feature}</div>
                <div className="p-1 sm:p-2 text-center">
                  {typeof service.tier3 === 'boolean' ? (
                    service.tier3 ? <Check className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#10b981' }} /> : <X className="w-5 h-5 sm:w-7 sm:h-7 mx-auto" style={{ color: '#ef4444' }} />
                  ) : (
                    <span className="text-sm sm:text-base font-medium" style={{ color: '#273F4F' }}>{service.tier3}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Payment Note */}
            <div className="p-3 sm:p-6" style={{ backgroundColor: '#EFEEEA' }}>
              <div style={{ color: '#273F4F' }}>
                <div className="font-bold mb-2 sm:mb-3 text-sm sm:text-lg" style={{ color: '#FE7743' }}>Lưu ý</div>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: '#FE7743' }}></div>
                    <span>Thanh toán trước tối thiểu 3 tháng. VekMarketing hoàn trả 100% chi phí nếu trong vòng 3 tháng không đạt cam kết.
Sau 6 tháng, VekMarketing gợi ý quý khách giữ service để giữ được thứ hạng với ưu đãi 20% off giá phía trên.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: '#FE7743' }}></div>
                    <span>Chi phí tháng chưa bao gồm phí chạy Ads trên Google, để tối đa hóa kết quả và thu hút lượng khách hàng mới đáng kể đến tiệm của bạn, VekMarketing 
khuyến nghị ngân sách quảng cáo hàng ngày từ 10 đến 15€.</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>{/* end inner card */}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-4 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-2 sm:p-4" style={{ backgroundColor: '#90E0EF' }}>
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden" style={{ backgroundColor: '#90E0EF' }}>
            {/* Header */}
            <div className="text-white p-2 sm:p-4" style={{ backgroundColor: '#90E0EF' }}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left" style={{ color: '#273F4F' }}>ADDITIONAL SERVICES</h2>
                <div 
                  className="text-sm sm:text-base font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-white text-center"
                  style={{ backgroundColor: '#5BACBF' }}
                >
                  DỊCH VU BỔ SUNG / SẢN PHẨM
                </div>
              </div>
            </div>

            {/* Features List */}
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="border-b transition-colors duration-150 hover:bg-[#F1F5F9] p-2 sm:p-3"
                style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: 'rgba(39,63,79,0.08)' }}
              >
                <div className="flex justify-between items-center">
                  <div className="text-sm sm:text-base font-medium flex-1" style={{ color: '#273F4F' }}>{service.service}</div>
                  <div className="ml-4 text-center">
                    <span className="text-sm sm:text-base font-bold px-3 py-2 rounded" style={{ backgroundColor: '#FE7743', color: 'white' }}>
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            </div>{/* end inner card */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-4 sm:py-8 bg-white" >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-100">
            {/* Contact Info */}
            <div className="p-4 sm:p-8" style={{ backgroundColor: '#273F4F' }}>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Liên hệ ngay để được tư vấn!</h3>
                <p className="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6">Chúng tôi cam kết mang lại hiệu quả tốt nhất cho salon của bạn</p>
                <Button 
                  className="px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

      <FloatingButtons />
      <Footer />
    </div>
  )
}
