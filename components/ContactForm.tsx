"use client";

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
      <h3 className="font-heading text-2xl font-bold text-burgundy">
        Get in Touch
      </h3>
      <p className="text-dark/60 leading-relaxed">
        Reach out to us directly on WhatsApp or give us a call. We&apos;ll
        understand your requirements and handle everything from there.
      </p>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/923340920077"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-xl p-5 hover:bg-green-100 transition-colors"
      >
        <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.42 1.3-1.96 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.32-1.65-.63-2.9-1.26-4.79-4.19-4.93-4.39-.15-.2-1.17-1.56-1.17-2.97 0-1.42.74-2.12 1-2.41.27-.29.58-.36.78-.36.19 0 .39.01.56.01.18.01.42-.07.66.5.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14.99 2.09 1.3 2.39 1.44.29.15.46.13.64-.07.17-.2.74-.86.94-1.16.2-.29.39-.24.66-.15.27.1 1.71.81 2 .95.29.15.49.22.56.34.07.12.07.68-.17 1.36z"/>
          </svg>
        </div>
        <div>
          <p className="font-semibold text-green-800">Chat on WhatsApp</p>
          <p className="text-green-600 text-sm">0334-0920077</p>
        </div>
      </a>

      {/* Phone */}
      <a
        href="tel:03340920077"
        className="flex items-center gap-4 bg-primary-light/30 border border-primary-light rounded-xl p-5 hover:bg-primary-light/50 transition-colors"
      >
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-dark">Call Us</p>
          <p className="text-dark/50 text-sm">0334-0920077</p>
        </div>
      </a>

      {/* Email */}
      <a
        href="mailto:rabab.ali.rana.2020@gmail.com"
        className="flex items-center gap-4 bg-gold-light border border-gold/30 rounded-xl p-5 hover:bg-gold-light/80 transition-colors"
      >
        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-dark">Email Us</p>
          <p className="text-dark/50 text-sm">rabab.ali.rana.2020@gmail.com</p>
        </div>
      </a>
    </div>
  );
}
