import StoreProvider from "./redux/StoreProvider";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Roboto } from "next/font/google";
import Footer from "./components/Footer";
import { Suspense } from "react";
const roboto = Roboto({ variable: "--font-roboto-sans" , subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased`}>
      <body className="flex flex-col min-h-screen font-sans bg-white text-black">
        <Suspense fallback={<div>Loading...</div>}>
          
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
        <StoreProvider>
         <main className="flex-grow">{children}</main>
          <Footer />
        </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
