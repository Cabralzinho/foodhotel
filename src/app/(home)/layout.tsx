import { Footer } from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-primaryColor text-white h-screen ">
      {children}
      <Footer />
    </main>
  );
}
