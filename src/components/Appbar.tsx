import Link from "next/link";
import { FaQrcode, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

type AppBar = {
  id: number;
  icon: JSX.Element;
  link?: string;
};



export const Appbar = () => {
  return (
    <ul className="flex items-center gap-4 w-full justify-around p-4 fixed bottom-0 bg-cyan-600 shadow-md overflow-y-scroll md:hidden">
        <Link href="/qrcode" className="text-white ">
          <FaQrcode className="h-8 w-8"/>
        </Link>
    </ul>
  );
};
