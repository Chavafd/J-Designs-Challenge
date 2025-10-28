import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Preloader } from "@/components/preloader";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sabor en Ruedas - Gourmet Food Truck",
  description: "Experience authentic street food elevated to gourmet perfection. Fresh ingredients, bold flavors, and unforgettable meals on wheels.",
  keywords: ["food truck", "gourmet", "street food", "catering", "mobile restaurant"],
  authors: [{ name: "Sabor en Ruedas" }],
  openGraph: {
    title: "Sabor en Ruedas - Gourmet Food Truck",
    description: "Experience authentic street food elevated to gourmet perfection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
