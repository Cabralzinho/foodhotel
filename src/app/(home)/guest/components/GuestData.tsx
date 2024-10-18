export const GuestData = ({
  label,
  paragraph,
}: {
  label: string;
  paragraph: string;
}) => {
  return (
    <div>
      <span className="text-gray-600 px-2">{label}</span>
      <p className="py-2 px-4 rounded-xl placeholder:text-black border border-gray-400">
        {paragraph}
      </p>
    </div>
  );
};
