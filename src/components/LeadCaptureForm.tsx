"use client";

import { useState } from "react";

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
  defaultInquiry?: string;
}

export default function LeadCaptureForm({
  title = "Get Fleet Coverage",
  subtitle = "Tell us about your operation. We'll respond within 1 business hour.",
  dark = false,
  defaultInquiry = "",
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    zip: "",
    inquiryType: defaultInquiry,
    fleetSize: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Connect to CRM or email handler (GHL recommended)
    console.log("Lead form submission:", formData);

    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `w-full px-4 py-3 border text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-200 ${
    dark
      ? "bg-white/10 border-white/20 text-white placeholder-gray-400"
      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
  }`;

  const labelClass = `block text-sm font-semibold mb-1 ${dark ? "text-gray-200" : "text-gray-700"}`;

  if (submitted) {
    return (
      <div className={`rounded-sm p-8 text-center ${dark ? "bg-white/10 border border-white/20" : "bg-green-50 border border-green-200"}`}>
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
          We&apos;ll be in touch shortly.
        </h3>
        <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>
          Thank you. A member of our team will contact you within 1 business hour.
        </p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <div className="mb-6">
          <h2 className={`text-2xl font-black mb-2 ${dark ? "text-white" : "text-[#0A1628]"}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>{subtitle}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Smith Logistics LLC"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(954) 000-0000"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="33101"
              maxLength={5}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Inquiry Type</label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className={`${inputClass} bg-white`}
              style={dark ? { backgroundColor: "rgba(255,255,255,0.1)" } : {}}
            >
              <option value="">Select...</option>
              <option value="Fleet Maintenance Contract">Fleet Maintenance Contract</option>
              <option value="Breakdown Membership">Breakdown Membership</option>
              <option value="General Repair">General Repair</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Fleet Size</label>
            <select
              name="fleetSize"
              value={formData.fleetSize}
              onChange={handleChange}
              className={`${inputClass} bg-white`}
              style={dark ? { backgroundColor: "rgba(255,255,255,0.1)" } : {}}
            >
              <option value="">Select...</option>
              <option value="1 unit">1 unit</option>
              <option value="2-5 units">2–5 units</option>
              <option value="6-15 units">6–15 units</option>
              <option value="16-50 units">16–50 units</option>
              <option value="50+ units">50+ units</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us about your operation, routes, or specific needs..."
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-400 text-white font-bold py-4 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>

        <p className={`text-xs text-center ${dark ? "text-gray-400" : "text-gray-500"}`}>
          By submitting, you agree to be contacted about your fleet needs. No spam.
        </p>
      </form>
    </div>
  );
}
