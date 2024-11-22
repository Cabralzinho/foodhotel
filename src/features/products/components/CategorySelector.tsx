import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const category = ["Bebidas", "Carnes", "Massas", "Pratos prontos", "Salgados"];

type CategorySelectorProps = {
  value?: string;
  onChange?: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const CategorySelector = ({
  value,
  required,
  onChange,
}: CategorySelectorProps) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    onChange?.(e.target.value);
  };

  return (
    <FormControl className="w-full" required={required}>
      <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value || ""}
        onChange={handleChange}
        input={<OutlinedInput label="Categoria" />}
      >
        {category.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
