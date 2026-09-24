import { sans, serif, script } from '../lib/fonts';
import './globals.css';

export const metadata = { title: 'Digital Rights Pakistan' };

// Only the real web font (first family), never the generated local() fallback face.
const family = (f) => f.style.fontFamily.split(',')[0].trim();

const FONT_SPECS = [
  [`400 1em ${family(sans)}`, 'Cybercrime emergency'],
  [`500 1em ${family(sans)}`, 'Your clear guide'],
  [`600 1em ${family(serif)}`, 'Digital Safety'],
  [`700 1em ${family(script)}`, 'Simplified'],
];

// Runs at parse time (after the stylesheet), long before React hydrates.
const gate = `(function(){var d=document.documentElement,done=false;
function ready(){if(done)return;done=true;window.__fontsReady=true;d.classList.remove('fonts-pending');d.classList.add('fonts-ready');window.dispatchEvent(new Event('fonts-ready'));}
setTimeout(ready,8000);
if(!document.fonts||!document.fonts.load){ready();return;}
Promise.all(${JSON.stringify(FONT_SPECS)}.map(function(s){return document.fonts.load(s[0],s[1]);})).then(ready,ready);
})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`fonts-pending ${sans.variable} ${serif.variable} ${script.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: gate }} />
        <noscript>
          <style>{'html.fonts-pending body > *{opacity:1 !important}'}</style>
        </noscript>
      </body>
    </html>
  );
}
