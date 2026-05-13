import type { Metadata } from "next";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { PHONE_NUMBER, PHONE_HREF, COMPANY_ADDRESS, FLORIDA_MARKETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Florida Truck Repairs | Fleet Maintenance & Breakdown Coverage",
  description:
    "Contact Florida Truck Repairs for fleet maintenance contracts, breakdown membership inquiries, and commercial truck repair across Florida. Call 24/7 for active breakdowns.",
  alternates: { canonical: "https://nhrepairs.com/contact" },
  openGraph: {
    title: "Contact Florida Truck Repairs",
    description:
      "Reach Florida Truck Repairs for fleet coverage, breakdown membership, and commercial truck repair across Florida.",
    url: "https://nhrepairs.com/contact",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Florida Truck Repairs",
  description: "Florida's statewide fleet maintenance and breakdown network.",
  url: "https://nhrepairs.com",
  telephone: "+19540000000",
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: { "@type": "State", name: "Florida" },
  openingHours: "Mo-Su 00:00-24:00",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        {/* HERO */}
        <section className="bg-[#0A1628] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Contact Us</p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                Get in Touch with Florida Truck Repairs
              </h1>
              <p className="text-gray-300 leading-relaxed">
                For active breakdowns — call the number below directly. For fleet coverage inquiries,
                membership questions, or general information — use the form and we&apos;ll get back to
                you within 1 business hour.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT BODY */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left: Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                {/* Click-to-call */}
                <div className="bg-[#0A1628] rounded-sm p-6 text-white">
                  <p className="text-orange-400 font-semibold uppercase tracking-widest text-xs mb-2">
                    24/7 Breakdown Line
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="text-3xl font-black text-white hover:text-orange-400 transition-colors block mb-3"
                  >
                    {PHONE_NUMBER}
                  </a>
                  <p className="text-gray-400 text-xs">
                    For active breakdowns — call directly. We dispatch immediately.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-4 block text-center bg-orange-400 text-white font-bold py-3 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm"
                  >
                    Tap to Call
                  </a>
                </div>

                {/* Address */}
                <div className="bg-white border border-gray-100 rounded-sm p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                    Coverage Area
                  </p>
                  <p className="font-bold text-[#0A1628] text-sm mb-1">{COMPANY_ADDRESS}</p>
                  <p className="text-gray-500 text-xs mb-4">
                    Statewide Florida coverage — no matter where your trucks are.
                  </p>
                  <div className="space-y-1">
                    {FLORIDA_MARKETS.slice(0, 6).map((m) => (
                      <div key={m.slug} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                        {m.name}
                      </div>
                    ))}
                    <div className="text-xs text-orange-400 font-semibold pt-1">
                      + {FLORIDA_MARKETS.length - 6} more markets →
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white border border-gray-100 rounded-sm p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Hours</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Breakdown Dispatch</span>
                      <span className="font-bold text-[#0A1628]">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fleet Inquiries</span>
                      <span className="font-bold text-[#0A1628]">Mon–Fri, 7AM–7PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Form Response</span>
                      <span className="font-bold text-green-600">&lt; 1 Business Hour</span>
                    </div>
                  </div>
                </div>

                {/* Quick links */}
                <div className="bg-white border border-gray-100 rounded-sm p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Quick Links</p>
                  <div className="space-y-2">
                    {[
                      { href: "/fleet-maintenance", label: "Fleet Maintenance Contracts" },
                      { href: "/breakdown-membership", label: "Breakdown Membership" },
                      { href: "/services", label: "All Services" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-400 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-2 bg-white border border-gray-200 rounded-sm p-8 shadow-sm">
                <LeadCaptureForm
                  title="Send Us a Message"
                  subtitle="Tell us about your fleet or breakdown situation. We respond within 1 business hour during business hours."
                />
              </div>
            </div>
          </div>
        </section>

        {/* MAP PLACEHOLDER */}
        <section className="py-8 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-100 rounded-sm h-64 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <p className="text-gray-500 font-medium text-sm">Florida Statewide Coverage</p>
                <p className="text-gray-400 text-xs mt-1">
                  Miami · Fort Lauderdale · Tampa · Orlando · Jacksonville and more
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
