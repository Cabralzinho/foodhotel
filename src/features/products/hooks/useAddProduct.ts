import { api } from "@/libs/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddProduct = () => {
  return useMutation({
    mutationFn: async (args: Args) => {
      const formData = new FormData();

      formData.append("name", args.data.name);
      formData.append("description", args.data.description);
      formData.append("price", args.data.price.toString());
      formData.append("amount", args.data.amount.toString());
      formData.append("category", args.data.category);

      if (args.data.image) {
        formData.append("image", args.data.image);
      }

      const response = await api.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      return response.data;
    },
    onSuccess: (_, args) => {
      args.onSucess?.();
      toast.success("Produto adicionado com sucesso");
    },
    onError: () => {
      toast.error("Algo deu errado na hora de adicionar o produto");
    },
  });
};

type AddProductData = {
  name: string;
  description: string;
  category: string;
  price: number;
  amount: number;
  image?: File;
};

type Args = {
  onSucess?: () => void;
  data: AddProductData;
}
