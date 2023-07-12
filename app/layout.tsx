import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Providers from "./providers";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "FatimaGames",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} dark:bg-[#262323] bg-[#e5e5e5]`}
            >
                <Providers>
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
