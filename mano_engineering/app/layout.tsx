import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "My First Next.js Project",
};

import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) { {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}