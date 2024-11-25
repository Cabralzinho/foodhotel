import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import { RoomList } from "@/features/rooms/components/RoomList";
import Link from "next/link";

export default function Rooms() {
  return (
    <main className="flex flex-col gap-6 px-6  h-screen text-black items-center w-full pt-5">
      <div className="flex w-full max-w-[600px] items-center">
        <Link href="/" className="cursor-pointer w-[25px]">
          <ArrowLeft className="cursor-pointer w-[25px]" />
        </Link>
        <div className="flex w-full justify-center">
          <h1 className="text-4xl font-bold">Quartos</h1>
        </div>
      </div>
      <RoomList />
    </main>
  );
}
