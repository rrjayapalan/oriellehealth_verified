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
            Orielle Health Services was founded by a doctor and nurse team who saw the growing
            need for safe, personalised home-based wound care in Malaysia. Many patients struggle
            with mobility, access to clinics, or require consistent follow-up to ensure proper
            healing. But quality wound care shouldn’t require long travel times or stressful
            hospital visits.
          </p>
          <p className="text-lg text-teal/80 leading-relaxed">
            With this belief, Orielle was created — to bring clinical-grade wound management and
            nursing expertise directly to the patient’s home, blending convenience with the highest
            standards of professional care.
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
                Every dressing choice, assessment, and intervention follows current clinical
                guidelines and best practices in wound management.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8 text-center">
              <h3 className="text-xl font-serif text-gold mb-3">
                Doctor-Led Service
              </h3>
              <p className="text-teal/80 leading-relaxed">
                Care is overseen by a qualified medical doctor ensuring accurate assessment,
                appropriate treatment planning, and safe clinical decisions.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8 text-center">
              <h3 className="text-xl font-serif text-gold mb-3">
                Compassionate Nursing
              </h3>
              <p className="text-teal/80 leading-relaxed">
                Services are delivered with empathy, professionalism, and a deep respect for the
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
                Patient safety is our top priority — from sterile techniques to clinical
                monitoring and follow-up.
              </p>
            </div>

            <div className="p-10 bg-ivory rounded-2xl shadow-md">
              <h3 className="text-xl font-serif text-gold mb-4">Integrity</h3>
              <p className="text-teal/80">
                Honest, ethical, and transparent care in every interaction and clinical decision.
              </p>
            </div>

            <div className="p-10 bg-ivory rounded-2xl shadow-md">
              <h3 className="text-xl font-serif text-gold mb-4">Respect</h3>
              <p className="text-teal/80">
                Treating every patient with kindness, dignity, and understanding — always.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6 bg-ivory">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-teal mb-12">
            The Team Behind Orielle
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Doctor Profile */}
            <div className="bg-white shadow-lg rounded-2xl p-10">
              <div className="h-40 w-40 mx-auto bg-teal/10 rounded-full mb-6" />
              <h3 className="text-2xl font-serif text-teal mb-2">
                Dr. [Your Name]
              </h3>
              <p className="text-teal/70 mb-4">
                Consultant Neurosurgeon | Founder & Clinical Lead
              </p>
              <p className="text-teal/80 leading-relaxed">
                Short biography goes here. You may include areas of expertise, training background,
                and your passion for delivering safe, accessible wound care.
              </p>
            </div>

            {/* Nurse Profile */}
            <div className="bg-white shadow-lg rounded-2xl p-10">
              <div className="h-40 w-40 mx-auto bg-teal/10 rounded-full mb-6" />
              <h3 className="text-2xl font-serif text-teal mb-2">
                [Nurse’s Name]
              </h3>
              <p className="text-teal/70 mb-4">
                Senior Nurse | Wound Care Specialist
              </p>
              <p className="text-teal/80 leading-relaxed">
                Short biography goes here. Include qualifications, wound-care expertise, and
                commitment to patient-centred nursing.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
