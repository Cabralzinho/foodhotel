import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import { AddProductForm } from "@/features/products/components/AddProductForm";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function Products() {
  return (
    <main className="flex flex-col items-center h-screen bg-slate-200 px-8">
      <Toaster />
      <div className="flex flex-col gap-2 pt-2 w-full">
        <Link className="w-fit" href="/">
          <ArrowLeft className="w-[25px]" />
        </Link>
        <h1 className="font-lobster text-6xl text-center">10Food Hotel</h1>
      </div>

      <AddProductForm />
    </main>
  );
}
