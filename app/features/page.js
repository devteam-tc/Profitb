import Navigation from '../components/Header/navigation'
import Footer from '../components/footer';
import FeaturePage from './FeaturePage';
import TopBanner from '../components/Home/TopBanner';
import { bannerContent } from "../utils/constants";

export const metadata = {
  title: "Powerful Features to Streamline Your Business | Profitᵇ",
  description: "Discover Profitᵇ’s advanced features, including automation, real-time analytics, cloud security, and seamless integrations to optimize business efficiency.",
  keywords: "erp features,business automation,financial management,inventory management,crm integration , workflow automation,  secure data access",
};
// FAQ Data
const faqs = [
  {
    question: "What are the standout features of Profitᵇ ERP?",
    answer:
      "Profitᵇ ERP offers advanced inventory management, automated billing, multi-location support, financial tracking, CRM, and AI-powered analytics.",
  },
  {
    question: "Does Profitᵇ offer mobile access?",
    answer:
      "Yes, Profitᵇ ERP comes with a mobile-friendly interface, allowing users to manage business operations from their smartphones.",
  },
  {
    question: "Can I customize Profitᵇ ERP to fit my business needs?",
    answer:
      "Yes, our ERP system is fully customizable, allowing businesses to configure modules and workflows according to their requirements.",
  },
  {
    question: "How does Profitᵇ handle inventory management?",
    answer: "Profitᵇ provides real-time inventory tracking, automated stock updates, low-stock alerts, and supplier management features.",
  },
  {
    question: "Does Profitᵇ provide financial and accounting modules?",
    answer: "Yes, Profitᵇ includes financial management modules such as invoicing, expense tracking, taxation, and automated financial reporting.",
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
        title={bannerContent.features.title} 
        description={bannerContent.features.description} 
        imageSrc={bannerContent.features.imageSrc} 
      />
      <main>
      <FeaturePage />
             </main>
         {/* Inject FAQ Schema for SEO */}
 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Footer />
    </div>
  )
}