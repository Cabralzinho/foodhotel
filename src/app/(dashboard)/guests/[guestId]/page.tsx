import Link from "next/link";
import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import { GuestData } from "@/features/guests/components/GuestData";

export default function GuestPage({ params }: { params: { guestId: string } }) {
  const guestId = Number(params.guestId);

  return (
    <main className="flex flex-col gap-24 px-5">
      <Link href="/rooms" className="w-[25px] pt-2">
        <ArrowLeft />
      </Link>
      <GuestData guestId={guestId} />
    </main>
  );
}
