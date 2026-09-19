import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omrojesara.github.io"),
  title: {
    default: "Om Rojesara — Software Engineer",
    template: "%s | Om Rojesara",
  },
  description:
    "Building AI-native products from idea to production. Software engineer specializing in web applications, backend APIs, and AI features.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI Product Engineer",
    "Laravel",
    "React",
    "PostgreSQL",
    "Om Rojesara",
    "7Span",
  ],
  authors: [{ name: "Om Rojesara", url: "https://github.com/OmRojesara" }],
  creator: "Om Rojesara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omrojesara.github.io",
    title: "Om Rojesara — Software Engineer",
    description: "Building AI-native products from idea to production.",
    siteName: "Om Rojesara",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Rojesara — Software Engineer",
    description: "Building AI-native products from idea to production.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
