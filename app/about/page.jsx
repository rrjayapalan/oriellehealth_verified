export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-teal">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-b from-white via-[#f5fbfb] to-white px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-teal mb-6">
          <h1 className="text-4xl font-serif mb-6 text-teal">
  About Orielle Health Services
</h1>

<p className="max-w-3xl mx-auto text-lg md:text-xl text-teal/80 leading-relaxed">
  Doctor-led home-based wound care and nursing services in Malaysia, providing safe, personalised, and evidence-based care in the comfort of your home.
</p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-ivory px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="bg-white shadow-lg rounded-2xl p-10 border-l-4 border-gold">
            <h2 className="text-2xl font-serif mb-4 text-teal">Our Mission</h2>
            <p className="text-teal/80 leading-relaxed">
              Healing is more than just physical—it's personal. At Orielle, our mission is to bring expert level wound care and professional nursing support to the patient’s home. We focus on safety, precision, and compassionate support — reducing complications, improving healing outcomes, and giving every family the confidence that their loved one is receiving the best care. 
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-2xl p-10 border-l-4 border-teal">
            <h2 className="text-2xl font-serif mb-4 text-teal">Our Vision</h2>
            <p className="text-teal/80 leading-relaxed">
              Our vision is to set a new national standard for home-based wound care in Malaysia. We aim to build a service known for clinical excellence, accessibility, and trust — a leader that elevates outcomes, shapes best practices, and ensures every patient can heal safely and with dignity.
            </p>
          </div>

        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h2 className="text-3xl font-serif text-teal mb-6">Our Story</h2>
          <p className="text-lg text-teal/80 leading-relaxed mb-6">
            ORIELLE Health Services was created from a simple belief — that healing should never be rushed, cold, or impersonal. It should feel safe, guided and deeply human.
Founded by a doctor with advanced training in wound care and her team of dedicated clinical nurses, ORIELLE brings advanced wound care into the home — where comfort, recovery, and dignity  walk hand in hand. Every service we provide is shaped by one promise: to care for each patient as if they were family, and every wound as if it truly mattered.
Whether you are living with a chronic wound, healing after surgery, or unsure how to care for your wound safely, we are here to support you  - every step of the way.
Our promise is simple: clinical excellence, delivered with heart.
          </p>

        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 px-6 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-teal text-center mb-12">
            Our Clinical Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            
            <div className="bg-white shadow-md rounded-2xl p-8 text-center">
              <h3 className="text-xl font-serif text-gold mb-3">
                Evidence-Based Care
              </h3>
              <p className="text-teal/80 leading-relaxed">
                Every dressing, assessment, and intervention follows current guidelines
                and best practices in wound management.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8 text-center">
              <h3 className="text-xl font-serif text-gold mb-3">
                Doctor-Led Service
              </h3>
              <p className="text-teal/80 leading-relaxed">
                All care is overseen by a medical doctor to ensure accurate assessment,
                safe treatment decisions, and optimal healing outcomes.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8 text-center">
              <h3 className="text-xl font-serif text-gold mb-3">
                Compassionate Nursing
              </h3>
              <p className="text-teal/80 leading-relaxed">
                Care is delivered with empathy, professionalism, and respect for each
                patient’s comfort and dignity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-teal mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-10 bg-ivory rounded-2xl shadow-md">
              <h3 className="text-xl font-serif text-gold mb-4">Safety</h3>
              <p className="text-teal/80">
                Safety
Every decision we make is guided by one priority — your safety. From meticulous technique to thoughtful follow-up, your well-being comes first, always.

              </p>
            </div>

            <div className="p-10 bg-ivory rounded-2xl shadow-md">
              <h3 className="text-xl font-serif text-gold mb-4">Integrity</h3>
              <p className="text-teal/80">
                Integrity
We practice with honesty, ethics, and transparency — building trust through every conversation, decision, and action.

              </p>
            </div>

            <div className="p-10 bg-ivory rounded-2xl shadow-md">
              <h3 className="text-xl font-serif text-gold mb-4">Respect</h3>
              <p className="text-teal/80">
                Respect
We honour every patient with dignity, compassion, and understanding — because healing begins with being seen, heard, and valued. To us, every patient is family.

              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

