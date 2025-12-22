import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Orielle Health Services",
  description: "Clinician-led on-site wound care, clinical and nursing care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ivory text-teal">
        <main className="min-h-screen flex flex-col font-sans">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
