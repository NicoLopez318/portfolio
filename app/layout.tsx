import type { Metadata } from "next";
import Nav from "./components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capstone Project Support — Nico and Team",
  description:
    "Commissioned technical guidance and coaching for IT capstone projects, from system planning and documentation feedback to testing and defense preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
