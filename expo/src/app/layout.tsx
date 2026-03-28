export const metadata = {
  title: 'Jude Auto Repairs',
  description: 'Auto repair shop in [Your Location]',
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
