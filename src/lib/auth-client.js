import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: "https://tiles-gallery-ecommerce.vercel.app/"
})
export const { signIn, signUp, useSession } = createAuthClient()