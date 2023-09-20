import React, { useEffect } from 'react';

const TechnicalAnalysis: React.FC = () => {
  useEffect(() => {
    // Load the Trendlyne widget script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn-static.trendlyne.com/static/js/webwidgets/tl-widgets.js';
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="trendlyne-widgets"
      data-get-url="https://trendlyne.com/web-widget/technical-widget/Poppins/INFY/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E"
      data-theme="light"
    ></blockquote>
  );
};

export default TechnicalAnalysis;
