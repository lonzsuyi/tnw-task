import './global.css';

export const metadata = {
  title: 'Welcome to info',
  description: 'Transport Info',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto min-h-screen bg-neutral-50 relative">{children}</body>
    </html>
  );
}
