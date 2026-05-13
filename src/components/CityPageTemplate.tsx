import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "./LeadCaptureForm";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

interface CityService {
  name: string;
  description: string;
}

interface CityPageProps {
  city: string;
  state?: string;
  slug: string;
  headline: string;
  intro: string;
  services: CityService[];
  imageUrl: string;
  imageAlt: string;
}

export default function CityPageTemplate({
  city,
  state = "FL",
  slug: _slug, // eslint-disable-line @typescript-eslint/no-unused-vars
  headline,
  intro,
  services,
  imageUrl,
  imageAlt,
}: CityPageProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#0A1628] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover opacity-20"
            loading="lazy"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Home</Link>
              <span className="text-gray-600">/</span>
              <Link href="/areas/miami" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Service Areas</Link>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300 text-sm">{city}</span>
            </div>
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">
              {city}, {state}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              {headline}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#quote"
                className="inline-flex items-center justify-center bg-orange-400 text-white font-bold px-8 py-4 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm"
              >
                Get Fleet Coverage
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-sm hover:bg-white hover:text-[#0A1628] transition-colors uppercase tracking-wider text-sm"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this market */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-2">
              Available In {city}
            </p>
            <h2 className="text-3xl font-black text-[#0A1628]">
              Services for {city} Fleets
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.name} className="border border-gray-100 rounded-sm p-6 hover:border-orange-400/40 hover:shadow-md transition-all duration-200">
                <div className="w-2 h-8 bg-orange-400 rounded-full mb-4"></div>
                <h3 className="font-bold text-[#0A1628] text-lg mb-2">{svc.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us for this city */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">
                The {city} Network
              </p>
              <h2 className="text-3xl font-black text-[#0A1628] mb-5">
                Local Coverage. Statewide Backing.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                When your truck goes down in {city}, you don&apos;t have time to call around. Our network
                dispatches a vetted repair provider directly to your driver — no hunting, no delays.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                For fleets running regular routes through {city}, our maintenance contracts eliminate
                unplanned downtime. We build a PM schedule around your lanes, your equipment, and
                your operation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "24/7", label: "Breakdown Response" },
                  { stat: "1 Call", label: "Dispatches Everything" },
                  { stat: "FL-Wide", label: "Coverage Network" },
                  { stat: "No Surprises", label: "Transparent Billing" },
                ].map((item) => (
                  <div key={item.label} className="bg-white border border-gray-100 rounded-sm p-4">
                    <div className="text-2xl font-black text-orange-400">{item.stat}</div>
                    <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A1628] rounded-sm p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Not Sure Where to Start?</h3>
              <p className="text-gray-300 text-sm mb-6">
                Tell us about your fleet and we&apos;ll recommend the right program for your {city} operation.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Fleet Maintenance Contract",
                  "Statewide Breakdown Membership",
                  "One-time repair coordination",
                  "DOT inspection scheduling",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/fleet-maintenance"
                className="inline-block bg-orange-400 text-white font-bold px-6 py-3 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="quote" className="py-16 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadCaptureForm
            title={`Get Coverage in ${city}`}
            subtitle={`Tell us about your fleet. We serve ${city} and the surrounding area with fleet maintenance contracts and statewide breakdown membership.`}
            dark={true}
          />
        </div>
      </section>
    </main>
  );
}
