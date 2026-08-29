import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import './theme.css';

export const metadata: Metadata = {
  title: 'Odaris MC | Official Store',
  description: 'Official Odaris MC Minecraft Network Store'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
