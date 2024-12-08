import type { Metadata } from "next";
import { roboto, robotoBold } from "../../public/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Newsletter Signup",
  description: "Newsletter Signup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} ${robotoBold.variable} antialiased bg-Neutral-dark_slate_gray`}
      >
        {children}
      </body>
    </html>
  );
}
