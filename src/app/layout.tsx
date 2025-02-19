
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/Header";
import { PostHogProvider } from '@/components/posthog-provider';
import dynamic from "next/dynamic";

const PostHogPageView = dynamic(() => import('@/components/PostHogPageView'), { ssr: false });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} ${lexend.variable} font-sans antialiased min-h-screen bg--background`}
      >
      
          <PostHogProvider>
          <Header />
          <PostHogPageView />
          {children}
          <Toaster />
          </PostHogProvider>
        
      </body>
    </html>
  );
}
