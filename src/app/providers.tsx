"use client";

import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem={true}
      themes={["light", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}
