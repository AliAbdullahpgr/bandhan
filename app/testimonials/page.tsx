import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | CEO Rabab Ali at Bandhan",
  description: "Read success stories from families who found their perfect match through Bandhan.",
};

const testimonials = [
  {
    name: "Ahmed & Fatima",
    location: "Karachi",
    year: "2024",
    quote:
      "Bandhan helped us find each other when our families were looking for the right match. The process was smooth, respectful, and truly Islamic in spirit. We couldn't be happier.",
  },
  {
    name: "Hassan & Ayesha",
    location: "Lahore",
    year: "2024",
    quote:
      "We are grateful to CEO Rabab Ali at Bandhan for connecting our families. The team was very supportive and made the entire process comfortable for both sides.",
  },
  {
    name: "Bilal & Sana",
    location: "Islamabad",
    year: "2023",
    quote:
      "What I loved about Bandhan was the privacy and family-first approach. Our parents were involved from day one, and it made everything so much easier.",
  },
  {
    name: "Usman & Mariam",
    location: "Karachi",
    year: "2023",
    quote:
      "After trying many platforms, Bandhan stood out because of their personal attention and verified profiles. We found our perfect match within weeks!",
  },
  {
    name: "Ali & Zainab",
    location: "Karachi",
    year: "2024",
    quote:
      "The whole experience was very respectful. They understood our family's requirements and matched us with the right person. JazakAllah to the Bandhan team.",
  },
  {
    name: "Tariq & Nadia",
    location: "Hyderabad",
    year: "2023",
    quote:
      "Bandhan made what can be a stressful process feel natural and dignified. Our families connected immediately and everything fell into place beautifully.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream/30 to-ivory py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-burgundy mb-4">
            Success Stories
          </h1>
          <p className="text-text-dark/60 text-lg max-w-xl mx-auto">
            Real stories from real families. See how Bandhan has brought
            happiness to homes across Pakistan.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-burgundy"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">{t.name}</p>
                    <p className="text-xs text-text-dark/40">
                      {t.location} &middot; {t.year}
                    </p>
                  </div>
                </div>
                <p className="text-text-dark/60 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video section placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-burgundy mb-4">
            Video Testimonials
          </h2>
          <p className="text-text-dark/50 mb-10">
            Coming soon — watch families share their Bandhan experience.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="aspect-video rounded-2xl bg-ivory flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-ivory flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-8 h-8 text-burgundy ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-text-dark/40 text-sm">Video coming soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
