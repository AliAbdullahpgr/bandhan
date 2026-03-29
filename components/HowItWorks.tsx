import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Contact Us",
    desc: "Reach out to Bandhan Rubab Ali via phone, WhatsApp, or our contact form to share your requirements.",
    color: "bg-primary",
  },
  {
    num: "02",
    title: "We Shortlist Matches",
    desc: "Our experienced team personally reviews and shortlists compatible families based on your preferences.",
    color: "bg-gold",
  },
  {
    num: "03",
    title: "Family Introduction",
    desc: "We coordinate meetings between both families in a respectful, comfortable setting.",
    color: "bg-primary",
  },
  {
    num: "04",
    title: "Nikkah Mubarak",
    desc: "Once both families are happy, we help facilitate the process all the way to a blessed union.",
    color: "bg-gold",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy mb-3">
          How Bandhan Works
        </h2>
        <p className="text-dark/50 mb-14 max-w-lg mx-auto">
          A simple 4-step process — we handle everything so you don&apos;t have to.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <span
                className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${step.color} text-white font-bold text-sm mb-5`}
              >
                {step.num}
              </span>
              <h3 className="font-heading text-xl font-bold text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-dark/50 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Center image */}
        <div className="mt-14 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-[16/7] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/hamid-roshaan-urgOyJqMoCc-unsplash.jpg"
              alt="Bridal bangles and mehndi — wedding traditions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
