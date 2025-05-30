import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

export const useThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
  
  const mqListener = (e => {
    if(e.matches) {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
    setIsDarkTheme(e.matches);
  });
  
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return [isDarkTheme, setIsDarkTheme];
}

export const useFont = () => {
  const {t, i18n} = useTranslation();
  const [font, setFont] = useState('font-playpen');

  useEffect(() => {
    if(i18n.language === 'ru') {
      setFont('font-playpen');
    } else {
      setFont('font-gluten');
    }
  }, [i18n.language])

  return font;
}