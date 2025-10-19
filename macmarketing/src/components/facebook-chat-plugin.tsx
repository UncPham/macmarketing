"use client"

import { useEffect } from 'react'

const FACEBOOK_PAGE_ID = "841646355689391"
const FACEBOOK_APP_ID = "" // Optional: Để trống nếu không có

export function FacebookChatPlugin() {
  useEffect(() => {
    // Load Facebook SDK
    if (typeof window !== 'undefined') {
      // Set up fbAsyncInit
      window.fbAsyncInit = function() {
        window.FB?.init({
          xfbml: true,
          version: 'v18.0'
        })
      }

      // Load the SDK asynchronously
      if (!document.getElementById('facebook-jssdk')) {
        const script = document.createElement('script')
        script.id = 'facebook-jssdk'
        script.async = true
        script.defer = true
        script.crossOrigin = 'anonymous'
        script.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'

        const firstScript = document.getElementsByTagName('script')[0]
        firstScript.parentNode?.insertBefore(script, firstScript)
      }
    }
  }, [])

  return (
    <>
      {/* Facebook Root */}
      <div id="fb-root"></div>

      {/* Facebook Customer Chat Plugin */}
      <div
        className="fb-customerchat"
        // @ts-ignore
        attribution="biz_inbox"
        page_id={FACEBOOK_PAGE_ID}
      ></div>
    </>
  )
}

// Declare global types
declare global {
  interface Window {
    fbAsyncInit?: () => void
    FB?: {
      init: (params: { xfbml: boolean; version: string; appId?: string }) => void
      CustomerChat?: {
        showDialog: () => void
        hideDialog: () => void
        show: (shouldShow?: boolean) => void
      }
      XFBML?: {
        parse: () => void
      }
    }
  }
}