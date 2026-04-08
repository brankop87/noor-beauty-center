import "./globals.css";
import { cookies } from "next/headers";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Noor Beauty Center",
  description: "Premium beauty studio, nail services, and training in Kragujevac.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NOOR_LOCALE")?.value === "en" ? "en" : "sr";

  return (
    <html lang={locale}>
      <body className={`${playfair.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
