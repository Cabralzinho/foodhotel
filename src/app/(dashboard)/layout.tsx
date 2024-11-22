export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-gradient-to-tl from-primaryColor to-secondaryColor">
      {children}
      {/* <Footer /> */}
    </div>
  );
}
