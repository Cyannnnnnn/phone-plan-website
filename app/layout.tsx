import "./globals.css";
import Navbar from "./components/Navbar";
import { Titillium_Web } from "next/font/google";



const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body className={titillium.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}