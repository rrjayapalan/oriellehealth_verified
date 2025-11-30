export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-teal">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-b from-white via-[#f5fbfb] to-white px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-teal mb-6">
          About Orielle Health Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-teal/80 leading-relaxed">
          A doctor-led home wound care and nursing service committed to providing evidence-based,
          personalised, and compassionate care in the comfort of your home.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-ivory px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="bg-white shadow-lg rounded-2xl p-10 border-l-4 border-gold">
            <h2 className="text-2xl font-serif mb-4 text-teal">Our Mission</h2>
            <p className="text-teal/80 leading-relaxed">
              To deliver safe, high-quality wound care and nursing services at home through
              clinical expertise, compassion, and evidence-based practice — empowering patients to
              heal comfortably, confidently, and with dignity.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-2xl p-10 border-l-4 border-teal">
            <h2 className="text-2xl font-serif mb-4 text-teal">Our Vision</h2>
            <p className="text-teal/80 leading-relaxed">
              To become the leading provider of home-based clinical and wound-care services in
              Malaysia, setting the standard for safety, accessibility, and excellence in
              patient-centred healthcare.
            </p>
          </div>

        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h2 className="text-3xl font-serif text-teal mb-6">Our Story</h2>
          <p className="text-lg text-teal/80 leading-relaxed mb-6">
            Orielle Health Services was founded to meet the growing need for safe,
            personalised home-based wound care in Malaysia. Many patients struggle
            with mobility or require consistent follow-up, yet quality wound care
            should not require long travel times or stressful clinic visits.
          </p>
          <p className="text-lg text-teal/80 leading-relaxed">
            Orielle was created to bring clinical-grade wound management and nursing
            expertise directly to the patient’s home, combining convenience with the
            highest standard of compassionate, professional care.
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
                Patient safety drives every clinical decision — from sterile technique
                to continuous monitoring and follow-up.
              </p>
            </div>

            <div className="p-10 bg-ivory rounded-2xl shadow-md">
              <h3 className="text-xl font-serif text-gold mb-4">Integrity</h3>
              <p className="text-teal/80">
                Honest, ethical, and transparent clinical care in every interaction.
              </p>
            </div>

            <div className="p-10 bg-ivory rounded-2xl shadow-md">
              <h3 className="text-xl font-serif text-gold mb-4">Respect</h3>
              <p className="text-teal/80">
                Treating every patient with dignity, kindness, and genuine understanding.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

