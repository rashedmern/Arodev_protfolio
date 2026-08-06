import type { Metadata } from "next";
import "./globals.css";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Arodev",
  description: "Arodev Portfolio",
  icons: {
    icon: "/icon/favicon.png",
    shortcut: "/icon/favicon.png",
    apple: "/icon/favicon.png",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}