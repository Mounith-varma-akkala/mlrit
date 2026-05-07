import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLR Institute of Technology — Admissions 2026",
  description:
    "Welcome to MLR Institute of Technology. Begin your admission journey — enrollment, brochure, campus tour and alumni voices, all in one place.",
  applicationName: "MLR Admissions",
  icons: { icon: "/logo.svg" },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
