"use client";

import { Button, TextField } from "@mui/material";
import { useAddProduct } from "../hooks/useAddProduct";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageInput } from "@/components/ImageInput";
import { CategorySelector } from "./CategorySelector";
import { NumericField } from "@/components/NumericField";

type FormProps = z.infer<typeof schema>;

const schema = z.object({
  name: z.string(),
  price: z
    .number({ message: "Precisa ser um número" })
    .min(1, "O valor deve ser maior que zero"),
  amount: z
    .number({ message: "Precisa ser um número" })
    .min(1, "O valor deve ser maior que zero"),
  description: z.string(),
  category: z.string(),
  image: z.any(),
});

export const AddProductForm = () => {
  const { mutate: addProduct, isPending } = useAddProduct();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormProps>({
    mode: "all",
    defaultValues: {
      price: undefined,
      amount: undefined,
    },
    resolver: zodResolver(schema),
  });

  const onSubmitProduct = handleSubmit(async (data) => {
    addProduct({
      data: data,
      onSucess: () => reset(),
    });
  });

  return (
    <form
      onSubmit={onSubmitProduct}
      className="flex flex-col gap-10 items-center justify-center h-full w-full max-w-[500px]"
    >
      <ImageInput
        disabled={isPending}
        image={getValues("image")}
        preventRemove={false}
        onChange={(image) => setValue("image", image, { shouldValidate: true })}
      />

      <div className="flex flex-col gap-5 justify-center w-full">
        <div className="flex gap-4 w-full">
          <TextField
            className="w-full"
            disabled={isPending}
            required
            helperText={errors.name?.message}
            error={!!errors.name}
            label="Nome do produto"
            {...register("name")}
          />
          <CategorySelector
            onChange={(value) =>
              setValue("category", value, { shouldValidate: true })
            }
            value={getValues("category")}
            disabled={isPending}
            required
          />
        </div>
        <div className="flex gap-4 w-full">
          <NumericField
            disabled={isPending}
            decimalScale={2}
            value={getValues("price")}
            prefix="R$ "
            label="Preço"
            helperText={errors.price?.message}
            error={!!errors.price}
            onChange={(value) =>
              setValue("price", value as any, {
                shouldValidate: value !== undefined,
              })
            }
            required
          />
          <NumericField
            disabled={isPending}
            decimalScale={0}
            value={getValues("amount")}
            label="Quantidade"
            helperText={errors.amount?.message}
            error={!!errors.amount}
            onChange={(value) =>
              setValue("amount", value as any, {
                shouldValidate: value !== undefined,
              })
            }
            required
          />
        </div>

        <TextField
          disabled={isPending}
          helperText={errors.description?.message}
          error={!!errors.description}
          required
          label="Descrição do produto"
          multiline
          rows={4}
          {...register("description")}
        />

        <Button
          disabled={isPending || !isValid}
          type="submit"
          variant="contained"
        >
          Adicionar
        </Button>
      </div>
    </form>
  );
};
