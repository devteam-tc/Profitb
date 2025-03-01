
import Navigation from '../components/Header/navigation'
import OurMissionSection from './OurMissionSection'
import Footer from '../components/footer';
// import Script from 'next/script'; 
import TopBanner from '../components/Home/TopBanner';
import { bannerContent } from "../utils/constants";

export const metadata = {
  title: "About Profitᵇ | Empowering Businesses with Smart Solutions",
  description: "Learn how Profitᵇ transforms businesses with innovative solutions. Discover our mission, values, and commitment to driving growth through technology.",
  keywords: "erp,  erp system, erp software,  erp for small business, billing software, accounting software, manufacturing software, about profit b erp,  erp software services , manufacturing erp software",
};
// FAQ Data
const faqs = [
  {
    question: "What makes Profitᵇ different from other ERP solutions?",
    answer:
      "Profitᵇ stands out due to its user-friendly interface, industry-specific modules, real-time analytics, and seamless cloud-based integration.",
  },
  {
    question: "How long has Profitᵇ been in the ERP industry?",
    answer:
      "Profitᵇ has been serving businesses for several years, continuously evolving to meet the changing needs of various industries.",
  },
  {
    question: "What are the core values of Profitᵇ?",
    answer:
      "Our core values include innovation, customer-centric solutions, data security, and continuous improvement.",
  },
  {
    question: "Where is Profitᵇ headquartered?",
    answer: "Profitᵇ is headquartered in [City, Country]. We serve businesses globally through our cloud-based ERP platform",
  },
 
];

// Generate FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
export default function Page() {
  return (
    <div className="min-h-screen">
    <Navigation />
    
      <TopBanner 
        title={bannerContent.aboutUs.title} 
        description={bannerContent.aboutUs.description} 
        imageSrc={bannerContent.aboutUs.imageSrc} 
      />

    <main>
      <OurMissionSection />
      
    </main>
 {/* Inject FAQ Schema for SEO */}
 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <Footer />
  </div>
  );
}
