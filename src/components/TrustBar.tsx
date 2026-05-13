const trustItems = [
  "Serving Florida Fleets Since 2019",
  "Fleet Network Provider",
  "DOT Certified",
  "24/7 Roadside Assistance",
  "Statewide Coverage",
];

export default function TrustBar() {
  return (
    <div className="bg-[#0A1628] border-t border-white/10 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></span>
              <span className="text-gray-300 text-xs font-medium uppercase tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
