import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Bandhan Rabab Ali",
  description: "Get in touch with CEO Rabab Ali at Bandhan International Marriage Bureau for marriage matchmaking services in Karachi.",
};


export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream/30 to-ivory py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-burgundy mb-4">
            Contact Us
          </h1>
          <p className="text-text-dark/60 text-lg max-w-xl mx-auto">
            Ready to start your journey? Get in touch with CEO Rabab Ali and we&apos;ll
            help you find the perfect match.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-gradient-to-br from-cream/20 to-cream flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-burgundy/30 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-text-dark/30 text-sm">
                      Karachi, Sindh, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
