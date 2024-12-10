import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

import { headers } from 'next/headers'; 
import ContextProvider from '@/context';

export const metadata: Metadata = {
  title: 'AppKit Example App',
  description: 'Powered by Reown',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers(); //Await the promise
  const cookies = headersObj.get('cookie'); //Access the cookie header

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}
