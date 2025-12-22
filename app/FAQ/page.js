export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-teal">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif mb-10">Frequently Asked Questions</h1>

        <div className="space-y-8 text-teal/80">
          <div>
            <h2 className="text-lg font-semibold text-teal">How are fees determined?</h2>
            <p>
              Fees vary depending on wound complexity, required procedures, and visit frequency.
              An estimate will be discussed after the initial assessment.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-teal">Do you provide home visits?</h2>
            <p>Yes. Services are provided by appointment at the patient’s home.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-teal">How do I book a wound assessment?</h2>
            <p>Use the WhatsApp button or contact details to arrange an appointment.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
