
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import WhatsappButton from './components/WhatsappButton';
import ScrollToTopButton  from './components/ScrollToTopButton'
import GTM from "./components/GTM";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Metadata for SEO and Social Media
export const metadata = {
  title: "Profitᵇ | Smart Business Solutions for Growth & Efficiency",
  description: "Transform your business with Profitᵇ’s powerful solutions. Automate processes, gain real-time insights, and drive growth with cutting-edge technology.",
  keywords: [
    "erp",
    "grow your business",
    "erp software",
    "business to start",
    " profitable business",
    "best business",
    "best erp software for smes",
    "manufacturing software",
    "accounting software",
    "billing software",
  ],
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  robots: "index, follow",
  canonical: "https://profitpowerb.com/",
  alternates: {
    canonical: "https://profitpowerb.com/",
  },
 
  twitter: {
    card: "summary_large_image",
    site: "@Profitpower_b",
    title: "ProfitPowerB – Powering Your Business Growth",
    description: "Maximize efficiency and boost profitability with ProfitPowerB – your ultimate business growth solution.",
    images: ["https://profitpowerb.com/"],
  },
  verification: {
    google: "google2b33fffdbdc7a783",
  },
};

// Organization Schema Markup
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProfitPowerb",
  "url": "https://profitpowerb.com/",
  "logo": "https://profitpowerb.com/_next/static/media/logo.ad893a92.webp",
  "description": "Maximize efficiency and boost profitability with ProfitPowerB – your ultimate business growth solution.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 8919439603, +91 7032803200",
    "contactType": "customer service",
    "email": "contact@profitpowerb.com",
    "availableLanguage": ["English", "Hindi"]
  },
  
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Site Verification */}
        <meta name="google-site-verification" content="google2b33fffdbdc7a783" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

      
        {/* Google Tag Manager & Google Analytics */}
        <GTM />
        <GoogleAnalytics />
      </head>
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`} style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        
        {children}
        <WhatsappButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}



