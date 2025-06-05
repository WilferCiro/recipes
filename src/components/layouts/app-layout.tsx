"use client";
import { Toaster } from "sonner";
import Footer from "../templates/footer";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Footer />
      <Toaster position="top-center" />
    </>
  );
};

export default AppLayout;
