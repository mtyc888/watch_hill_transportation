import type { AppProps } from "next/app";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-body",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${cormorant.variable} ${outfit.variable} max-w-[100vw] overflow-x-clip`}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}