"use client";

import { login } from "@/actions/auth/login";
import { Button, Input } from "@heroui/react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await login(data.email, data.password);
    console.log(result);
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-center gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          className="w-full"
          {...register("email")}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          className="w-full"
          {...register("password")}
        />
      </div>
      <Button color="primary" variant="solid" className="w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
