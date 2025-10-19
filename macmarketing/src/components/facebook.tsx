'use client'

import { useEffect } from 'react'
import { FacebookProvider } from 'react-facebook'

const FACEBOOK_APP_ID = "YOUR_APP_ID" // Bạn cần tạo Facebook App ID tại https://developers.facebook.com/apps
const FACEBOOK_PAGE_ID = "841646355689391"

function FacebookMessengerChat() {
  useEffect(() => {
    // Đợi Facebook SDK load xong
    const checkFBSDK = setInterval(() => {
      if (window.FB && window.FB.XFBML) {
        console.log('✅ Facebook SDK loaded successfully')
        window.FB.XFBML.parse()
        clearInterval(checkFBSDK)
      }
    }, 100)

    return () => clearInterval(checkFBSDK)
  }, [])

  return (
    <>
      {/* Facebook Root */}
      <div id="fb-root"></div>

      {/* Facebook Customer Chat Plugin */}
      <div
        className="fb-customerchat"
        // @ts-ignore - Facebook attributes
        attribution="biz_inbox"
        page_id={FACEBOOK_PAGE_ID}
        theme_color="#0084FF"
        logged_in_greeting="Xin chào! Chúng tôi có thể hỗ trợ gì cho bạn?"
        logged_out_greeting="Xin chào! Vui lòng đăng nhập Facebook để chat với chúng tôi."
        greeting_dialog_display="show"
        greeting_dialog_delay="5"
      ></div>
    </>
  )
}

function Facebook() {
  return (
    <FacebookProvider
      appId={FACEBOOK_APP_ID}
      chatSupport
      xfbml
      version="v18.0"
      language="vi_VN"
    >
      <FacebookMessengerChat />
    </FacebookProvider>
  )
}

export default Facebook