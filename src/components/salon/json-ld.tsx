import { FAQ, REVIEWS, SALON, SERVICES } from "@/data/salon";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: SALON.name,
    description:
      "Salon de coiffure à Zopah, Abomey-Calavi. Spécialiste des dreadlocks : création, retwist, réparation, délockage. Coiffure homme et femme, coupes, barbe et lavage.",
    telephone: SALON.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: SALON.addressLine,
      addressLocality: SALON.city,
      addressCountry: "BJ",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:30",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(SALON.rating),
      reviewCount: String(SALON.reviewCount),
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
      })),
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: r.text,
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
