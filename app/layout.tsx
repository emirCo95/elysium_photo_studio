import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elysium Photo Studio',
  description: 'See the world through our lens.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
