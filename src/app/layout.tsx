import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJS Tailwind Course Details Page",
  description:
    "Introducing Tailwind Course Details Page, a comprehensive and user-friendly course details template designed using Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        {/*<!-- Open Graph / Facebook -->*/}
        <meta
          property="og:title"
          content="Codelaik - Expert Web Development Services"
        />
        <meta
          property="og:description"
          content="Codelaik offers top-notch web development services, specializing in creating responsive, secure, and high-performance websites. Contact us to transform your digital presence."
        />
        <meta
          property="og:image"
          content="https://codelaik.com/image/course.png"
        />
        <meta property="og:url" content="https://www.codelaik.com" />
        <meta property="og:type" content="website" />

        {/*<!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Codelaik - Expert Web Development Services"
        />
        <meta
          name="twitter:description"
          content="Codelaik offers top-notch web development services, specializing in creating responsive, secure, and high-performance websites. Contact us to transform your digital presence."
        />
        <meta
          name="twitter:image"
          content="https://codelaik.com/image/course.png"
        />

        {/* <!-- Canonical URL -->*/}
        <link rel="canonical" href="https://www.codelaik.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          {/* <FixedPlugin /> */}
        </Layout>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
