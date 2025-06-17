import "../styles/global.css";

export const metadata = {
  title: "Fake Store",
  description: "Product Listing App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white-100 text-gray-900">{children}</body>
    </html>
  );
}
