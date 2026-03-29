"use client";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gold-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy mb-3">
          Our Newsletter
        </h2>
        <p className="text-dark/50 mb-8">
          Join our newsletter to get every update of our website, new profiles,
          and success stories.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-full border border-primary-light bg-white text-dark placeholder:text-dark/40 outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
