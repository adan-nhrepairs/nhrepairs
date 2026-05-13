import type { Metadata } from "next";
import Link from "next/link";
import { FLORIDA_MARKETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | Florida Truck Repairs Statewide Coverage",
  description:
    "Florida Truck Repairs serves 10+ major Florida markets. Find fleet maintenance contracts and breakdown coverage in Miami, Tampa, Orlando, Jacksonville, and more.",
  alternates: { canonical: "https://floridatruckrepairs.com/areas" },
};

export default function AreasPage() {
  return (
    <main>
      <section className="bg-[#0A1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Coverage</p>
          <h1 className="text-5xl font-black mb-5">Florida Service Areas</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Our network covers every major Florida freight corridor and logistics hub.
            Select your market below to see what&apos;s available in your area.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLORIDA_MARKETS.map((market) => (
              <Link
                key={market.slug}
                href={`/areas/${market.slug}`}
                className="group bg-white border border-gray-100 rounded-sm p-6 hover:border-orange-400/50 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-black text-[#0A1628] text-xl group-hover:text-orange-400 transition-colors">{market.name}</h2>
                    <p className="text-gray-500 text-sm mt-1">Florida</p>
                  </div>
                  <svg className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
