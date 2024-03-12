import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNavbar } from "@/components/navbar/main-navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AngolFlies Araucanía",
  description: "Artículos de pesca con mosca en Angol, Araucanía.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} dark:bg-gray-800 dark:text-white`}>
        <main className="min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
            <MainNavbar />
              {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
