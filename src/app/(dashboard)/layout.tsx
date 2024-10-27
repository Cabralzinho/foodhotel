export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen">
      {children}
      {/* <Footer /> */}
    </main>
  );
}
