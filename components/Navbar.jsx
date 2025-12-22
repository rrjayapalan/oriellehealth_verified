import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="header-enhanced flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-8">
        
        {/* Logo → Home */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Orielle Health Services Logo"
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Menu links */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-sm md:text-base text-teal font-medium">
          <Link href="/" className="hover:text-gold">Home</Link>
          <Link href="/about" className="hover:text-gold">About Us</Link>

          {/* Homepage sections — NOTE the /# prefix */}
          <a href="/#services" className="hover:text-gold">Services</a>
          <a href="/#contact" className="hover:text-gold">Contact</a>
        </div>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/60122740741"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition text-sm md:text-base whitespace-nowrap"
        >
          WhatsApp Us
        </a>
      </div>
    </nav>
  );
}
