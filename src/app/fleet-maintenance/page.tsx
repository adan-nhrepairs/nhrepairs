import type { Metadata } from "next";
import Image from "next/image";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fleet Maintenance Contracts | Predictable Maintenance for Florida Fleets",
  description:
    "Scheduled preventive maintenance contracts for Florida fleets of 3–50+ units. DOT inspections, PM scheduling, brake service, oil changes — one contract, one contact, zero surprises.",
  alternates: { canonical: "https://nhrepairs.com/fleet-maintenance" },
  openGraph: {
    title: "Fleet Maintenance Contracts | Florida Truck Repairs",
    description:
      "Predictable maintenance. Zero surprises. Florida-wide fleet maintenance contracts for commercial fleets.",
    url: "https://nhrepairs.com/fleet-maintenance",
  },
};

const included = [
  {
    title: "Scheduled Preventive Maintenance",
    description:
      "PM intervals customized to your fleet's mileage, engine hours, and OEM specifications. We track every unit and schedule proactively — you never miss a service.",
  },
  {
    title: "DOT Annual Inspections",
    description:
      "Certified DOT inspections for your entire fleet. We keep your compliance records, flag issues before they become violations, and coordinate re-inspections as needed.",
  },
  {
    title: "Brake Service & Adjustment",
    description:
      "Air brake inspections, slack adjuster service, lining replacements, and full brake jobs. We keep your fleet compliant and your drivers safe.",
  },
  {
    title: "Oil, Filters & Fluid Service",
    description:
      "Engine oil, transmission fluid, coolant, and all filter changes on schedule. We use fleet-grade parts and document every service.",
  },
  {
    title: "Full Inspection Reports",
    description:
      "Every service generates a detailed inspection report sent directly to your operations manager. No surprises, no missing records — total visibility.",
  },
  {
    title: "Tire Condition Monitoring",
    description:
      "Tread depth, inflation, and wear pattern checks at every PM visit. We flag tires before they fail so you never get caught on the road.",
  },
  {
    title: "Lighting & Electrical Checks",
    description:
      "Every PM includes a full lighting inspection — turn signals, brake lights, markers, and trailer plug connections. DOT-compliant every time.",
  },
  {
    title: "Cooling System Service",
    description:
      "Coolant flush, hose inspection, thermostat checks, and radiator service. Florida heat is hard on engines — we stay ahead of it.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Fleet",
    description:
      "Fleet size, equipment type, routes, current PM status, and any known issues. A 15-minute call gives us everything we need.",
  },
  {
    number: "02",
    title: "We Build Your Maintenance Plan",
    description:
      "Our team designs a customized PM schedule around your lanes, equipment, and operating environment — not a generic template.",
  },
  {
    number: "03",
    title: "We Handle Everything From There",
    description:
      "Scheduling, reminders, service execution, documentation, and compliance tracking. You focus on your operation. We handle the trucks.",
  },
];

const whoItIsFor = [
  {
    title: "Fleet Operators with 3–50+ Units",
    description:
      "If you're running more than 2 trucks and don't have a full-time maintenance department, a contract makes more financial sense than managing repairs reactively.",
  },
  {
    title: "Owner-Operators Who Want a Maintenance Partner",
    description:
      "You run your own truck, you know it needs to be maintained — but you don't have time to manage it. We handle it so you stay earning.",
  },
  {
    title: "Logistics Companies & 3PLs",
    description:
      "Operations running Florida lanes need consistent maintenance without the overhead. We integrate with your dispatch schedule to minimize downtime.",
  },
  {
    title: "Construction & Heavy Equipment Fleets",
    description:
      "Heavy-use vehicles require more aggressive PM schedules. We build maintenance plans around hours, load, and Florida road conditions.",
  },
  {
    title: "Refrigerated Transport & Reefer Fleets",
    description:
      "Reefer breakdowns cost more than truck breakdowns. We include unit inspections and pre-trip checks in every PM visit.",
  },
];

export default function FleetMaintenancePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-[#0A1628] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=75"
            alt="Fleet maintenance bay with commercial trucks"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-400/20 border border-orange-400/40 rounded-sm px-3 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">Fleet Maintenance Contracts</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Predictable Maintenance.
              <br />
              <span className="text-orange-400">Zero Surprises.</span>
              <br />
              Florida-Wide.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Your fleet&apos;s maintenance managed under one contract. Scheduled service, DOT compliance,
              and dedicated account management — so you can focus on your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-covered" className="inline-flex items-center justify-center bg-orange-400 text-white font-bold px-8 py-4 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
                Get Your Fleet Covered
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-sm hover:bg-white hover:text-[#0A1628] transition-colors uppercase tracking-wider text-sm">
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">What&apos;s Included</p>
            <h2 className="text-4xl font-black text-[#0A1628] max-w-2xl mx-auto leading-tight">
              Everything Your Fleet Needs. Under One Contract.
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm">
              No add-ons. No surprises. Every service your fleet needs for DOT compliance and
              reliable operation is covered in your maintenance contract.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-sm p-6 hover:border-orange-400/40 hover:shadow-md transition-all duration-200">
                <div className="w-2 h-10 bg-orange-400 rounded-full mb-5"></div>
                <h3 className="font-bold text-[#0A1628] text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">How It Works</p>
            <h2 className="text-4xl font-black text-[#0A1628]">Three Steps to a Maintained Fleet</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-orange-400 rounded-sm flex items-center justify-center">
                      <span className="text-white font-black text-xl">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-black text-[#0A1628] text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-full w-8 -translate-x-4">
                    <svg className="w-8 h-8 text-orange-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
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
                Built for Florida Fleet Operators
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                If you&apos;re managing trucks in Florida, you know that reactive maintenance is a losing
                game. A blown engine or a failed DOT inspection costs more in one day than a year of
                scheduled maintenance. Our contracts are built for operations that can&apos;t afford downtime.
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
            <div className="space-y-6">
              <div className="relative h-64 rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=70"
                  alt="Fleet of commercial trucks in Florida"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-[#0A1628] rounded-sm p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Why Contracts Beat Reactive Repair</h3>
                <div className="space-y-4">
                  {[
                    { label: "Planned maintenance", vs: "Emergency breakdown", win: "10x lower cost" },
                    { label: "Scheduled DOT inspection", vs: "Roadside inspection failure", win: "No out-of-service" },
                    { label: "Contract PM billing", vs: "Surprise repair invoices", win: "Predictable budget" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="text-xs text-green-400 font-semibold mb-0.5">{row.label}</div>
                        <div className="text-xs text-gray-400">vs. {row.vs}</div>
                      </div>
                      <div className="bg-orange-400/20 border border-orange-400/40 rounded-sm px-3 py-1">
                        <span className="text-orange-400 text-xs font-bold">{row.win}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Pricing</p>
          <h2 className="text-4xl font-black text-[#0A1628] mb-5">Custom Pricing for Your Fleet</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Every fleet is different. Contract pricing is based on fleet size, equipment type,
            service frequency, and geographic coverage. There are no published rate sheets
            because no two fleets are the same. Contact us for a custom quote.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { range: "3–5 Units", label: "Small Fleet", desc: "Ideal for owner-operators expanding to a small fleet" },
              { range: "6–20 Units", label: "Mid-Size Fleet", desc: "Full PM management, DOT compliance, and dedicated rep" },
              { range: "20+ Units", label: "Large Fleet", desc: "Custom contract, volume pricing, priority scheduling" },
            ].map((tier) => (
              <div key={tier.range} className="bg-white border border-gray-100 rounded-sm p-6 text-left">
                <div className="text-orange-400 font-black text-xl mb-1">{tier.range}</div>
                <div className="font-bold text-[#0A1628] text-sm mb-2">{tier.label}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
          <a href="#get-covered" className="inline-flex items-center justify-center bg-orange-400 text-white font-bold px-10 py-4 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
            Get a Custom Quote
          </a>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="get-covered" className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadCaptureForm
            title="Get Your Fleet Covered"
            subtitle="Tell us about your operation and we'll build a maintenance plan around it. Response within 1 business hour."
            dark={true}
            defaultInquiry="Fleet Maintenance Contract"
          />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-14 bg-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-3">
            Have an active breakdown? Call us directly.
          </h2>
          <p className="text-orange-100 mb-6 text-sm">Don&apos;t fill out a form — pick up the phone.</p>
          <a href={PHONE_HREF} className="inline-flex items-center gap-3 bg-white text-orange-400 font-black px-10 py-4 rounded-sm hover:bg-gray-100 transition-colors text-lg">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {PHONE_NUMBER}
          </a>
        </div>
      </section>
    </main>
  );
}
