import Image from "next/image";
import LoginForm from "./ui/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4 w-1/2 border-2 border-gray-200 rounded-3xl p-10 shadow-md">
        <div className="flex flex-col items-center justify-center gap-5">
          <Image src="/logo.svg" alt="logo" width={130} height={130} />
          <h1 className="text-sm text-gray-600">Login</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
