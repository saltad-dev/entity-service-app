import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Wagmi",
    description: "Generated by create-wagmi",
};

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{props.children}</Providers>
            </body>
        </html>
    );
}
