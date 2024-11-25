"use client";

import { useRouter } from "next/navigation";
import { useRooms } from "../hooks/useRooms";
import { CircularProgress } from "@mui/material";
import { IRoom } from "@/types/rooms";

export const RoomList = () => {
  const { data: rooms, isFetching } = useRooms();
  const router = useRouter();

  if (isFetching) {
    return (
      <div className="bg-white p-4 flex justify-center items-center w-full max-w-[600px] rounded-xl">
        <CircularProgress />
      </div>
    );
  }

  const handleClick = (room: IRoom) => {
    if (!room.guestId) {
      return router.push(`/guests/new-guest/${room.id}`);
    }

    return router.push(`/guests/${room.guestId}`);
  };

  return (
    <ul className=" gap-4 w-full max-w-[600px] grid grid-cols-2 lg:grid-cols-3">
      {rooms?.map((room) => (
        <li
          onClick={() => handleClick(room)}
          key={room.id}
          className="flex px-4 py-10 bg-white hover: rounded-xl cursor-pointer flex-col items-center shadow-md hover:scale-105 transition-all"
        >
          <h2 className="font-bold">Quarto {room.id}</h2>
          {room.guestId && (
            <p className="text-sm bg-red-500 p-2 rounded-full h-4 w-4"></p>
          )}
          {!room.guestId && (
            <p className="text-sm bg-green-500 p-2 rounded-full h-4 w-4"></p>
          )}
        </li>
      ))}
    </ul>
  );
};
