import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello LLM - Chat with AI",
  description: "A web interface for chatting with OpenAI-compatible LLMs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
