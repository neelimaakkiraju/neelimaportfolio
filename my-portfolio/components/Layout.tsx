// components/Layout.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto flex-1 py-8">{children}</main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} My Portfolio
        </div>
      </footer>
    </div>
  );
}
