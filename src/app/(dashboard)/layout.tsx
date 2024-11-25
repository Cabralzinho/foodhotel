import { Appbar } from "@/components/Appbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-primary to-secondary overflow-y-scroll">
      {children}
      <Appbar/>
    </div>
  );
}
