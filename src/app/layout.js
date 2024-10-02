import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Antarik Space",
  description: "Explore Antarik Space, where we harness Earth observation and weather data to enhance decision-making. Our mission is to revolutionize how businesses and organizations leverage data from satellite constellations and weather forecasts. Discover the power of data-driven insights fueled by innovation, collaboration, and impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
