import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brightwheel Onboarding Triage",
  description: "AI-powered message triage for the Brightwheel onboarding team",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
