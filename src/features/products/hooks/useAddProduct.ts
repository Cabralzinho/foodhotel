import { api } from "@/libs/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddProduct = () => {
  return useMutation({
    mutationFn: async (data: AddProductData) => {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price.toString());
      formData.append("amount", data.amount.toString());
      formData.append("category", data.category);
      
      if (data.image) {
        formData.append("image", data.image);
      }
      
      const response = await api.post("/products", formData);

      return response.data;
    },
    onSuccess: () => {
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
