import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import BodySection from "../components/BodySection";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Dhananjay Jadhav - Portfolio",
  description: "Portfolio app of Dhananjay Jadhav",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <BodySection>{children}</BodySection>

        {/* <StairTransition />
        <PageTransition> {children}</PageTransition> */}
      </body>
    </html>
  );
}
