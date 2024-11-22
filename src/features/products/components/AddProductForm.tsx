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
  const { mutate: addProduct } = useAddProduct();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmitProduct = handleSubmit(async (data) => {
    const product = data;

    addProduct(product);
  });

  return (
    <form
      onSubmit={onSubmitProduct}
      className="flex flex-col gap-10 items-center justify-center h-full w-full max-w-[500px]"
    >
      <ImageInput
        image={getValues("image")}
        preventRemove={false}
        onChange={(image) => setValue("image", image, { shouldValidate: true })}
      />

      <div className="flex flex-col gap-5 justify-center w-full">
        <div className="flex gap-4 w-full">
          <TextField
            className="w-full"
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
            required
          />
        </div>
        <div className="flex gap-4 w-full">
          <NumericField
            decimalScale={2}
            value={getValues("price")}
            prefix="R$ "
            label="Preço"
            helperText={errors.price?.message}
            error={!!errors.price}
            onChange={(value) =>
              setValue("price", value as any, { shouldValidate: true })
            }
            required
          />
          <NumericField
            decimalScale={0}
            value={getValues("amount")}
            label="Quantidade"
            helperText={errors.amount?.message}
            error={!!errors.amount}
            onChange={(value) =>
              setValue("amount", value as any, { shouldValidate: true })
            }
            required
          />
        </div>

        <TextField
          helperText={errors.description?.message}
          error={!!errors.description}
          required
          label="Descrição do produto"
          multiline
          rows={4}
          {...register("description")}
        />

        <Button type="submit" variant="contained">
          Adicionar
        </Button>
      </div>
    </form>
  );
};
