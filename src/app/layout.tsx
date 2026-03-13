import type { Metadata } from 'next';
import './globals.css';
import { Figtree } from 'next/font/google';
import { cn } from '@/lib/utils';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Leuri Alonso — Software Engineer',
  description: 'Frontend / Full-Stack Engineer building modern web applications with React and TypeScript.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('font-sans', figtree.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
