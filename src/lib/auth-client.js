import { createAuthClient } from "better-auth/react";
console.log("BASE URL:", process.env.NEXT_PUBLIC_BASE_URL);

const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "https://tiles-gallery-main.vercel.app";

export const authClient = createAuthClient({
  baseURL,
});

export const { signIn, signUp, useSession } = authClient;