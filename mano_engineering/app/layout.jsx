import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "My First Next.js Project",
};


export default function RootLayout({
  children,
})  {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}