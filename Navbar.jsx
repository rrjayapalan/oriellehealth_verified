import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Constrained container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-20">

          {/* LOGO (hard constrained) */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Orielle Health Services Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* MENU (true centre lane) */}
          <div className="flex-1 flex justify-center gap-8 text-sm md:text-base text-teal font-medium">
            <Link href="/" className="hover:text-gold">Home</Link>
            <Link href="/about" className="hover:text-gold">About Us</Link>
            <a href="/#services" className="hover:text-gold">Services</a>
            <a href="/#how-it-works" className="hover:text-gold">How it works</a>
            <Link href="/faq" className="hover:text-gold">FAQ</Link>
            <a href="/#contact" className="hover:text-gold">Contact</a>
          </div>

          {/* CTA (right, non-shrinking) */}
          <a
            href="https://wa.me/60122740741"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-gold text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition text-sm md:text-base"
          >
            WhatsApp Us
          </a>

        </div>
      </div>
    </nav>
  );
}
