import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import { NewGuestForm } from "@/features/guests/components/NewGuestForm";

export default function newGuest() {
  return (
    <main className="flex flex-col justify-center items-center p-4 h-full">
      <NewGuestForm />
    </main>
  );
}
