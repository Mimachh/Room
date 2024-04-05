import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Room',
  description: 'Video calling app',
  icons: {
    icon: '/icons/logo.svg'
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen primary-radial">
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
