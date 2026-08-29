import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Odaris MC — Store', description: 'Official Odaris MC Minecraft Store' };

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
