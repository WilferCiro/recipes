"use client";
import { ThemeProvider } from "./theme-provider";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";

interface Props {
  children: React.ReactNode;
}
const AllProviders = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ProgressProvider height="4px" color="#9810fa">
        {children}
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default AllProviders;
