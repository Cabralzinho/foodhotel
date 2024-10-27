import { ProductList } from "@/features/products/components/ProductList";

export default function Products() {
  return (
    <main className="flex flex-col gap-6 px-6 bg-white h-screen text-black">
      <ul className="flex flex-col divide-y divide-zinc-300">
        <ProductList />
      </ul>
    </main>
  );
}
