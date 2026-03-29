"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery/IMG-20260327-WA0019.jpg",
    alt: "Bandhan Marriage Bureau - Award & Certificate",
    category: "awards",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0008.jpg",
    alt: "Find Your Soulmate With Bandhan",
    category: "couples",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0009.jpg",
    alt: "We Do The Best Suitable Matching For You",
    category: "couples",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0010.jpg",
    alt: "Rishta Kahin Ka Bhi Ho - Bandhan",
    category: "couples",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0011.jpg",
    alt: "Relationships Are Made In The Sky",
    category: "couples",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0012.jpg",
    alt: "Marriage Is A Sunnah - Bandhan Couple",
    category: "couples",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0013.jpg",
    alt: "A Simple & Secure Matrimonial Service",
    category: "couples",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0016.jpg",
    alt: "Bandhan - A Simple & Secure Matrimonial Service",
    category: "couples",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0017.jpg",
    alt: "Bandhan Marriage Bureau - Urdu",
    category: "brand",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0018.jpg",
    alt: "Khush Aamdeed - Bandhan Marriage Bureau",
    category: "brand",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0006.jpg",
    alt: "Bandhan on Google Search - Achievement",
    category: "awards",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0007.jpg",
    alt: "Bandhan Google Search Recognition - Urdu",
    category: "awards",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0014.jpg",
    alt: "Marriage Hadith - Sunan At-Tirmizi",
    category: "brand",
  },
  {
    src: "/images/gallery/IMG-20260327-WA0015.jpg",
    alt: "Aao Mil Kar Nikkah Ko Asan Banain",
    category: "brand",
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "couples", label: "Couples" },
  { key: "brand", label: "Brand" },
  { key: "awards", label: "Awards" },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat.key
                ? "bg-primary text-white"
                : "bg-white text-dark/60 hover:bg-primary-light/50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setLightbox(i)}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <p className="text-white text-sm font-medium">{item.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-dark/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ minHeight: "60vh" }}>
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="p-4 bg-white text-center">
              <p className="text-dark/70 text-sm">{filtered[lightbox].alt}</p>
            </div>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev / Next */}
            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white"
              >
                <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {lightbox < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white"
              >
                <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
