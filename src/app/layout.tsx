import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import AuthButton from "@/components/AuthButton";
import AuthKitProvider from '@/components/AuthKitProvider';
import { getServerSession } from "next-auth";
import SessionProvider from '@/components/SessionProvider';

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: 'Feedcast',
  description: 'A Farcaster application for intentional social media.',
  authors: [{ name: 'Nick Brodeur' }],
  keywords: ["Farcaster", "client", "Warpcast", "social", "media", "cast"],
  openGraph: {
    title: 'Feedcast',
    description: 'A Farcaster application for intentional social media.',
    url: 'https://feedcast.xyz',
    siteName: 'Feedcast',
    images: [
      {
        url: '',
        width: 500,
        height: 500
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

const config = {
  rpcUrl: 'https://mainnet.optimism.io',
  domain: 'localhost:3000',
  siweUri: 'localhost:3000',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} box-border h-screen min-h-screen`}>
        <SessionProvider session={session}><AuthKitProvider config={config}>
          <div className="flex justify-center items-start">
            
            {/* Side Bar */}
            <nav className="w-40 h-screen">
              <div className="p-2 px-4">
                <NavMenu />
              </div>
            </nav>

            {/* Main Page */}
            <main className="w-5/12 h-screen border-x-2 border-black border-opacity-50">
              {children}
            </main>

            {/* Right Side Bar */}
            <div className="w-40">
              <div className="p-2">
                <AuthButton />
              </div>
            </div>

          </div>
        </AuthKitProvider></SessionProvider>
      </body>
    </html>
  );
}
