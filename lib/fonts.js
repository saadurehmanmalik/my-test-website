import localFont from 'next/font/local';

export const sans = localFont({
  src: [
    { path: './fonts/ibm-plex-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'block',
});

export const serif = localFont({
  src: [{ path: './fonts/newsreader-latin-opsz-normal.woff2', weight: '400 600', style: 'normal' }],
  variable: '--font-serif',
  display: 'block',
});

export const script = localFont({
  src: [{ path: './fonts/dancing-script-latin-wght-normal.woff2', weight: '600 700', style: 'normal' }],
  variable: '--font-script',
  display: 'block',
});
