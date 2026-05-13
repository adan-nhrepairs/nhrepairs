import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { PHONE_NUMBER, PHONE_HREF, FLORIDA_MARKETS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Florida Truck Repairs | Statewide Fleet Maintenance & Breakdown Network",
  description:
    "Florida's only statewide fleet maintenance and breakdown network. One call, statewide coverage. Fleet contracts, 24/7 breakdown membership, DOT inspections — built by shop owners.",
  alternates: { canonical: "https://floridatruckrepairs.com" },
};

const serviceIcons: Record<string, React.ReactNode> = {
  ClipboardCheck: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  Wrench: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  Settings: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Truck: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  AlertTriangle: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  Shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  Zap: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  Flame: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.624a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.457z" />
    </svg>
  ),
  Thermometer: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m0 0l-2-2m2 2l2-2" />
    </svg>
  ),
  Building: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
};

const trustPillars = [
  {
    title: "Built by Shop Owners",
    description:
      "Designed by mechanics and operators who've been under the hood and on the road — not a boardroom.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63" />
      </svg>
    ),
  },
  {
    title: "Statewide Florida Coverage",
    description:
      "From Jacksonville to Key West. Our network covers every major Florida corridor.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Breakdown Response",
    description:
      "One number. Immediate dispatch. We follow up until your driver is moving again.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Fleet Accounts",
    description:
      "Dedicated account manager, consolidated invoicing, and priority scheduling for your fleet.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Florida Truck Repairs",
  description:
    "Florida's statewide fleet maintenance and breakdown network. Fleet contracts, 24/7 breakdown membership, DOT inspections.",
  url: "https://floridatruckrepairs.com",
  telephone: "+19540000000",
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: { "@type": "State", name: "Florida" },
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center bg-[#0A1628] text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
              alt="Commercial truck fleet on Florida highway"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-orange-400/20 border border-orange-400/40 rounded-sm px-3 py-1.5 mb-6">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">
                  Statewide Florida Coverage
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6">
                Florida&apos;s Fleet
                <br />
                <span className="text-orange-400">Maintenance</span>
                <br />
                &amp; Breakdown Network
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                One call. Statewide coverage. Built by shop owners who understand your operation.
                When your truck is down, your operation is down — we fix that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center bg-orange-400 text-white font-bold px-8 py-4 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm"
                >
                  Get Fleet Coverage
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-sm hover:bg-white hover:text-[#0A1628] transition-colors uppercase tracking-wider text-sm"
                >
                  Call Now: {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* PRODUCT CARDS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">
                Two Ways to Work With Us
              </p>
              <h2 className="text-4xl font-black text-[#0A1628] max-w-2xl mx-auto leading-tight">
                Choose the Program That Fits Your Fleet
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group relative bg-[#0A1628] rounded-sm overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70"
                    alt="Fleet truck maintenance shop"
                    fill
                    className="object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="relative p-8 md:p-10">
                  <div className="inline-block bg-orange-400 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-6">
                    Most Popular
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                    Fleet Maintenance Contracts
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Scheduled maintenance for your fleet. Predictable costs, zero surprises.
                    We handle everything from PM intervals to DOT inspections — South Florida and beyond.
                  </p>
                  <ul className="space-y-2 mb-8">
                    {["Customized PM schedules", "DOT compliance managed", "Dedicated account rep", "Consolidated billing"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/fleet-maintenance" className="inline-flex items-center gap-2 bg-orange-400 text-white font-bold px-6 py-3 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>

              <div className="group bg-gray-50 border-2 border-gray-100 rounded-sm overflow-hidden hover:border-orange-400/30 transition-colors duration-300">
                <div className="p-8 md:p-10">
                  <div className="inline-block bg-[#0A1628] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-6">
                    24/7 Coverage
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0A1628] mb-3">
                    Statewide Breakdown Membership
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    One monthly fee. One call. Any breakdown, anywhere in Florida.
                    We dispatch, coordinate, and follow up — no hunting for shops, no surprise fees.
                  </p>
                  <ul className="space-y-2 mb-8">
                    {["Statewide dispatch network", "24/7 emergency response", "No per-incident surprise fees", "After-hours coverage"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/breakdown-membership" className="inline-flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] font-bold px-6 py-3 rounded-sm hover:bg-[#0A1628] hover:text-white transition-colors uppercase tracking-wider text-sm">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">What We Cover</p>
              <h2 className="text-4xl font-black text-[#0A1628] max-w-2xl mx-auto leading-tight">
                Full-Spectrum Fleet Services
              </h2>
              <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm">
                From scheduled maintenance to emergency breakdown, we cover every need your fleet has —
                under one network, across the entire state.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES.slice(0, 8).map((service) => (
                <Link key={service.id} href={`/services#${service.id}`} className="group bg-white border border-gray-100 rounded-sm p-5 hover:border-orange-400/40 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-orange-400/10 text-orange-400 rounded-sm flex items-center justify-center mb-4 group-hover:bg-orange-400 group-hover:text-white transition-colors duration-200">
                    {serviceIcons[service.icon]}
                  </div>
                  <h3 className="font-bold text-[#0A1628] text-sm mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{service.description}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] font-bold px-8 py-3 rounded-sm hover:bg-[#0A1628] hover:text-white transition-colors uppercase tracking-wider text-sm">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Why Florida Truck Repairs</p>
                <h2 className="text-4xl font-black text-[#0A1628] leading-tight mb-5">
                  Florida&apos;s only statewide network built by operators.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We don&apos;t just send you a list of shops. We dispatch, coordinate, and follow up.
                  Every provider in our network is vetted. Every account gets a dedicated contact.
                  Your fleet runs Florida — we keep it running.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {trustPillars.map((pillar) => (
                    <div key={pillar.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-orange-400/10 text-orange-400 rounded-sm flex items-center justify-center flex-shrink-0">
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A1628] text-sm mb-1">{pillar.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 lg:h-full min-h-[420px] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504222490345-c075b7098ebb?w=800&q=75"
                  alt="Diesel truck technician performing fleet maintenance"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 rounded-sm p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-400 rounded-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#0A1628] text-xs uppercase tracking-wide">24/7 Breakdown Line</div>
                      <a href={PHONE_HREF} className="text-orange-400 font-black text-lg hover:text-orange-600 transition-colors">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLORIDA COVERAGE */}
        <section className="py-20 bg-[#0A1628] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Coverage Map</p>
                <h2 className="text-4xl font-black text-white leading-tight mb-5">
                  Serving Every Major Florida Market
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  From the Panhandle to the Keys, our provider network covers every major freight
                  corridor and logistics hub in Florida. If your drivers run it, we cover it.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {FLORIDA_MARKETS.map((market) => (
                    <Link key={market.slug} href={`/areas/${market.slug}`} className="flex items-center gap-3 group py-1.5">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-300 group-hover:text-orange-400 transition-colors text-sm font-medium">{market.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-sm p-8">
                <h3 className="text-xl font-bold text-white mb-1">Your fleet runs Florida.</h3>
                <p className="text-orange-400 font-black text-2xl mb-6">We keep it running.</p>
                <div className="space-y-4 mb-8">
                  {[
                    { n: "10+", label: "Florida Markets Covered" },
                    { n: "24/7", label: "Emergency Breakdown Response" },
                    { n: "100%", label: "Vetted Provider Network" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <span className="text-3xl font-black text-orange-400 w-20 flex-shrink-0">{item.n}</span>
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact-form" className="block text-center bg-orange-400 text-white font-bold py-3 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
                  Get Statewide Coverage
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD FORM */}
        <section id="contact-form" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Get Started</p>
                <h2 className="text-4xl font-black text-[#0A1628] leading-tight mb-5">Tell us about your fleet.</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Every fleet is different. Tell us what you&apos;re running, where you run it, and how many
                  units you operate. We&apos;ll build the right program and get back to you within one business hour.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Fleet Maintenance Contracts for 3–50+ unit fleets",
                    "Breakdown Membership for owner-operators and small fleets",
                    "One-time repair coordination statewide",
                    "DOT inspection scheduling across 10 Florida markets",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-2"></span>
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-[#0A1628] rounded-sm">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">24/7 Emergency Breakdown Line</p>
                  <a href={PHONE_HREF} className="text-orange-400 font-black text-2xl hover:text-orange-300 transition-colors">{PHONE_NUMBER}</a>
                  <p className="text-gray-400 text-xs mt-1">For active breakdowns — call directly.</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-sm p-8 shadow-sm">
                <LeadCaptureForm title="Request Fleet Coverage" subtitle="We respond within 1 business hour." />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
