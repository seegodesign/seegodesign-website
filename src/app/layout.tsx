import { Suspense, type ReactNode } from 'react';
import Script from 'next/script';
import { CursorGlowTracker } from '@/components/CursorGlowTracker';
// import { GlobalChat } from '@/components/GlobalChat';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { getGAMeasurementId } from '@/lib/analytics';
import '../styles/globals.scss';
import '../styles/base.scss';
import '../styles/utilities.scss';
import '../styles/components.scss';
import '../styles/light-theme.scss';

export const metadata = {
  title: 'Creative Solutions for Business | Seego Design',
  description:
    'Seego Design builds custom websites, apps, and digital tools that drive growth, streamline operations, and turn complex ideas into clear business solutions.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const gaId = getGAMeasurementId();
  const themeScript = `
    (function() {
      try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {gaId && (
          <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        {/* <GlobalChat /> */}
        <CursorGlowTracker />
      </body>
    </html>
  );
}
