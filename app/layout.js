import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata = {
  title: "",
  keywords: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
