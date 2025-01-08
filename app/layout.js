import Navbar from './components/Navbar';
import '../app/globals.css';
import BannerSection from './pages/BannerSection';
import CardSection from './pages/CardSection';
import IntroSection from './pages/IntroSection';
import PricingSection from './pages/PricingSection';
import RequestInfoSection from './pages/RequestInfoSection';
import Features from './pages/Features';

export const metadata = {
  title: 'Profitᵇ Transform Business Operations Effortlessly',
  description: 'Simplify business processes with Profitᵇ. Access sales, purchase, finance & accounting, inventory and more. Flexible, secure, and tailored for small businesses.',
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
      </head>
      <body>
        <div className="layout-container">
          <Navbar />
          <BannerSection />
          <IntroSection />
          <Features />
          <CardSection />
          <PricingSection />
          <RequestInfoSection />
          <main>{children}</main>

          {/* Footer Section */}
        </div>
      </body>
    </html>
  );
}
