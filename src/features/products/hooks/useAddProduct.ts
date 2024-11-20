import { api } from "@/libs/api";
import { IProduct } from "@/types/products";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddProduct = () => {
  const { mutate: addProduct, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      const authToken = localStorage.getItem("authToken");

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = new FormData();

      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price.toString());
      formData.append("amount", product.amount.toString());

      if (product.file) {
        formData.append("file", product.file);
      }

      console.log(formData.get("file"));
      const response = await api.post("/products", formData, config);

      return response.data;
    },
    onSuccess: () => {
      toast.success("Produto adicionado com sucesso");
    },
    onError: () => {
      toast.error("Algo deu errado na hora de adicionar o produto");
    },
  });

  return {
    addProduct,
    ...rest,
  };
};
