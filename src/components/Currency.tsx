type CurrencyProps = {
  value: number;
};

export const Currency = ({ value }: CurrencyProps) => {
  return (
    <span className="text-sm">
      {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)}
    </span>
  );
};
