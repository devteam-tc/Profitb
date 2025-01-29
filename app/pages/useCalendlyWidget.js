import { useEffect, useState } from 'react';

const useCalendlyWidget = (url) => {
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
      // Open Calendly popup
      window.Calendly.initPopupWidget({ url });
    } else {
      console.error('Calendly script not loaded.');
    }
  };

  return openCalendlyWidget; // Return the function for external use
};

export default useCalendlyWidget;
