import type { Metadata } from "next";
import Image from "next/image";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Statewide Breakdown Membership | 24/7 Florida Truck Breakdown Coverage",
  description:
    "One monthly fee. One call. Any breakdown, anywhere in Florida. Our statewide membership dispatches a vetted repair provider to your driver's location 24/7.",
  alternates: { canonical: "https://nhrepairs.com/breakdown-membership" },
  openGraph: {
    title: "Statewide Breakdown Membership | Florida Truck Repairs",
    description:
      "One call. Any breakdown. Anywhere in Florida. 24/7 dispatch, vetted providers, no per-incident billing surprises.",
    url: "https://nhrepairs.com/breakdown-membership",
  },
};

const covered = [
  {
    title: "24/7 Roadside Assistance",
    description:
      "Flat tires, dead batteries, fuel delivery, air line breaks — we handle every roadside situation day or night.",
  },
  {
    title: "Towing Coordination",
    description:
      "When the truck can't be fixed roadside, we coordinate heavy-duty towing to the nearest qualified shop.",
  },
  {
    title: "Diesel Repair Dispatch",
    description:
      "We dispatch mobile diesel mechanics or direct your driver to a vetted shop in our network — your choice.",
  },
  {
    title: "Tire Service",
    description:
      "Roadside tire service, mobile mounting, and flat repair anywhere on Florida's major corridors.",
  },
  {
    title: "After-Hours Coverage",
    description:
      "2AM on the Turnpike. Sunday morning on I-75. It doesn't matter — we answer and dispatch immediately.",
  },
  {
    title: "Reefer & Refrigeration",
    description:
      "We dispatch reefer-certified technicians to keep your temperature-sensitive cargo protected.",
  },
];

const steps = [
  {
    number: "01",
    title: "Driver Calls One Number",
    description:
      "Your driver calls our 24/7 dispatch line. One number for every breakdown, every location in Florida.",
  },
  {
    number: "02",
    title: "We Dispatch the Nearest Vetted Provider",
    description:
      "We identify the closest qualified provider in our network and dispatch immediately. No hunting, no back-and-forth.",
  },
  {
    number: "03",
    title: "You Get Back on the Road",
    description:
      "We follow up with the driver and your operations contact until the issue is resolved. Then we send you a full incident report.",
  },
];

const whoItIsFor = [
  {
    title: "Owner-Operators Running Florida Lanes",
    description:
      "Solo operators can't afford the time or uncertainty of finding a shop mid-breakdown. One monthly fee eliminates that problem.",
  },
  {
    title: "Small Fleets Without a National Provider",
    description:
      "National programs are built for national fleets. If you run primarily in Florida, our statewide-specific network is more efficient and more affordable.",
  },
  {
    title: "Logistics Companies Needing Florida Coverage",
    description:
      "Running dedicated Florida lanes? Add our membership as a layer of protection for every driver in the state.",
  },
  {
    title: "Fleets Whose Drivers Are Solo in the Field",
    description:
      "When a driver is alone and stuck, they need someone on the phone who knows what to do. We&apos;re that call.",
  },
];

export default function BreakdownMembershipPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-[#0A1628] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=75"
            alt="Semi truck broken down on Florida highway at night"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-400/20 border border-orange-400/40 rounded-sm px-3 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">Statewide Breakdown Membership</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              One Call.
              <br />
              <span className="text-orange-400">Any Breakdown.</span>
              <br />
              Anywhere in Florida.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Monthly membership. One call dispatches a vetted repair provider to your driver&apos;s
              exact location. No hunting for shops. No per-incident billing surprises.
              No wasted hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inquire" className="inline-flex items-center justify-center bg-orange-400 text-white font-bold px-8 py-4 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
                Inquire About Membership
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-sm hover:bg-white hover:text-[#0A1628] transition-colors uppercase tracking-wider text-sm">
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">What It Is</p>
              <h2 className="text-4xl font-black text-[#0A1628] leading-tight mb-5">
                Statewide breakdown coverage for a flat monthly rate.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Every enrolled unit gets full Florida breakdown coverage. When a driver calls our
                dispatch line, we locate the nearest vetted provider in our network and send them out —
                no matter where in Florida the breakdown happens.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We don&apos;t just give you a list of phone numbers. We make the calls, confirm the
                dispatch, and follow up with your driver until they&apos;re back on the road. Then
                you get a full incident report.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No guessing. No per-incident invoices. No phone tag at 2AM. One flat monthly rate per unit.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "$X/mo", label: "Per unit (volume pricing available)", note: "Contact us for pricing" },
                { n: "24/7", label: "Dispatch availability", note: "Every day, every hour" },
                { n: "1 Call", label: "Dispatches everything", note: "One number for your drivers" },
                { n: "FL-Wide", label: "Coverage area", note: "Every major Florida corridor" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 border border-gray-100 rounded-sm p-5">
                  <div className="text-2xl font-black text-orange-400 mb-1">{item.n}</div>
                  <div className="text-xs font-bold text-[#0A1628] mb-1">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">What&apos;s Covered</p>
            <h2 className="text-4xl font-black text-[#0A1628] max-w-2xl mx-auto">
              Every Breakdown Scenario. Covered.
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm">
              From a flat on the Turnpike to a blown engine on I-10 — our dispatch handles it all.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {covered.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-sm p-6 hover:border-orange-400/40 hover:shadow-md transition-all duration-200">
                <div className="w-2 h-8 bg-orange-400 rounded-full mb-4"></div>
                <h3 className="font-bold text-[#0A1628] text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[#0A1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">How It Works</p>
            <h2 className="text-4xl font-black text-white">From Breakdown Call to Back on the Road</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-sm flex items-center justify-center mx-auto mb-5">
                  <span className="text-white font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="font-black text-white text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Who It&apos;s For</p>
              <h2 className="text-4xl font-black text-[#0A1628] leading-tight mb-5">
                For anyone running trucks in Florida without a national breakdown provider.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                If you&apos;re calling Google or asking a driver to figure it out roadside,
                you&apos;re losing hours and money. Our membership eliminates that problem for
                a fixed monthly cost per unit.
              </p>
              <div className="space-y-5">
                {whoItIsFor.map((item) => (
                  <div key={item.title} className="border-l-4 border-orange-400 pl-5">
                    <h3 className="font-bold text-[#0A1628] text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative h-64 rounded-sm overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70"
                  alt="Commercial truck roadside assistance Florida"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-orange-400 rounded-sm p-8 text-white">
                <h3 className="text-xl font-bold mb-2">The math is simple.</h3>
                <p className="text-orange-100 text-sm leading-relaxed mb-5">
                  One towing bill in Florida without a coverage plan runs $800–$2,500.
                  Our membership costs a fraction of that monthly — and covers every incident.
                </p>
                <div className="space-y-3">
                  {[
                    "Starting at $X/month per unit",
                    "Volume pricing for 5+ units",
                    "Month-to-month available",
                    "No per-incident billing surprises",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Pricing</p>
          <h2 className="text-3xl font-black text-[#0A1628] mb-4">Starting at $X/month per unit.</h2>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            Volume pricing available for fleets of 5 or more units. Month-to-month and annual
            contracts available. Contact us for exact pricing based on your fleet size, coverage
            area, and service needs.
          </p>
          <a href="#inquire" className="inline-flex items-center justify-center bg-orange-400 text-white font-bold px-10 py-4 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
            Inquire About Membership
          </a>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="inquire" className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadCaptureForm
            title="Inquire About Membership"
            subtitle="Tell us about your fleet and routes. We'll reach out within 1 business hour with pricing and enrollment details."
            dark={true}
            defaultInquiry="Breakdown Membership"
          />
        </div>
      </section>
    </main>
  );
}
