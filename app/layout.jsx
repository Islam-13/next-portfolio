import { Inter } from "next/font/google";
import Header from "./_components/Header";
import "./globalStyles.css";
import Footer from "./_components/Footer";
import DarkModeProvider from "./_context/DarkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s / Islam Mo'men",
    default: "Islam Mo'men",
  },
  description:
    "passionate Software Engineer with a strong foundation in web development technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className=" snap-y snap-proximity">
      <body
        className={`${inter.className} bg-[--color-grey-50] text-[--color-grey-800]`}
      >
        <DarkModeProvider>
          <Header />
          {children}
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
