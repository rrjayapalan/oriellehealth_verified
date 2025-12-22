import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        {/* Fixed navbar height */}
        <div className="h-20 grid grid-cols-[auto,1fr,auto] items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Orielle Health Services Logo"
              className="h-12 w-auto max-w-[160px] object-contain block"
            />
          </Link>

          {/* Menu (protected center lane) */}
          <div className="justify-self-center">
            <div className="flex items-center gap-6 md:gap-8 text-sm md:text-base text-teal font-medium whitespace-nowrap">
              <Link href="/" className="hover:text-gold">Home</Link>
              <Link href="/about" className="hover:text-gold">About Us</Link>
              <a href="/#services" className="hover:text-gold">Services</a>
              <a href="/#how-it-works" className="hover:text-gold">How it works</a>
              <Link href="/faq" className="hover:text-gold">FAQ</Link>
              <a href="/#contact" className="hover:text-gold">Contact</a>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/60122740741"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition text-sm md:text-base whitespace-nowrap"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
}
