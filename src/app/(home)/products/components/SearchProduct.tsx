import { Search } from "@/app/components/Icons/Search";

export const SearchProduct = () => {
  return (
    <form className="flex gap-4 justify-between">
      <div className="flex items-center gap-4 w-full px-4 py-3 bg-slate-50 drop-shadow-lg rounded-lg border border-slate-100">
        <Search className="h-6 w-fit" />
        <input
          className="bg-transparent outline-none placeholder:text-black w-full"
          type="text"
          placeholder="Pesquisar"
        />
      </div>
      <button className="bg-primaryColor text-white px-10 py-2 rounded-lg">
        Prosseguir
      </button>
    </form>
  );
};
