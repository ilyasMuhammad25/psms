import Providers from "./providers";
import "./globals.css";
import { sora } from "./fonts";

export const metadata = {
    title: {
        template: "PSMS Medan",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={sora.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
