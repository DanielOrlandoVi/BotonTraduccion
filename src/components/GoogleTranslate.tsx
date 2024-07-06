import React, { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const googleTranslateScript = document.createElement('script');
      googleTranslateScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      googleTranslateScript.async = true;
      googleTranslateScript.id = 'google-translate-script';
      document.body.appendChild(googleTranslateScript);
    };

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'es',
            includedLanguages: 'es,en,fr,de',
            layout: google.translate.TranslateElement.InlineLayout
          },
          'google_translate_element'
        );
      }
    };

    if (!document.querySelector('#google-translate-script')) {
      addGoogleTranslateScript();
    } else {
      window.googleTranslateElementInit();
    }
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
