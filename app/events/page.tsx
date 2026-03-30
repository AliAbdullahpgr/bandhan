import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Bandhan International Marriage Bureau — CEO Rabab Ali",
  description:
    "Watch highlights from Bandhan International Marriage Bureau events hosted by CEO Rabab Ali.",
};

const events = [
  {
    title: "Bandhan Marriage Bureau Meet up 2025 at PC Karachi @P4PakaoOfficial",
    description:
      "CEO Rabab Ali hosted the grand Bandhan Marriage Bureau meetup at PC Hotel Karachi in 2025. Watch the full coverage of this landmark event featuring families from across Pakistan.",
    youtubeId: "MYsp26ryX4A",
    date: "2025",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream/30 to-ivory py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-burgundy mb-4">
            Events
          </h1>
          <p className="text-text-dark/60 text-lg max-w-xl mx-auto">
            Highlights from events hosted by CEO Rabab Ali and the Bandhan
            International Marriage Bureau team.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {events.map((event) => (
            <div
              key={event.youtubeId}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Video embed */}
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${event.youtubeId}`}
                  title={event.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8">
                <p className="text-gold text-sm font-medium mb-2">
                  {event.date}
                </p>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-burgundy mb-3">
                  {event.title}
                </h2>
                <p className="text-text-dark/60 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
