import React from "react";

interface FormWrapperProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}
const FormWrapper = ({ icon, title, children }: FormWrapperProps) => {
  return (
    <div className="container mx-auto bg-white p-4 border border-gray-200 rounded-2xl flex flex-col gap-4 w-full max-w-3xl">
      <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
        {icon}
        <h1 className="text-sm text-gray-500">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default FormWrapper;
