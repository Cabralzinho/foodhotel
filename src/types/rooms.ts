import { Iguest } from "./guest";

export type IRoom = {
  id: number;
  guestId?: number;
  guest?: Iguest
}