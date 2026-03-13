import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  title: "Instasany",
  description: "Projeto aplicado para fins de estudos em Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
