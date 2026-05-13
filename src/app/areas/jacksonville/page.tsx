import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cityData } from "@/lib/cityData";
import CityPageTemplate from "@/components/CityPageTemplate";

const data = cityData["jacksonville"];

export const metadata: Metadata = {
  title: data?.metaTitle,
  description: data?.metaDescription,
  alternates: { canonical: `https://nhrepairs.com/areas/jacksonville` },
  openGraph: {
    title: data?.metaTitle,
    description: data?.metaDescription,
    url: `https://nhrepairs.com/areas/jacksonville`,
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
