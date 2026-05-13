import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Truck Repair Services | Florida Fleet Services",
  description:
    "DOT inspections, preventive maintenance, diesel engine repair, trailer repair, brake service, electrical, reefer repair, and fleet accounts across Florida.",
  alternates: { canonical: "https://nhrepairs.com/services" },
  openGraph: {
    title: "Commercial Truck Repair Services | Florida Truck Repairs",
    description:
      "Full-spectrum commercial truck and fleet repair services across Florida. DOT inspections, PM, diesel repair, trailer work, roadside assistance, and more.",
    url: "https://nhrepairs.com/services",
  },
};

const services = [
  {
    id: "dot-inspections",
    name: "DOT Inspections",
    image: "https://images.unsplash.com/photo-1504222490345-c075b7098ebb?w=800&q=70",
    imageAlt: "DOT truck inspection",
    description:
      "Annual DOT inspections for your entire fleet — on schedule, documented, and filed properly. Our certified inspectors know exactly what FMCSA compliance requires. We flag issues before roadside inspectors do.",
    details: [
      "FMCSA-compliant annual inspections",
      "Brake system, lights, tires, steering, suspension",
      "Inspection documentation and compliance records",
      "Pre-trip inspection training available",
      "Re-inspection service after corrections",
    ],
  },
  {
    id: "preventive-maintenance",
    name: "Preventive Maintenance",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=70",
    imageAlt: "Preventive maintenance on commercial truck",
    description:
      "Scheduled PM keeps your trucks reliable and your costs predictable. We build PM intervals around your equipment's mileage, engine hours, and manufacturer specifications — and we track every unit in your fleet.",
    details: [
      "Engine oil and filter changes",
      "Transmission and differential service",
      "Coolant flush and thermostat service",
      "Air filter, fuel filter, and DEF service",
      "Belt, hose, and rubber inspection",
      "Customized service intervals per unit",
    ],
  },
  {
    id: "diesel-engine-repair",
    name: "Diesel Engine Repair",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70",
    imageAlt: "Diesel engine repair technician",
    description:
      "Major and minor diesel engine repairs across all makes. Whether it's a blown head gasket, turbocharger failure, EGR system issue, or injector problem — our technicians diagnose fast and repair right.",
    details: [
      "All major makes: Cummins, Detroit, PACCAR, International, CAT",
      "Turbocharger repair and replacement",
      "Head gasket and cylinder head service",
      "Fuel injection system repair",
      "EGR, DPF, and emissions system",
      "Engine diagnostics (all fault codes)",
    ],
  },
  {
    id: "trailer-repair",
    name: "Trailer Repair",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=70",
    imageAlt: "Trailer repair service",
    description:
      "Dry van, flatbed, refrigerated, and specialty trailer repairs. From structural damage and door repairs to suspension, slider, and landing gear service. We keep your trailers legal and operational.",
    details: [
      "Structural and floor repair",
      "Rear door and swing door hardware",
      "Suspension and axle service",
      "Landing gear repair and replacement",
      "Trailer lighting and electrical",
      "Slider rail and kingpin service",
    ],
  },
  {
    id: "roadside-assistance",
    name: "Roadside Assistance / Breakdown",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=70",
    imageAlt: "Roadside assistance for commercial truck",
    description:
      "24/7 breakdown response anywhere in Florida. One call dispatches the nearest vetted provider to your driver's location. We don't just send a tow truck — we coordinate the full response including repair and dispatch updates.",
    details: [
      "24/7 dispatch available",
      "Mobile diesel repair dispatch",
      "Towing coordination — light to heavy-duty",
      "Roadside tire service",
      "Fuel delivery and lockout service",
      "Follow-up until driver is moving",
    ],
  },
  {
    id: "brake-service",
    name: "Brake Service",
    image: "https://images.unsplash.com/photo-1504222490345-c075b7098ebb?w=800&q=70",
    imageAlt: "Commercial truck brake service",
    description:
      "Air brake systems are the most scrutinized part of any DOT inspection. We perform full brake audits, cam and shoe replacements, slack adjuster service, and brake chamber work on all commercial equipment.",
    details: [
      "Air brake inspection and adjustment",
      "S-cam and drum brake service",
      "Disc brake pad and rotor service",
      "Slack adjuster service and replacement",
      "Brake chamber and airline inspection",
      "DOT-compliant brake documentation",
    ],
  },
  {
    id: "electrical-lighting",
    name: "Electrical & Lighting",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=70",
    imageAlt: "Commercial truck electrical diagnostics",
    description:
      "Lighting violations are the #1 cause of roadside write-ups. We perform full lighting inspections and electrical diagnostics at every PM visit — and repair any defects on the spot.",
    details: [
      "Full lighting inspection (truck and trailer)",
      "ABS system diagnostics and repair",
      "Wiring harness repair and replacement",
      "Trailer plug and 7-way connector service",
      "Instrument cluster and sensor diagnostics",
      "Battery and charging system service",
    ],
  },
  {
    id: "welding-fabrication",
    name: "Welding & Fabrication",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70",
    imageAlt: "Commercial truck welding and fabrication",
    description:
      "Certified welders for structural frame repair, custom fabrication, and emergency road repairs. From cracked frames and cross members to custom mounts and brackets — we build it right.",
    details: [
      "Structural frame repair and reinforcement",
      "Cross member and subframe fabrication",
      "Fifth wheel mounting and repair",
      "Custom bracket and mount fabrication",
      "Exhaust and stack repair",
      "Emergency mobile welding dispatch",
    ],
  },
  {
    id: "reefer-repair",
    name: "Reefer / Refrigeration Unit Repair",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=70",
    imageAlt: "Reefer refrigeration unit repair",
    description:
      "Thermo King and Carrier refrigeration unit diagnostics, repair, and preventive maintenance. Florida heat is unforgiving on reefer units — we keep them running to protect your cargo and your contracts.",
    details: [
      "Thermo King and Carrier certified service",
      "Refrigerant leak detection and recharge",
      "Compressor and clutch repair",
      "Evaporator and condenser service",
      "Pre-cool checks and temperature validation",
      "Emergency after-hours reefer dispatch",
    ],
  },
  {
    id: "fleet-accounts",
    name: "Fleet Accounts",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=70",
    imageAlt: "Fleet account management",
    description:
      "Fleets of 3 or more units qualify for a dedicated fleet account. Consolidated billing, priority scheduling, and a single point of contact for every service request. No waiting in line behind retail customers.",
    details: [
      "Dedicated account manager",
      "Consolidated monthly invoicing",
      "Priority scheduling across the network",
      "Full fleet service history and records",
      "Direct line to your account contact",
      "Custom reporting and compliance tracking",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-[#0A1628] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=75"
            alt="Commercial truck repair services"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 to-[#0A1628]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Services</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-5">
              Full-Spectrum Fleet Repair. Statewide.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              From DOT inspections to diesel engine rebuilds, trailer work to roadside rescue — we
              handle everything your commercial fleet needs to stay compliant and operational across Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center bg-orange-400 text-white font-bold px-8 py-4 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
                Call {PHONE_NUMBER}
              </a>
              <Link href="/fleet-maintenance" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-sm hover:bg-white hover:text-[#0A1628] transition-colors uppercase tracking-wider text-sm">
                View Fleet Contracts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <p className="text-orange-400 font-semibold uppercase tracking-widest text-xs mb-2">
                  {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </p>
                <h2 className="text-3xl font-black text-[#0A1628] mb-4">{service.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-orange-400 text-white font-bold px-6 py-3 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
                  Call About This Service
                </a>
              </div>
              <div className={`relative h-64 lg:h-80 rounded-sm overflow-hidden ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA BOTTOM */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-white mb-4">Ready to get your fleet covered?</h2>
            <p className="text-gray-400 text-sm">
              Submit the form below and we&apos;ll reach out within 1 business hour.
            </p>
          </div>
          <LeadCaptureForm
            title=""
            subtitle=""
            dark={true}
          />
        </div>
      </section>
    </main>
  );
}
