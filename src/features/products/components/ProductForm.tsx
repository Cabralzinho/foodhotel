"use client";

import { Button, MenuItem, TextField } from "@mui/material";
import { FaPencilAlt } from "react-icons/fa";
import { useAddProduct } from "../hooks/useAddProduct";
import { IProduct } from "@/types/products";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormProps = z.infer<typeof schema>;

const category = ["Bebidas", "Carnes", "Massas", "Pratos prontos", "Salgados"];

const schema = z.object({
  name: z.string(),
  price: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, { message: "Preço deve ser maior que zero" }),
  amount: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "Preço deve ser maior que zero" }),
  description: z.string(),
  // category: z.enum(category as [string, ...string[]]),
  file: z.any(),
});

export const ProductForm = () => {
  const { addProduct } = useAddProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmitProduct = handleSubmit(async (data) => {
    const product: IProduct = data;

    addProduct(product);
  });

  return (
    <form
      onSubmit={onSubmitProduct}
      className="flex flex-col gap-10 items-center justify-center h-full"
    >
      <div className="border border-primaryColor rounded-lg p-5">
        <label
          htmlFor="file"
          className="bg-gray-400/80 border-2 border-black p-10 flex rounded-md hover:bg-gray-400/60 transition-all"
        >
          <FaPencilAlt />
        </label>
        <input {...register("file")} className="hidden" type="file" id="file" />
      </div>

      <div className="flex flex-col gap-5 justify-center">
        <div className="flex gap-4">
          <TextField
            className="w-full max-w-[50%]"
            required
            helperText={!!errors.name?.message}
            error={!!errors.name}
            label="Nome do produto"
            {...register("name")}
          >
            Nome
          </TextField>
          {/* <TextField
            className="w-full max-w-[50%]"
            select
            required
            helperText={!!errors.category?.message}
            error={!!errors.category}
            label="Selecione a categoria"
            {...register("category")}
          >
            {category.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField> */}
        </div>
        <div className="flex gap-4">
          <TextField
            required
            helperText={!!errors.price?.message}
            label="Preço do produto"
            type="number"
            {...register("price")}
          >
            Preço
          </TextField>
          <TextField
            required
            helperText={!!errors.amount?.message}
            label="Quantidade do produto"
            type="number"
            {...register("amount")}
          >
            Quantidade
          </TextField>
        </div>

        <TextField
          helperText={!!errors.description?.message}
          error={!!errors.description}
          required
          label="Descrição do produto"
          multiline
          rows={4}
          {...register("description")}
        >
          Descrição
        </TextField>

        <Button type="submit" variant="contained">
          Adicionar
        </Button>
      </div>
    </form>
  );
};
