import { ArrowLeft } from "@/app/components/Icons/ArrowLeft";
import Link from "next/link";
import { GuestData } from "./components/GuestData";

export default function guest() {
  return (
    <main className="flex flex-col gap-24 px-5">
      <Link href="/" className="w-[25px] pt-2">
        <ArrowLeft />
      </Link>
      <div className="absolute top-12 left-[50%] translate-x-[-50%]">
        <div className="bg-zinc-200 p-5 rounded-2xl border-4 drop-shadow-lg border-secondaryColor text-primaryColor">
          <h1 className="text-6xl font-lobster">36</h1>
        </div>
      </div>
      <section className="bg-white px-5 py-10 rounded-2xl flex flex-col text-black gap-4">
        <GuestData label="Nome" paragraph="Sophia Pastel" />
        <GuestData
          label="Acompanhantes"
          paragraph="Maria cleusa dos Santos, Divina sophia"
        />
        <GuestData
          label="Apto/número da conta"
          paragraph="Apto. 36, conta: 12.345"
        />
        <GuestData label="Total" paragraph="R$ 96,00" />
      </section>
    </main>
  );
}
