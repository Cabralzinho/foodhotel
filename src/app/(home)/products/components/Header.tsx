import { ArrowLeft } from "@/app/components/Icons/ArrowLeft";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="pt-5 flex flex-col gap-2">
      <Link href="/">
        <ArrowLeft className="w-[20px]" />
      </Link>
      <div className="flex justify-between items-center">
        <h1 className="font-lobster text-6xl">10FoodHotel</h1>
        <span className="text-5xl font-lobster text-primaryColor">36</span>
      </div>
      <span>Qual será seu pedido de hoje?</span>
    </header>
  );
};
