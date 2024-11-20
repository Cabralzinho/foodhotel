import Link from "next/link";
import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import { GuestData } from "@/features/guest/components/GuestData";
import { useEffect } from "react";

export default function GuestPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  return (
    <main className="flex flex-col gap-24 px-5">
      <Link href="/" className="w-[25px] pt-2">
        <ArrowLeft />
      </Link>
      <GuestData guestId={id} />
    </main>
  );
}
