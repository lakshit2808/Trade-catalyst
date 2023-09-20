import React, { useEffect } from 'react';

const Swot: React.FC = () => {
  useEffect(() => {
    // Load the Trendlyne script asynchronously
    const script = document.createElement('script');
    script.src = 'https://cdn-static.trendlyne.com/static/js/webwidgets/tl-widgets.js';
    script.charset = 'utf-8';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <blockquote
        className="trendlyne-widgets"
        data-get-url="https://trendlyne.com/web-widget/swot-widget/Poppins/SBIN/?posCol=00A25B&primaryCol=00000&negCol=EB3B00&neuCol=F7941E"
        data-theme="light"
      ></blockquote>
    </>
  );
};

export default Swot;
