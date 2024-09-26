export const Input = ({
  title,
  type,
  placeholder,
  name,
  id,
}: {
  title: string;
  type: string;
  placeholder: string;
  name: string;
  id: string;
}) => {
  return (
    <div className="flex flex-col text-white gap-2">
      <label htmlFor={name}>{title}</label>
      <input
        className="bg-transparent outline-none border-2 border-red px-4 py-2 rounded-xl min-w-[300px] placeholder:text-white"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
