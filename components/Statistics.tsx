"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4500, suffix: "+", label: "Families Consulted", icon: "couple" },
  { value: 1800, suffix: "+", label: "Groom Families Served", icon: "groom" },
  { value: 2600, suffix: "+", label: "Bride Families Served", icon: "bride" },
  { value: 1190, suffix: "+", label: "Successful Matches Made", icon: "heart" },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy mb-4">
          Bandhan&apos;s User Statistics
        </h2>
        <p className="text-dark/50 mb-14 max-w-md mx-auto">
          Join thousands of families who have found their perfect match through Bandhan.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <div className="max-w-5xl mx-auto mt-16 px-8">
        <svg viewBox="0 0 800 40" fill="none" className="w-full opacity-20">
          <path d="M0 20Q200 0 400 20Q600 40 800 20" stroke="#C0396B" strokeWidth="2" />
          <circle cx="200" cy="12" r="6" fill="#F4D2DE" />
          <circle cx="400" cy="20" r="4" fill="#D4A843" />
          <circle cx="600" cy="12" r="6" fill="#F4D2DE" />
        </svg>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  icon,
}: {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="w-20 h-20 rounded-full bg-primary-light/50 flex items-center justify-center">
        <StatIcon name={icon} />
      </div>
      <span className="font-heading text-3xl font-bold text-burgundy">
        {count.toLocaleString()}
        {suffix || ""}
      </span>
      <span className="text-dark/50 text-sm">{label}</span>
    </div>
  );
}

function StatIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    couple: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="10" r="5" fill="#C0396B" opacity="0.6" />
        <circle cx="21" cy="10" r="5" fill="#D4A843" opacity="0.6" />
        <path d="M4 26c0-6 5-10 12-10s12 4 12 10" fill="#C0396B" opacity="0.2" />
      </svg>
    ),
    groom: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="6" fill="#D4A843" opacity="0.5" />
        <rect x="12" y="6" width="8" height="4" rx="2" fill="#2D1A1A" opacity="0.2" />
        <path d="M8 28c0-6 4-10 8-10s8 4 8 10" fill="#D4A843" opacity="0.3" />
      </svg>
    ),
    bride: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="6" fill="#C0396B" opacity="0.4" />
        <path d="M10 8c0-5 12-5 12 0" stroke="#C0396B" strokeWidth="1.5" opacity="0.4" />
        <path d="M8 28c0-6 4-10 8-10s8 4 8 10" fill="#C0396B" opacity="0.2" />
      </svg>
    ),
    heart: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 28s-10-6-10-14a6 6 0 0112 0 6 6 0 0112 0c0 8-10 14-10 14z"
          fill="#C0396B"
          opacity="0.4"
        />
      </svg>
    ),
  };

  return <>{icons[name]}</>;
}
