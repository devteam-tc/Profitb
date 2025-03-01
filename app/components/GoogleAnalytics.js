"use client";
import Script from "next/script";

const GA_TRACKING_ID = "G-JMQLLRTM9X"; // Replace with your GA4 Measurement ID

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics (gtag.js) */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      {/* Initialize Google Analytics */}
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
