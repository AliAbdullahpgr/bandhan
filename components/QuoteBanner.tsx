export default function QuoteBanner() {
  return (
    <section className="bg-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Decorative quotes */}
        <svg
          className="w-10 h-10 mx-auto mb-6 text-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>

        <blockquote className="font-heading text-xl sm:text-2xl text-text-dark/80 leading-relaxed italic">
          &ldquo;Marry the single people from among you and the righteous among
          your male and female servants. If you are poor, Allah (SWT) will make
          you rich through His favour; and Allah (SWT) is Bountiful,
          All-Knowing.&rdquo;
        </blockquote>
        <p className="mt-4 text-gold font-semibold text-sm">
          &mdash; Surah An-Nur (24:32)
        </p>
      </div>

      {/* Floral accents */}
      <svg
        className="absolute top-4 right-8 w-24 h-24 opacity-25"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="70" cy="30" r="15" fill="#F4D2DE" />
        <circle cx="85" cy="50" r="8" fill="#D4A843" opacity="0.5" />
      </svg>
      <svg
        className="absolute bottom-4 left-8 w-20 h-20 opacity-25"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="30" cy="70" r="12" fill="#C0396B" opacity="0.3" />
        <circle cx="15" cy="50" r="8" fill="#F4D2DE" />
      </svg>
    </section>
  );
}
