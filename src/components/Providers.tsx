"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import {
  ThemeProvider,
  ThemeProvider as NextThemesProvider,
} from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children, ...props }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
