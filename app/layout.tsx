import type { Metadata } from 'next';
import './globals.css';
import './odaris.css';

export const metadata: Metadata = { title: 'Odaris MC — Official Minecraft Store', description: 'Official Odaris MC Minecraft Network and Store' };

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
