import type { Metadata } from "next";
import { raleway } from "@/fonts";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "EAS Building",
  description: "System manager for EAS Building company ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${raleway.variable} antialiased`}
      >
        <TooltipProvider>
          {children}
          <Toaster position="top-right" />
        </TooltipProvider>
      </body>
    </html>
  );
}
