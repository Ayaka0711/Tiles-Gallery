"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
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

export default function SignUpPage() {
  const router = useRouter();

  // ✅ Handle Email Sign Up
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.photo.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image, // ✅ added photo URL
    });

    if (error) {
      return toast.error(error.message || "Something went wrong");
    }

    toast.success("Account created successfully!");

    setTimeout(() => {
      router.push("/signin"); // ✅ redirect to login page
    }, 1500);
  };

  // ✅ Handle Google Login
  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", // ✅ redirect to Home page
    });

    if (error) {
      toast.error("Google sign-in failed");
    }
  };

  return (
    <Card className="border mx-auto w-[420px] py-8 px-6 mt-10 shadow-xl rounded-2xl bg-white">
      <Toaster position="top-center" richColors />

      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-900">
          Create Account
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Sign up to get started
        </p>
      </div>

      {/* Form */}
      <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>

        {/* Name */}
        <TextField isRequired name="name">
          <Label>Full Name</Label>
          <Input name="name" placeholder="Enter your full name" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Enter a valid email";
            }
          }}
        >
          <Label>Email</Label>
          <Input name="email" placeholder="Enter your email" />
          <FieldError />
        </TextField>

        {/* Photo URL */}
        <TextField isRequired name="photo">
          <Label>Photo URL</Label>
          <Input
            name="photo"
            placeholder="Enter your photo URL"
          />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Minimum 8 characters required";
            }
            if (!/[A-Z]/.test(value)) {
              return "Must include an uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Must include a number";
            }
          }}
        >
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            placeholder="Create password"
          />
          <Description>
            At least 8 characters, 1 uppercase, 1 number
          </Description>
          <FieldError />
        </TextField>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            className="bg-green-900 text-white w-full"
          >
            Register
          </Button>

          <Button
            type="reset"
            variant="secondary"
            className="w-full bg-white text-green-800 hover:bg-green-50"
          >
            Reset
          </Button>
        </div>
      </Form>

      {/* Divider */}
      <div className="flex items-center gap-2 my-5">
        <div className="h-px bg-gray-300 w-full" />
        <span className="text-xs text-gray-400">OR</span>
        <div className="h-px bg-gray-300 w-full" />
      </div>

      {/* Google Sign In */}
      <Button
        onClick={handleGoogleSignIn}
        className="w-full border flex items-center justify-center gap-2"
      >
        <GrGoogle />
        Continue with Google
      </Button>

      {/* Login Redirect */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="text-green-900 font-medium hover:underline"
        >
          Sign In
        </Link>
      </p>
    </Card>
  );
}