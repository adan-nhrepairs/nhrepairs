export interface CityData {
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  imageUrl: string;
  imageAlt: string;
  services: Array<{ name: string; description: string }>;
}

export const cityData: Record<string, CityData> = {
  miami: {
    city: "Miami",
    slug: "miami",
    metaTitle: "Commercial Truck & Fleet Repair Network — Miami, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance contracts and 24/7 breakdown membership for Miami commercial fleets. DOT inspections, diesel repair, roadside assistance across Miami-Dade.",
    headline: "Miami's Commercial Fleet Maintenance & Breakdown Network",
    intro:
      "Miami is one of the busiest freight hubs in the southeastern United States. Port traffic, I-95 corridor lanes, and the Palmetto have zero tolerance for downtime. Florida Truck Repairs keeps Miami fleets moving with scheduled maintenance contracts and 24/7 breakdown dispatch — so your trucks are never stuck hunting for a shop.",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=75",
    imageAlt: "Commercial trucks in Miami, Florida",
    services: [
      { name: "DOT Inspections", description: "Annual and spot DOT inspections for Miami-Dade commercial fleets. We keep you compliant with FMCSA requirements." },
      { name: "Preventive Maintenance", description: "Scheduled PM for Miami fleets — oil, filters, fluids, and full inspections on your schedule." },
      { name: "Diesel Engine Repair", description: "All major diesel makes serviced. Fast turnaround to keep your Miami operation running." },
      { name: "Trailer Repair", description: "Dry van, flatbed, and refrigerated trailer repair for port and distribution fleets." },
      { name: "Roadside Assistance", description: "24/7 breakdown dispatch across Miami-Dade, Broward, and Monroe counties." },
      { name: "Brake Service", description: "Air brake inspection, adjustment, and full brake jobs for DOT compliance." },
      { name: "Reefer Repair", description: "Refrigerated unit service for Miami's temperature-sensitive freight corridor." },
      { name: "Fleet Accounts", description: "Dedicated account management and consolidated billing for Miami fleet operators." },
    ],
  },
  "fort-lauderdale": {
    city: "Fort Lauderdale",
    slug: "fort-lauderdale",
    metaTitle: "Commercial Truck & Fleet Repair Network — Fort Lauderdale, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance and 24/7 breakdown coverage for Fort Lauderdale commercial fleets. DOT inspections, diesel repair, and roadside assistance across Broward County.",
    headline: "Fort Lauderdale Fleet Maintenance & Breakdown Coverage",
    intro:
      "Fort Lauderdale and Broward County sit in the center of one of Florida's most active logistics corridors. From Port Everglades freight to the I-95/I-595 junction, trucks running through this market need reliable maintenance and fast breakdown response. Florida Truck Repairs provides both — under one contract, one call.",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=75",
    imageAlt: "Commercial truck fleet in Fort Lauderdale, Florida",
    services: [
      { name: "DOT Inspections", description: "Certified DOT inspections for Broward County fleets. Compliance records managed." },
      { name: "Preventive Maintenance", description: "Scheduled PM for Fort Lauderdale and Broward County fleets of all sizes." },
      { name: "Diesel Engine Repair", description: "All major diesel platforms — quick diagnostics, quality repairs." },
      { name: "Trailer Repair", description: "Dry van, flatbed, and specialty trailer repair near Port Everglades." },
      { name: "24/7 Roadside Assistance", description: "Breakdown dispatch covering all of Broward County 24 hours a day." },
      { name: "Brake Service", description: "Full air brake service and DOT-compliant documentation." },
      { name: "Electrical & Lighting", description: "Trailer lighting and electrical repairs — fast turnaround." },
      { name: "Fleet Accounts", description: "Priority scheduling and consolidated billing for Broward fleet operators." },
    ],
  },
  "pompano-beach": {
    city: "Pompano Beach",
    slug: "pompano-beach",
    metaTitle: "Commercial Truck & Fleet Repair Network — Pompano Beach, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance contracts and breakdown coverage for Pompano Beach commercial fleets. DOT inspections, diesel repair, and 24/7 roadside assistance.",
    headline: "Pompano Beach Commercial Fleet Maintenance & Repair",
    intro:
      "Pompano Beach is a significant distribution and logistics hub in northern Broward County. With direct access to I-95, the Florida Turnpike, and major distribution centers, commercial fleets running through Pompano need dependable maintenance and fast breakdown support. Florida Truck Repairs delivers both statewide, starting right here.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=75",
    imageAlt: "Commercial truck repair in Pompano Beach, Florida",
    services: [
      { name: "DOT Inspections", description: "Annual DOT compliance inspections for Pompano Beach area commercial fleets." },
      { name: "Preventive Maintenance", description: "Scheduled PM services tailored to your fleet's routes and equipment." },
      { name: "Diesel Engine Repair", description: "Cummins, Detroit, PACCAR, and all major diesel platforms." },
      { name: "Roadside Assistance", description: "24/7 breakdown dispatch for Pompano, Coconut Creek, and Deerfield Beach." },
      { name: "Trailer Repair", description: "Full trailer repair including lighting, doors, suspension, and flooring." },
      { name: "Brake Service", description: "Comprehensive air brake service and slack adjuster work." },
      { name: "Reefer Repair", description: "Refrigeration unit repair for cold chain logistics fleets." },
      { name: "Fleet Accounts", description: "Dedicated accounts for distribution and logistics fleets in the Pompano area." },
    ],
  },
  tampa: {
    city: "Tampa",
    slug: "tampa",
    metaTitle: "Commercial Truck & Fleet Repair Network — Tampa, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance contracts and 24/7 breakdown membership for Tampa commercial fleets. DOT inspections, diesel repair, and roadside assistance across Hillsborough and Pinellas.",
    headline: "Tampa's Commercial Fleet Maintenance & Breakdown Network",
    intro:
      "Tampa is Florida's second-largest freight market and a critical interchange for I-4, I-75, and the Selmon Expressway. Fleets running Tampa Bay lanes — from Port Tampa Bay distribution to construction operations across Hillsborough and Pinellas — need a maintenance partner that understands the market. That's Florida Truck Repairs.",
    imageUrl: "https://images.unsplash.com/photo-1504222490345-c075b7098ebb?w=1200&q=75",
    imageAlt: "Commercial truck and fleet repair in Tampa, Florida",
    services: [
      { name: "DOT Inspections", description: "FMCSA-compliant DOT inspections for Tampa and Hillsborough County fleets." },
      { name: "Preventive Maintenance", description: "Full PM scheduling for Tampa Bay area fleets — any size, any make." },
      { name: "Diesel Engine Repair", description: "All major diesel platforms serviced across the Tampa Bay region." },
      { name: "Trailer Repair", description: "Comprehensive trailer work for Tampa distribution and logistics operations." },
      { name: "24/7 Roadside Assistance", description: "Breakdown dispatch covering Tampa, Brandon, Plant City, and all I-75 corridors." },
      { name: "Brake Service", description: "Air brake and disc brake service for DOT compliance across Tampa Bay." },
      { name: "Reefer Repair", description: "Refrigerated unit service for Florida's agricultural and food distribution fleets." },
      { name: "Fleet Accounts", description: "Dedicated fleet accounts for Tampa's logistics, construction, and distribution sectors." },
    ],
  },
  orlando: {
    city: "Orlando",
    slug: "orlando",
    metaTitle: "Commercial Truck & Fleet Repair Network — Orlando, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance contracts and 24/7 breakdown membership for Orlando commercial fleets. DOT inspections, diesel repair, and roadside assistance across Central Florida.",
    headline: "Orlando & Central Florida Fleet Maintenance Network",
    intro:
      "Central Florida's I-4 corridor connects Tampa and Daytona and intersects I-95 and the Florida Turnpike — making Orlando one of the state's most critical freight junctions. Construction, hospitality supply chain, and distribution fleets all converge here. Florida Truck Repairs serves Orlando fleets with scheduled maintenance contracts and 24/7 breakdown dispatch across all Central Florida corridors.",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=75",
    imageAlt: "Commercial trucks on I-4 near Orlando, Florida",
    services: [
      { name: "DOT Inspections", description: "Annual DOT compliance inspections for Central Florida commercial fleets." },
      { name: "Preventive Maintenance", description: "Scheduled PM for Orlando-area fleets on your routes and intervals." },
      { name: "Diesel Engine Repair", description: "Cummins, Detroit, PACCAR, and all major diesel engine repair." },
      { name: "Trailer Repair", description: "Full trailer service for I-4 corridor distribution and logistics fleets." },
      { name: "Roadside Assistance", description: "24/7 breakdown dispatch across Orange, Osceola, Seminole, and Lake counties." },
      { name: "Brake Service", description: "Complete brake service and DOT compliance documentation." },
      { name: "Electrical & Lighting", description: "Full electrical diagnostics and trailer lighting repair." },
      { name: "Fleet Accounts", description: "Priority fleet accounts for Orlando's construction and supply chain operators." },
    ],
  },
  jacksonville: {
    city: "Jacksonville",
    slug: "jacksonville",
    metaTitle: "Commercial Truck & Fleet Repair Network — Jacksonville, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance contracts and 24/7 breakdown membership for Jacksonville commercial fleets. DOT inspections, diesel repair, and roadside assistance across Northeast Florida.",
    headline: "Jacksonville Fleet Maintenance & Breakdown Coverage",
    intro:
      "Jacksonville is Florida's largest city by area and one of the Southeast's most active port and distribution markets. JAXPORT moves enormous freight volume, and the I-95/I-10 interchange makes this a major corridor junction. Florida Truck Repairs provides Northeast Florida fleet operators with serious maintenance coverage and rapid breakdown response — no matter where on the Jacksonville network your trucks operate.",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=75",
    imageAlt: "Commercial fleet trucks in Jacksonville, Florida",
    services: [
      { name: "DOT Inspections", description: "Certified DOT inspections for Jacksonville and Duval County fleets." },
      { name: "Preventive Maintenance", description: "PM scheduling for Northeast Florida fleets — I-95 and I-10 corridor lanes." },
      { name: "Diesel Engine Repair", description: "All major diesel platforms. Quick diagnosis, quality repair." },
      { name: "Trailer Repair", description: "Port and distribution trailer repair near JAXPORT and I-95 corridors." },
      { name: "24/7 Roadside Assistance", description: "Breakdown coverage across Duval, St. Johns, Nassau, and Clay counties." },
      { name: "Brake Service", description: "Air brake service and DOT brake compliance for Northeast Florida fleets." },
      { name: "Welding & Fabrication", description: "Structural repairs and custom fabrication for heavy-use fleets." },
      { name: "Fleet Accounts", description: "Dedicated fleet accounts for Jacksonville port and logistics operators." },
    ],
  },
  naples: {
    city: "Naples",
    slug: "naples",
    metaTitle: "Commercial Truck & Fleet Repair Network — Naples, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance contracts and 24/7 breakdown coverage for Naples commercial fleets. DOT inspections, diesel repair, and roadside assistance across Collier County.",
    headline: "Naples & Southwest Florida Fleet Maintenance Network",
    intro:
      "Naples and Collier County are home to high-value construction projects, agricultural operations, and a growing logistics sector along the I-75 corridor. Southwest Florida fleets can't afford downtime in an area where qualified repair options are limited. Florida Truck Repairs bridges that gap with a statewide network that covers Naples and the surrounding Southwest Florida market.",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=75",
    imageAlt: "Commercial truck repair in Naples, Florida",
    services: [
      { name: "DOT Inspections", description: "Annual DOT compliance inspections for Collier County commercial fleets." },
      { name: "Preventive Maintenance", description: "Scheduled PM for Naples-area construction and logistics fleets." },
      { name: "Diesel Engine Repair", description: "Mobile and shop-based diesel repair across Collier County." },
      { name: "Roadside Assistance", description: "24/7 breakdown dispatch on I-75, US-41, and all Collier County corridors." },
      { name: "Trailer Repair", description: "Flatbed, lowboy, and dry van trailer repair for construction fleets." },
      { name: "Brake Service", description: "Full air brake service and DOT compliance for Southwest Florida fleets." },
      { name: "Reefer Repair", description: "Refrigeration unit service for agricultural and food distribution fleets." },
      { name: "Fleet Accounts", description: "Consolidated billing and dedicated support for Naples-area fleet operators." },
    ],
  },
  "fort-myers": {
    city: "Fort Myers",
    slug: "fort-myers",
    metaTitle: "Commercial Truck & Fleet Repair Network — Fort Myers, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance contracts and 24/7 breakdown coverage for Fort Myers commercial fleets. DOT inspections, diesel repair, and roadside assistance across Lee County.",
    headline: "Fort Myers Commercial Fleet Maintenance & Repair",
    intro:
      "Fort Myers and Lee County are a growing freight hub connecting I-75, US-41, and the Caloosahatchee region. From construction fleets to agricultural transport and distribution operations, Fort Myers operators need a maintenance partner with statewide reach. Florida Truck Repairs provides Lee County fleets with scheduled maintenance, DOT compliance, and 24/7 breakdown response.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=75",
    imageAlt: "Commercial truck repair in Fort Myers, Florida",
    services: [
      { name: "DOT Inspections", description: "FMCSA-compliant DOT inspections for Lee County commercial fleets." },
      { name: "Preventive Maintenance", description: "Customized PM schedules for Fort Myers and surrounding Lee County fleets." },
      { name: "Diesel Engine Repair", description: "All major diesel makes and models — Cummins, Detroit, PACCAR, International." },
      { name: "Roadside Assistance", description: "24/7 breakdown dispatch on I-75 and US-41 corridors throughout Lee County." },
      { name: "Trailer Repair", description: "Full trailer service for flatbed, dry van, and agricultural trailers." },
      { name: "Brake Service", description: "Complete air brake service and documentation for DOT compliance." },
      { name: "Electrical & Lighting", description: "Electrical diagnostics and trailer lighting repair." },
      { name: "Fleet Accounts", description: "Priority accounts and consolidated billing for Fort Myers fleet operators." },
    ],
  },
  sarasota: {
    city: "Sarasota",
    slug: "sarasota",
    metaTitle: "Commercial Truck & Fleet Repair Network — Sarasota, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance contracts and 24/7 breakdown coverage for Sarasota commercial fleets. DOT inspections, diesel repair, and roadside assistance across Sarasota County.",
    headline: "Sarasota Fleet Maintenance & Commercial Truck Repair",
    intro:
      "Sarasota County sits between Tampa Bay and Charlotte County on the I-75 corridor — a critical route for fleets running the west coast of Florida. Construction, healthcare supply, and distribution fleets all operate through this market. Florida Truck Repairs provides Sarasota area operators with reliable fleet maintenance contracts and rapid breakdown dispatch, backed by our statewide network.",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=75",
    imageAlt: "Commercial truck and fleet repair in Sarasota, Florida",
    services: [
      { name: "DOT Inspections", description: "Annual DOT inspections for Sarasota County commercial fleets." },
      { name: "Preventive Maintenance", description: "PM scheduling for Sarasota-area fleets running I-75 and US-41 corridors." },
      { name: "Diesel Engine Repair", description: "All major diesel platforms serviced — mobile and shop-based options." },
      { name: "Roadside Assistance", description: "24/7 breakdown dispatch throughout Sarasota, Bradenton, and Charlotte County." },
      { name: "Trailer Repair", description: "Dry van, flatbed, and specialty trailer repair for Sarasota-area operators." },
      { name: "Brake Service", description: "Full brake service and DOT-compliant documentation." },
      { name: "Reefer Repair", description: "Refrigeration unit service for cold chain fleets running the west coast corridor." },
      { name: "Fleet Accounts", description: "Dedicated fleet accounts for Sarasota County logistics and construction operators." },
    ],
  },
  "west-palm-beach": {
    city: "West Palm Beach",
    slug: "west-palm-beach",
    metaTitle: "Commercial Truck & Fleet Repair Network — West Palm Beach, FL | Florida Truck Repairs",
    metaDescription:
      "Fleet maintenance contracts and 24/7 breakdown coverage for West Palm Beach commercial fleets. DOT inspections, diesel repair, and roadside assistance across Palm Beach County.",
    headline: "West Palm Beach Fleet Maintenance & Breakdown Network",
    intro:
      "Palm Beach County is one of Florida's fastest-growing logistics markets, with major distribution centers along the Florida Turnpike and I-95. West Palm Beach fleets — from construction and landscaping to refrigerated transport and e-commerce distribution — need a maintenance partner who understands the market. Florida Truck Repairs provides Palm Beach County operators with scheduled fleet maintenance and 24/7 breakdown dispatch.",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=75",
    imageAlt: "Commercial truck and fleet repair in West Palm Beach, Florida",
    services: [
      { name: "DOT Inspections", description: "Certified DOT inspections for Palm Beach County commercial fleets." },
      { name: "Preventive Maintenance", description: "Scheduled PM for West Palm Beach, Boca Raton, and surrounding area fleets." },
      { name: "Diesel Engine Repair", description: "Full diesel engine diagnostics and repair across all major platforms." },
      { name: "Roadside Assistance", description: "24/7 breakdown dispatch throughout Palm Beach County on I-95 and the Turnpike." },
      { name: "Trailer Repair", description: "Full trailer service for dry van, flatbed, and refrigerated units." },
      { name: "Brake Service", description: "Air brake inspection, adjustment, and full brake jobs." },
      { name: "Electrical & Lighting", description: "Electrical diagnostics and trailer lighting compliance repairs." },
      { name: "Fleet Accounts", description: "Priority accounts and consolidated invoicing for Palm Beach County fleets." },
    ],
  },
};
