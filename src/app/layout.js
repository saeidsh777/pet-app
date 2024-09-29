import { Nunito } from "next/font/google";
import Header from "@/Components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className} id="body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}