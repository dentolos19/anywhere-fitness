import NavigationContainer from "@/components/navigation-container";
import ThemeContainer from "@/components/theme-container";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const font = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Anywhere Fitness",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
        <meta name="theme-color" content="#000" />
      </head>
      <body className={font.className}>
        <ThemeContainer>
          <NavigationContainer>{children}</NavigationContainer>
        </ThemeContainer>
      </body>
    </html>
  );
}