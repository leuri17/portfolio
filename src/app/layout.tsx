import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Figtree } from 'next/font/google';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Leuri Alonso — Software Engineer',
  description: 'Frontend / Full-Stack Engineer building modern web applications with React and TypeScript.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark font-sans', figtree.variable)}>
      <body className="bg-background text-foreground antialiased">
        <div className="flex flex-col items-center">
          <main className="w-full max-w-5xl px-6">{children}</main>
          <Toaster position="top-center" theme="light" richColors={true} />
        </div>
      </body>
    </html>
  );
}
