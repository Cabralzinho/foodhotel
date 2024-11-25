"use client";

import { NumericField } from "@/components/NumericField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAddGuest } from "../hooks/useAddGuest";
import { useParams } from "next/navigation";
import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import Link from "next/link";

const schema = z.object({
  roomId: z.number(),
  name: z.string(),
  companions: z.string(),
});

type FormData = z.infer<typeof schema>;

export const NewGuestForm = () => {
  const { setValue, getValues, register, formState, handleSubmit } =
    useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        roomId: Number(useParams().roomId),
      },
    });
  const { mutate: addGuest, isPending } = useAddGuest();

  return (
    <form
      className="bg-white px-4 py-6 rounded-xl shadow-md flex flex-col gap-4 max-w-[600px] w-full"
      onSubmit={handleSubmit((data) => addGuest(data))}
    >
      <div className="flex items-center gap-2 relative justify-center">
        <Link href="/rooms" className="w-fit absolute left-0">
          <ArrowLeft className="w-[25px]" />
        </Link>
        <h2 className="text-center font-bold text-2xl">Registrar Hóspede</h2>
      </div>

      <NumericField
        disabled={isPending}
        onChange={(value) => setValue("roomId", value as any)}
        error={!!formState.errors.roomId}
        helperText={formState.errors.roomId?.message}
        value={getValues("roomId") || Number(useParams().roomId)}
        label="Número do quarto"
      />
      <TextField
        disabled={isPending}
        {...register("name")}
        error={!!formState.errors.name}
        helperText={formState.errors.name?.message}
        label="Nome"
      />
      <TextField
        disabled={isPending}
        {...register("companions")}
        error={!!formState.errors.companions}
        helperText={formState.errors.companions?.message}
        label="Convidados"
      />
      <Button
        disabled={isPending || !formState.isValid}
        className="mt-6"
        type="submit"
        variant="contained"
      >
        Adicionar
      </Button>
    </form>
  );
};
