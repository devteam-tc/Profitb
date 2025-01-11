import Navbar from './components/Navbar';
import '../app/globals.css';
import BannerSection from './pages/BannerSection';
import CardSection from './pages/CardSection';
import IntroSection from './pages/IntroSection';
import PricingSection from './pages/PricingSection';
import RequestInfoSection from './pages/RequestInfoSection';
import Features from './pages/Features';
import ContactForm from './pages/ContactForm';

export const metadata = {
  title: 'Smart Tools for Smarter Business – Discover Profitᵇ Today',
  description: 'Looking for the best ERP for small business? Profit B delivers smart automation, flexible tools for sales, purchase, inventory, finance, and accounting, along with secure access to help your business grow confidently.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />

<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
      </head>
      <body>
        <div className="layout-container">
          <Navbar />
          <BannerSection />
          <IntroSection />
          <Features />
          <CardSection />
          <PricingSection />
          <ContactForm />
          <RequestInfoSection />
          <main>{children}</main>

          {/* Footer Section */}
        </div>
      </body>
    </html>
  );
}
