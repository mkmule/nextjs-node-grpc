import React from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/server-side', label: 'SSP Example (client)' },
  { href: '/client-side', label: 'CSP Example (server)' },
];

export default function Home() {
  return (
    <main className="p-2">
      Hello, please use navigation bar on top
    </main>
  );
}
