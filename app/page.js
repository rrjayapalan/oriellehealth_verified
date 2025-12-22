export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">

{/* HERO / HOME SECTION */}
<section
  id="home"
  className="relative flex flex-col items-center justify-center text-center 
             py-40 md:py-52 px-6 overflow-hidden bg-white"
>
  {/* Background image + overlays */}
  <div className="hero-bg" />
  <div className="hero-overlay" />
  <div className="hero-vignette" />

  {/* Content */}
  <div className="relative z-10 max-w-3xl">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-tight">
      Doctor-led Home-Based Wound Care &amp; Nursing Services
    </h1>

    <p className="text-base md:text-lg lg:text-xl text-slate-700 mb-10 md:mb-12 leading-relaxed">
      Personalised expert wound care and compassionate nursing support in
      the comfort and privacy of your home.
    </p>

    {/* CTA buttons */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
      {/* Learn More → About page */}
      <a
        href="/about"
        className="w-56 md:w-60 text-center px-8 py-3 rounded-full text-base md:text-lg font-medium 
                   bg-white text-teal border-2 border-gold shadow-md 
                   hover:bg-gold hover:text-white hover:shadow-lg 
                   transition-all duration-300"
      >
        Learn More
      </a>

      {/* Book Appointment → WhatsApp */}
      <a
        href="https://wa.me/60122740741"
        target="_blank"
        rel="noopener noreferrer"
        className="w-56 md:w-60 text-center px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium 
                   bg-gold text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.45)] 
                   hover:scale-105 transition-all duration-300"
      >
        Book a Wound Assessment
      </a>
    </div>
  </div>
</section>


    {/* SERVICES SECTION */}
<section id="services" className="py-24 bg-ivory text-center">
  <h2 className="text-4xl font-serif mb-14 text-teal">Our Services</h2>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-lg p-10 text-left hover:shadow-xl transition">
      <h3 className="text-2xl font-serif mb-2 text-gold border-b pb-2">
        Wound Care Services
      </h3>
      <p className="mt-4 mb-4 text-sm md:text-base text-slate-700 font-medium">
        Wound Care Services
      </p>
      <ul className="list-disc list-inside space-y-2 text-teal">
        <li>Professional wound assessment and management</li>
        <li>Advanced care for chronic and complex wounds</li>
        <li>Modern dressing techniques</li>
        <li>Wound debridement</li>
        <li>Post-operative wound care</li>
        <li>Nutritional guidance for wound healing</li>
        <li>Prevention and management of pressure injuries</li>
        <li>Education for safe wound healing at home</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-lg p-10 text-left hover:shadow-xl transition">
      <h3 className="text-2xl font-serif mb-6 text-gold border-b pb-2">
        Home Nursing Services
      </h3>
      <ul className="list-disc list-inside space-y-2 text-teal">
        <li>Urinary catheter care and replacement</li>
        <li>Urine bag change and hygiene care</li>
        <li>Enteral feeding tube (nasogastric) care and replacement</li>
        <li>Tracheostomy wound care and dressing</li>
      </ul>
    </div>
  </div>
</section>

<section id="how-it-works" className="py-24 bg-white text-center px-6">
  <h2 className="text-4xl font-serif mb-14 text-teal">How It Works</h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div className="bg-ivory rounded-2xl shadow-md p-8">
      <h3 className="text-lg font-semibold text-teal mb-2">1. Contact / Book</h3>
      <p className="text-teal/80">Reach us via WhatsApp or phone to arrange an appointment.</p>
    </div>

    <div className="bg-ivory rounded-2xl shadow-md p-8">
      <h3 className="text-lg font-semibold text-teal mb-2">2. Home Assessment</h3>
      <p className="text-teal/80">A structured clinical assessment is performed at your home.</p>
    </div>

    <div className="bg-ivory rounded-2xl shadow-md p-8">
      <h3 className="text-lg font-semibold text-teal mb-2">3. Care Plan &amp; Follow-Up</h3>
      <p className="text-teal/80">Personalised plan, dressings, education, and follow-up.</p>
    </div>
  </div>
</section>


      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-20 text-center bg-gradient-to-br from-teal via-turquoise to-teal text-white"
      >
        <h2 className="text-4xl font-serif mb-8">Contact Us</h2>
        <p className="mb-4 text-white/90">
          On-site services available by appointment only.
        </p>
        <p className="mb-2">
          <span className="font-semibold text-gold">WhatsApp:</span>{" "}
          <a
            href="https://wa.me/60122740741"
            className="underline hover:text-gold"
          >
            +6012 274 0741
          </a>
        </p>
        <p>
          <span className="font-semibold text-gold">Email:</span>{" "}
          <a
            href="mailto:oriellehealthservices@gmail.com"
            className="underline hover:text-gold"
          >
            oriellehealthservices@gmail.com
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-white text-center text-sm text-teal border-t">
        © {new Date().getFullYear()} Orielle Health Services. All rights
        reserved.
      </footer>
    </main>
  );
}
