import Navbar from './components/Navbar';
import '../app/globals.css';
import BannerSection from './pages/BannerSection';
import CardSection from './pages/CardSection';
import IntroSection from './pages/IntroSection';
import PricingSection from './pages/PricingSection';
import RequestInfoSection from './pages/RequestInfoSection';
import Features from './pages/Features';
import ContactForm from './pages/ContactForm';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsappButton from './components/WhatsappButton';

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
        <meta name="keywords" content="small business tools, grow your business, simple business, business to start, profitable business" />
        <meta name="keywords" content="grow business, best business, start on business, most popular business, best business today" />
        <meta name="keywords" content="data for small businesses, best home based business, grow your business, budget for business, company sign up" />
        <meta name="robots" content="index, follow" />

        <meta name="google-site-verification" content="google2b33fffdbdc7a783" />
        <title>{metadata.title}</title>
        {/* Canonical Link */}
        <link rel="canonical" href="https://profitpowerb.com" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KJM9LSJ3');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJM9LSJ3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <div className="layout-container">
          <Navbar />
          <BannerSection />
          <IntroSection />
          <Features />
          <CardSection />
          <PricingSection />
          <ContactForm />
          <RequestInfoSection />
          <ScrollToTopButton />
          <WhatsappButton />
          <main>{children}</main>

          {/* Footer Section */}
        </div>
      </body>
    </html>
  );
}
