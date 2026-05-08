Project Name : Tiles Gallery
Live Link
Check out the live application here:    https://tiles-gallery-main.vercel.app

Home Page
Banner with "Discover Your Perfect Aesthetic"
Marquee section (new arrivals & updates)
Featured Tiles (Top 4 from server)
"Browse Now" button → All Tiles page

Next.js App Router
Signup/Login page 
logout page 
profile
Auth client integration 
Deployment 

Tech Stack
Frontend: React.js / Next.js 
Styling: Tailwind CSS / CSS Modules
Deployment: Vercel
Design Inspiration: Modern Minimalist Aesthetic
API Integration
heroui 



Image Consistency
Price Formatting
Activate Windows Watermark
**Frontend Framework:** Next.js / React (for fast, SEO-friendly rendering)
**Authentication:** Firebase Auth or NextAuth.js (as seen with the "Logout" and "My Profile" features).
**Styling:** Tailwind CSS (for the responsive grid layout and modern hero section).
User Authentication: Since the "Logout" button and profile picture are visible, your project requires a Backend/Database (MongoDB) to store user sessions.


Home banner
Marquee
Featured tiles (top 4)
Search functionality
Tile details page
Responsive design
name update
image update
loading spinner
error handling
/not-found
tiles search 
contact page




npx create-next-app@latest 
cd my-app
npm run dev
npm i @heroui/styles @heroui/react

{
  "name": "tiles-gallery-ecommerce",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@better-auth/mongo-adapter": "^1.6.9",
    "@gravity-ui/icons": "^2.18.0",
    "@heroui/react": "^3.0.3",
    "@heroui/styles": "^3.0.3",
    "babel-plugin-react-compiler": "^1.0.0",
    "better-auth": "^1.6.9",
    "lucide-react": "^1.14.0",
    "mongodb": "^7.2.0",
    "next": "16.2.4",
    "react": "19.2.4",
    "react-aria": "^3.48.0",
    "react-aria-components": "^1.17.0",
    "react-dom": "19.2.4",
    "react-fast-marquee": "^1.6.5",
    "react-icons": "^5.6.0",
    "react-stately": "^3.46.0",
    "sonner": "^2.0.7"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "16.2.4",
    "tailwindcss": "^4"
  }
}





