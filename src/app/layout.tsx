import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ApolloWrapper } from "@/lib/apolloWrapper";

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "UwU",
  description: "Chat with your favorite anime characters!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider
      appearance={{
        theme: dark
      }}>
      <ApolloWrapper>
        <html lang="en">
          <body className={`${titillium.variable} antialiased`}>
            {children}
          </body>
        </html>
      </ApolloWrapper>
    </ClerkProvider>
  )
}
