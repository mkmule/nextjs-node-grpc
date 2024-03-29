import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS and Node gRPC',
  description: 'Generated by create next app',
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/client-side', label: 'SSR Page (client)' },
  { href: '/server-side', label: 'SSR Page (server)' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <header>
      <nav>
        <ul className="flex items-center">
          {links.map(({ label, href }) => (
            <li key={href} className="px-4 text-2xl"><Link href={href}>{label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
    <main>
      {children}
    </main>
    </body>
    </html>
  );
}
