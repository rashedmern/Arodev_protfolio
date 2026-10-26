import type { Metadata } from "next";
import "./globals.css";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "REV Autowares",
  description: "REV Autowares — Digital Experience, Design & Development",
  icons: {
    icon: [
      { url: "/icon/favicon.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon/favicon.png",
    apple: "/icon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Cursor />
          <Navbar />

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}