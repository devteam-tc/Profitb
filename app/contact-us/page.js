import Navigation from "../components/Header/navigation";
import Form from "../contact-us/Form";
import Footer from "../components/footer";
import TopBanner from '../components/Home/TopBanner';
import { bannerContent } from "../utils/constants";

export const metadata = {
  title: "Let’s Connect! Your Business Growth Starts Here | Contact Us Today",
  description:
    "Have questions? We're here to help! Contact Profitᵇ for expert guidance, personalized solutions, and the next step toward smarter business management.",
  keywords: [
    "erp software contact",
    "erp solutions inquiry",
    "get in touch erp",
    "erp support team",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Let’s Connect! Your Business Growth Starts Here | Contact Us Today",
    description:
      "Have questions? We're here to help! Contact Profitᵇ for expert guidance, personalized solutions, and the next step toward smarter business management.",
    url: "https://profitpowerb.com/contact-us",
    type: "website",
    siteName: "ProfitPowerb",
  },
  alternates: {
    canonical: "https://profitpowerb.com/contact-us",
  },
};

// FAQ Data
const faqs = [
  {
    question: "How can I get in touch with Profitᵇ support?",
    answer:
      "You can reach Profitᵇ support by filling out the contact form on the website, emailing us at support@profitb.com, or calling our helpline.",
  },
  {
    question: "What is the customer service email for Profitᵇ?",
    answer:
      "For support inquiries, you can email us at support@profitb.com. Our team will respond within 24 hours.",
  },
  {
    question: "Does Profitᵇ offer live chat support?",
    answer:
      "Yes, we provide live chat support on our website to assist customers in real-time with any queries related to our ERP software.",
  },
  {
    question: "What are the working hours for Profitᵇ customer support?",
    answer: "Our support team is available from Monday to Saturday, 9 AM to 7 PM (IST).",
  },
  {
    question: "How long does it take to get a response from Profitᵇ?",
    answer:
      "We typically respond to customer queries within 24 hours. For urgent assistance, you can reach us via live chat or phone support.",
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

// Contact Page Schema Markup
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://profitpowerb.com/contact-us",
  about: {
    "@type": "Organization",
    name: "ProfitPowerb",
    url: "https://profitpowerb.com/",
    logo: "https://profitpowerb.com/_next/static/media/logo.ad893a92.webp",
    description:
      "Securely access your business anytime, anywhere with our budget-friendly ERP solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens Road, VIP Hills, Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "India",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 8919439603",
        contactType: "customer service",
        email: "contact@profitpowerb.com",
        availableLanguage: "English",
        areaServed: "Global",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91 8919439603",
        contactType: "sales",
        email: "contact@profitpowerb.com",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91 7032803200",
        contactType: "sales",
        email: "contact@profitpowerb.com",
        availableLanguage: "English",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Navigation />

      {/* Inject Schema Markup in Head */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
      </head>
      <TopBanner
        title={bannerContent.contactUs.title}
        description={bannerContent.contactUs.description}
        imageSrc={bannerContent.contactUs.imageSrc}
      />
      <main>
        <Form />
      </main>
      {/* Inject FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Footer />
    </>
  );
}
