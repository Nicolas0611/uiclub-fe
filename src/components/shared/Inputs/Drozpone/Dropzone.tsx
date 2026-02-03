"use client";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

const Dropzone = <T extends FieldValues>({
  register,
  name,
}: {
  register: UseFormRegister<T>;
  name: Path<T>;
}) => {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <label className="group relative flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center transition hover:border-gray-400 hover:bg-gray-100">
      <PhotoIcon className="h-10 w-10 text-gray-400 transition group-hover:text-gray-600" />

      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-700">
          Click to upload an image
        </p>
        <p className="text-xs text-gray-500">PNG or JPG</p>
      </div>

      {fileName && (
        <div className="mt-2 flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
          <PhotoIcon className="h-4 w-4 text-gray-500" />
          <span className="truncate max-w-[180px]">{fileName}</span>
        </div>
      )}

      <input
        type="file"
        accept="image/png, image/jpeg"
        {...register(name, {
          onChange: (e) => {
            const file = e.target.files?.[0];
            setFileName(file ? file.name : null);
          },
        })}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      />
    </label>
  );
};

export default Dropzone;
