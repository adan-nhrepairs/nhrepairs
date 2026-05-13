import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cityData } from "@/lib/cityData";
import CityPageTemplate from "@/components/CityPageTemplate";

const data = cityData["west-palm-beach"];

export const metadata: Metadata = {
  title: data?.metaTitle,
  description: data?.metaDescription,
  alternates: { canonical: `https://floridatruckrepairs.com/areas/west-palm-beach` },
  openGraph: {
    title: data?.metaTitle,
    description: data?.metaDescription,
    url: `https://floridatruckrepairs.com/areas/west-palm-beach`,
  },
};

export default function CityPage() {
  if (!data) return notFound();
  return (
    <CityPageTemplate
      city={data.city}
      slug={data.slug}
      headline={data.headline}
      intro={data.intro}
      services={data.services}
      imageUrl={data.imageUrl}
      imageAlt={data.imageAlt}
    />
  );
}
