import { Gear } from "@/app/components/Icons/Gear";
import { QrCode } from "@/app/components/Icons/QrCode";
import { User } from "@/app/components/Icons/User";
import Link from "next/link";

const navItem = [
  {
    id: 1,
    title: "User",
    icon: <User />,
    to: "/user",
  },
  {
    id: 2,
    title: "QrCode",
    icon: <QrCode />,
    to: "/qrcode",
  },
  {
    id: 3,
    title: "Gear",
    icon: <Gear />,
    to: "/settings",
  },
];

export const Footer = () => {
  return (
    <nav className="flex items-center bottom-0 fixed z-[999] w-full bg-primaryColor px-6 mt-20">
      <ul className="flex justify-between items-center w-full h-16">
        {navItem.map((item) => (
          <Link href={item.to} key={item.id}>
            <li className="w-[25px]">{item.icon}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
