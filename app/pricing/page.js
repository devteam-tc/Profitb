import Navigation from '../components/Header/navigation'
import { Col, Container, Row } from "react-bootstrap";
import Footer from '../components/footer';
import PricingCard from './PricingCard';
import TopBanner from '../components/Home/TopBanner';
import { bannerContent } from "../utils/constants";

export const metadata = {
  title: "Choose the right plan for you",
  description: "Compare the pricing and pick the best service plan of techclouerp based on your Business needs!",
  keywords: "software price, erp software price in india, enterprise erp Pricing, erp cost for small businesses ,erp subscription plans , profit b pricing",
};
// FAQ Data
const faqs = [
  {
    question: "What pricing plans does Profitᵇ offer?",
    answer:
      "Profitᵇ offers three subscription plans: Monthly Plan: ₹5,000 per month Half-Yearly Plan: ₹4,500 per month Annual Plan: ₹4,000 per month These plans are designed to provide flexibility and cost savings based on your business needs",
  },
  {
    question: "Are there any contracts or hidden fees associated with Profitᵇ's pricing plans?",
    answer:
      "No, Profitᵇ believes in simple and transparent pricing. There are no contracts or hidden fees associated with any of the subscription plans.",
  },
  {
    question: "What payment methods are accepted for subscription?",
    answer:
      "While the specific payment methods are not detailed on the website, subscriptions are typically processed through standard payment options such as credit/debit cards, bank transfers, or online payment gateways. For precise information, it's recommended to contact Profitᵇ directly.",
  },
  {
    question: "Can I upgrade or downgrade my subscription plan at any time?",
    answer: "The website indicates that plan upgrades are available instantly. For detailed information about upgrading or downgrading your subscription, it's advisable to contact Profitᵇ's customer support.",
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
        title={bannerContent.pricing.title} 
        description={bannerContent.pricing.description} 
        imageSrc={bannerContent.pricing.imageSrc} 
      />
      <main>
       <PricingCard />
        
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