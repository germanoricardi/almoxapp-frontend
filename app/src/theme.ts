'use client';
import { createTheme } from '@mui/material/styles';
import { Geist } from "next/font/google";

const geistSans = Geist({
  display: 'swap',
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  typography: {
    fontFamily: geistSans.style.fontFamily
  },
});

export default theme;
