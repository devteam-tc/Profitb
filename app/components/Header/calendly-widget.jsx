"use client";
import { useEffect, useState } from 'react';


export default function CalendlyWidget({ url }) {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  const openCalendlyWidget = () => {
    if (calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      console.error('Calendly script not loaded.');
    }
  };

  return (
    <>
      {/* Your Calendly widget component rendering */}
    </>
  );
}
