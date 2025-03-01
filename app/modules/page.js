


import React from "react";
import Navigation from "../components/Header/navigation";
import Footer from "../components/footer";
import OurModules from './OurModules';
import TopBanner from '../components/Home/TopBanner';
import { bannerContent } from "../utils/constants";

export const metadata = {
  title: " Powerful Business Modules | Streamline with Profitᵇ",
  description: "Unlock efficiency with Profitᵇ’s advanced business modules. From finance to inventory, sales to analytics manage it all with one smart solution.",
  keywords: "erp software for businesses, sales management system, purchase management software, inventory tracking solution ,finance & accounting erp , cloud-based erp modules",

};
// FAQ Data
const faqs = [
  {
    question: "What modules are included in Profitᵇ?",
    answer:
      "Profitᵇ encompasses several key modules to streamline business operations: Sales Management: Oversee sales processes efficiently.Purchase Management: Manage procurement activities seamlessly. Inventory Management: Track and control inventory levels effectively.4. Finance & Accounting: Handle financial transactions and accounting tasks with ease. These modules are designed to provide comprehensive control over various business functions.",
  },
  {
    question: "Can I customize Profitᵇ modules to fit my business needs?",
    answer:
      "The website emphasizes that Profitᵇ adapts to your business and way of working, suggesting a level of flexibility. For specific customization options, it's best to consult with the Profitᵇ team.",
  },
  {
    question: "Is training provided for each module?",
    answer:
      "The website does not specify training provisions. To understand the training and support available for each module, please contact Profitᵇ directly",
  },
  {
    question: "Are there additional modules available beyond the core offerings?",
    answer: "The primary modules highlighted include Sales, Purchase, Inventory, and Finance & Accounting. For information on additional modules or upcoming features, it's recommended to reach out to Profitᵇ's support team.",
  },
  {
    question: "How frequently are the modules updated?",
    answer: "The website does not detail the update frequency for modules. For insights into update schedules and new feature rollouts, please contact Profitᵇ directly.",
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
        title={bannerContent.modules.title} 
        description={bannerContent.modules.description} 
        imageSrc={bannerContent.modules.imageSrc} 
      />
      <main>
      <OurModules />
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
