"use client";
import React, {useEffect, useState} from "react";
import {Inter} from "next/font/google";
import "./globals.css";
import Head from "next/head";
import {Toaster} from "sonner";
import {GoogleOAuthProvider} from "@react-oauth/google";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID_GOOGLE;
    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            />
        </Head>
        <body suppressHydrationWarning={true}>
        <Toaster position="bottom-right"/>
        <GoogleOAuthProvider clientId={clientId ?? ""}>
            {isClient && <main>{children}</main>}
        </GoogleOAuthProvider>
        </body>
        </html>
    );
}
