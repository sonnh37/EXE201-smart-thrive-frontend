import React, {Suspense} from "react";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div suppressHydrationWarning={true} className={inter.className}>
                <Suspense>{children}</Suspense>
            </div>
        </div>
    );
}
