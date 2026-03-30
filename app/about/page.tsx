import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bandhan Rabab Ali",
  description: "Learn about CEO Rabab Ali's mission at Bandhan International Marriage Bureau to connect families through trusted matchmaking in Karachi.",
};

const values = [
  {
    title: "Family First",
    desc: "We believe marriage is a union of families. Parents and guardians are involved from the very beginning.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Islamic Values",
    desc: "Our matchmaking process is rooted in Islamic principles, ensuring a halal and respectful experience.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Privacy & Trust",
    desc: "Your information is safe with us. We share details only with your explicit consent.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Verified Profiles",
    desc: "Every profile goes through our verification process to ensure genuine and serious candidates.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream/30 to-ivory py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-burgundy mb-6">
            About Bandhan
          </h1>
          <p className="text-text-dark/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Bandhan International Marriage Bureau, led by CEO Rabab Ali, is a
            trusted matrimonial service based in Karachi, Pakistan. We connect
            families with sincerity, respect, and Islamic values &mdash;
            &ldquo;Rishta kahin ka bhi ho, hum aap ke liye dhoond nikalain ge.&rdquo;
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-burgundy mb-4">
                Our Mission
              </h2>
              <p className="text-text-dark/60 leading-relaxed mb-4">
                At Bandhan, our mission is to take the stress out of finding a
                life partner. We personally handle the entire matchmaking
                process — from understanding your family&apos;s requirements to
                shortlisting compatible matches and coordinating introductions.
              </p>
              <p className="text-text-dark/60 leading-relaxed">
                Founded by CEO Rabab Ali in Karachi, Bandhan has helped over a
                thousand families find their perfect match. With deep roots in
                the local community and years of experience, we offer a
                personal, hands-on service that no app or website can replace.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-cream/40 to-cream flex items-center justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="80" r="40" fill="#F4D2DE" />
                  <circle cx="100" cy="70" r="28" fill="#FFFFFF" />
                  <path d="M85 65c0-12 30-12 30 0" stroke="#2D1A1A" strokeWidth="1.5" fill="none" />
                  <circle cx="93" cy="72" r="2" fill="#2D1A1A" />
                  <circle cx="107" cy="72" r="2" fill="#2D1A1A" />
                  <path d="M95 80c3 3 7 3 10 0" stroke="#2D1A1A" strokeWidth="1.5" fill="none" />
                  <rect x="75" y="120" width="50" height="60" rx="18" fill="#C0396B" opacity="0.2" />
                  <path d="M90 95c0-3 4-5 6-3s6 0 6 3-6 8-6 8-6-5-6-8z" fill="#D4A843" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-burgundy text-center mb-14">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-ivory/50 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-6 h-6 text-burgundy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={v.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-text-dark mb-2">
                  {v.title}
                </h3>
                <p className="text-text-dark/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-burgundy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "5+", label: "Years of Service" },
              { num: "4,500+", label: "Profiles Registered" },
              { num: "1,190+", label: "Successful Matches" },
              { num: "100%", label: "Family Involvement" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-bold text-gold">
                  {s.num}
                </p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
