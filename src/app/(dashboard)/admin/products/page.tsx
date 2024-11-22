import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import { AddProductForm } from "@/features/products/components/AddProductForm";
import { Toaster } from "react-hot-toast";

export default function Products() {
  return (
    <main className="flex flex-col items-center h-screen">
      <Toaster />
      <div className="flex flex-col gap-2 pt-4">
        <ArrowLeft className="w-[25px]" />
        <h1 className="font-lobster text-6xl text-center">10Food Hotel</h1>
      </div>

      <AddProductForm />
    </main>
  );
}
