import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF, COMPANY_ADDRESS, FLORIDA_MARKETS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="3" fill="#F97316"/>
                <path d="M4 18L8 10H16L20 18H4Z" fill="white"/>
                <circle cx="8" cy="20" r="2" fill="white"/>
                <circle cx="17" cy="20" r="2" fill="white"/>
                <rect x="16" y="12" width="8" height="6" rx="1" fill="white"/>
              </svg>
              <span className="text-white font-black text-base tracking-tight">
                FLORIDA<span className="text-orange-400">TRUCK</span>REPAIRS
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Florida&apos;s statewide fleet maintenance and breakdown network. Built by operators, for operators.
            </p>
            <p className="text-sm text-gray-400 mb-1">{COMPANY_ADDRESS}</p>
            <a href={PHONE_HREF} className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">
              {PHONE_NUMBER}
            </a>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-5">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/services#dot-inspections", label: "DOT Inspections" },
                { href: "/services#preventive-maintenance", label: "Preventive Maintenance" },
                { href: "/services#diesel-engine-repair", label: "Diesel Engine Repair" },
                { href: "/services#trailer-repair", label: "Trailer Repair" },
                { href: "/services#roadside-assistance", label: "Roadside Assistance" },
                { href: "/services#brake-service", label: "Brake Service" },
                { href: "/services#reefer-repair", label: "Reefer Repair" },
                { href: "/fleet-maintenance", label: "Fleet Accounts" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage areas */}
          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-5">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {FLORIDA_MARKETS.map((market) => (
                <li key={market.slug}>
                  <Link href={`/areas/${market.slug}`} className="text-gray-400 hover:text-orange-400 transition-colors">
                    {market.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-5">Programs</h3>
            <ul className="space-y-2 text-sm mb-8">
              {[
                { href: "/fleet-maintenance", label: "Fleet Maintenance Contracts" },
                { href: "/breakdown-membership", label: "Breakdown Membership" },
                { href: "/contact", label: "Get a Quote" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bg-white/5 border border-white/10 rounded-sm p-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">24/7 Breakdown Line</p>
              <a href={PHONE_HREF} className="text-orange-400 font-black text-lg hover:text-orange-300 transition-colors">
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {year} Florida Truck Repairs. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
