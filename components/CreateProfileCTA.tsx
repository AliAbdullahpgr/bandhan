import Link from "next/link";
import Image from "next/image";

export default function CreateProfileCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/khadija-yousaf-lKwp3-FQomY-unsplash.jpg"
              alt="Couple holding hands — mehndi and wedding details"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Karachi-Based Service
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy mb-4">
              We Find the<br />Right Match for You
            </h2>
            <p className="text-dark/60 leading-relaxed mb-8">
              At Bandhan Rubab Ali, you don&apos;t have to search through
              profiles or manage anything yourself. Share your requirements with
              us and our experienced team personally handles the entire
              matchmaking process — from shortlisting compatible families to
              coordinating meetings.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
