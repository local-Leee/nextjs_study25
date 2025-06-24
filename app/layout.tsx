import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
    title: "study-log",
    description: "study-log",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <Providers>
                    {/* min-h-screen으로 전체 높이 보장, grid로 3개 영역 분할 */}
                    <div className="flex min-h-screen flex-col">
                        {/* Header 영역 */}
                        <Header />
                        {/* Main 영역 */}
                        <main className="flex-1 flex flex-col items-center text-center">
                            {children}
                        </main>
                        {/* Footer 영역 */}
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
