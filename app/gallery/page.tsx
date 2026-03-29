import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Bandhan Rubab Ali",
  description: "See our success stories — couples matched through Bandhan Rubab Ali matchmaking service.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream/30 to-ivory py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-burgundy mb-4">
            Our Gallery
          </h1>
          <p className="text-text-dark/60 text-lg max-w-xl mx-auto">
            A glimpse into Bandhan International Marriage Bureau &mdash; our
            successful matches, brand presence, and recognition including our
            certification from The Nikkah Matrimony International Marriage.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
