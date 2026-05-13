import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-gray-50 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-8xl font-black text-[#0A1628]/10 mb-4 leading-none">404</div>
        <h1 className="text-3xl font-black text-[#0A1628] mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          If you&apos;re looking for fleet coverage or have an active breakdown, use the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-orange-400 text-white font-bold px-6 py-3 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-[#0A1628] text-[#0A1628] font-bold px-6 py-3 rounded-sm hover:bg-[#0A1628] hover:text-white transition-colors uppercase tracking-wider text-sm"
          >
            Contact Us
          </Link>
        </div>
        <div className="bg-[#0A1628] rounded-sm p-5 text-white text-left">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Active Breakdown?</p>
          <a href={PHONE_HREF} className="text-orange-400 font-black text-xl hover:text-orange-300 transition-colors">
            {PHONE_NUMBER}
          </a>
          <p className="text-gray-400 text-xs mt-1">Call directly — 24/7.</p>
        </div>
      </div>
    </main>
  );
}
