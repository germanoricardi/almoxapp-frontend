import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./src/theme";
import ModeSwitch from "./src/components/ModeSwitch";

export const metadata: Metadata = {
  title: "AlmoxApp",
  description: "Sistema moderno de gestão de estoque para organizar, controlar e otimizar operações de almoxarifado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* <ModeSwitch /> */}
            {children}
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
