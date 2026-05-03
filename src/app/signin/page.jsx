"use client";

import { authClient } from "@/lib/auth-client";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      return toast.error(error.message || "Invalid credentials");
    }

    toast.success("Login successful!");

    setTimeout(() => {
      router.push("/home"); // Home page
    }, 1000);
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
    });

    if (error) {
      return toast.error("Google login failed");
    }

    router.push("/home");
  };

  return (
    <Card className="border mx-auto w-[420px] py-8 px-6 mt-10 shadow-xl rounded-2xl bg-white">
      <Toaster position="top-center" richColors />

      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-900">Login</h1>
        <p className="text-sm text-gray-500 mt-2">
          Sign in to your account
        </p>
      </div>

      {/* Form */}
      <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return "Please enter a valid email";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input name="email" placeholder="Enter your email" />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) return "Minimum 8 characters required";
            return null;
          }}
        >
          <Label>Password</Label>
          <Input name="password" placeholder="Enter your password" />
          <Description className="text-xs">
            Must be at least 8 characters
          </Description>
          <FieldError />
        </TextField>

        {/* Login Button */}
        <Button
          type="submit"
          className="bg-green-900 text-white w-full"
        >
          Login
        </Button>
      </Form>

      {/* Google Login */}
      <Button
        onClick={handleGoogleSignIn}
        className="mt-4 w-full flex items-center justify-center gap-2 border"
      >
        <GrGoogle />
        Continue with Google
      </Button>

      {/* Register Link */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Don’t have an account?{" "}
        <Link
          href="/register"
          className="text-green-900 font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </Card>
  );
}