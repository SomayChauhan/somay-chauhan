import '@/css/tailwind.css';
import type { Metadata } from 'next'
import ThemeProvider from "@/components/Providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisProvider from '@/components/Providers/LenisProvider';

export const metadata = {
  title: "Somay Chauhan",
  description: "turning ideas into real life products is my calling.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <LenisProvider>
            <main>{children}</main>
          </LenisProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
