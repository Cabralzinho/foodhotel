import React, { useRef } from "react";
import { FaImage } from "react-icons/fa";

type ImageInputProps = {
  image?: File;
  preventRemove?: boolean;
  disabled?: boolean;
  onChange?: (image?: File) => void;
};

export const ImageInput = ({
  image,
  preventRemove,
  disabled,
  onChange,
}: ImageInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file && preventRemove) {
      return;
    }

    onChange?.(file);
  };

  return (
    <div
      onClick={() => ref.current?.click()}
      className={`border-2 border-primary rounded-xl p-2 w-36 h-36 flex items-center justify-center ${
        disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"
      }`}
    >
      {image && (
        <img
          className="w-full h-full object-cover rounded-lg overflow-hidden"
          src={URL.createObjectURL(image)}
          alt="imagem do produto"
        />
      )}
      {!image && (
        <FaImage className="h-12 w-12 group-hover:text-primary transition-all" />
      )}

      <input
        disabled={disabled}
        onChange={handleChange}
        className="hidden"
        type="file"
        id="file"
        ref={ref}
      />
    </div>
  );
};
