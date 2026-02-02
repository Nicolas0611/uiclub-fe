"use client";

import { login } from "@/actions/auth/login";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    const { email, password } = data;
    const res = await login(email, password);
    setIsLoading(false);

    if (!res.ok) {
      toast.error(res.message);
      return;
    }

    router.push("/dashboard/home");
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
      <Button
        color="primary"
        variant="solid"
        className="w-full"
        type="submit"
        isLoading={isLoading}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
