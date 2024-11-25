export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-primary h-screen flex flex-col">
      <main className="flex justify-center items-center h-full">
        {children}
      </main>
      <footer className="text-white text-6xl items-end justify-center flex mb-10 font-lobster">
        10FoodHotel
      </footer>
    </div>
  );
}
