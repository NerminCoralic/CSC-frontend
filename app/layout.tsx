import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { hrHR } from "@clerk/localizations";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Children's Summer Camp",
  description:
    "Ljetni kamp za djecu u Velikoj Kladuši, Šiljkovača. Dječije aktivnosti i ture za provod.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={hrHR}>
      <html lang="en">
        <body>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
