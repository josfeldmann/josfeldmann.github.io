import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/ui/navbar";
import Footer from "./components/ui/Footer";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://novarangers.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html lang="en">

      <NavBar/>

      <body>
      <div className="container mt-5">
        {children}
        </div>
      </body>

      <Footer/>
    </html>
  );
}
