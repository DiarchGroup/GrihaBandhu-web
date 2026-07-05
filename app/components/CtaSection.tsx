import ContactForm from "./ContactForm";

export default function CtaSection() {
  return (
    <section id="contact" className="border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-16 lg:px-10 lg:pt-24">
        <h2
          className="font-display font-black uppercase leading-[0.85] tracking-tight text-orange-600"
          style={{ fontSize: "clamp(3.5rem, 14vw, 13rem)" }}
        >
          Contact us
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-12 pb-16 lg:mt-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:pb-20">
          {/* Info column */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-body text-sm font-semibold text-ink">
                Head office
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                H.No.-28, opp. Tapasya Complex,
                <br />
                Basant Vihar Colony, Anandpuri,
                <br />
                Patna, Bihar 800001
              </p>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-ink">
                Phone
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                <a href="tel:+919229266955" className="hover:text-ink">
                  +91 92292 66955
                </a>
              </p>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-ink">
                Office hours
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                Monday – Saturday
                <br />
                9 AM – 6 PM
              </p>
            </div>

            <div className="overflow-hidden border border-line">
              <iframe
                title="Griha Bandhu head office — Anandpuri, Patna"
                src="https://www.google.com/maps?q=Basant+Vihar+Colony,+Anandpuri,+Patna,+Bihar+800001&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale"
              />
            </div>
          </div>

          {/* Form column */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
