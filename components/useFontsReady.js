import { useEffect, useState } from 'react';

// True once the inline gate script in layout.jsx reports the fonts are loaded.
export function useFontsReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.__fontsReady) return setReady(true);
    const on = () => setReady(true);
    window.addEventListener('fonts-ready', on);
    return () => window.removeEventListener('fonts-ready', on);
  }, []);
  return ready;
}
