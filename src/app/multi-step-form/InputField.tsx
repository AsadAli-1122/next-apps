import React from "react";

interface InputFieldProps {
  title: string;
  name: string;
  value: string;
  error: string;
  type?: string;
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  title,
  name,
  value,
  error,
  handleChange,
  placeholder,
  type,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={name}
        className={`font-semibold ${
          error ? "text-red-600" : "text-indigo-950"
        }`}
      >
        {title}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        className={`px-4 py-2 rounded-sm border-2 focus:outline-none placeholder:font-semibold font-semibold text-slate-500 placeholder:text-slate-500/40 
            ${
              error
                ? "border-red-600"
                : "border-slate-300 focus:border-slate-500"
            }`}
      />
      {error && <span className="text-red-600 text-xs">{error}</span>}
    </div>
  );
};

export default InputField;
