import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-emerald-100 justify-center">{children}</body>
    </html>
  );
}
