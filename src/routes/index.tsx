import { createFileRoute } from "@tanstack/react-router";
import { Atelier } from "@/components/salon/atelier";
import { BookingModal } from "@/components/salon/booking-modal";
import { Experience } from "@/components/salon/experience";
import { FaqBlock } from "@/components/salon/faq-block";
import { FinalCta } from "@/components/salon/final-cta";
import { Hero } from "@/components/salon/hero";
import { Identity } from "@/components/salon/identity";
import { JsonLd } from "@/components/salon/json-ld";
import { Lightbox } from "@/components/salon/lightbox";
import { LocationBlock } from "@/components/salon/location-block";
import { LocksChapter } from "@/components/salon/locks-chapter";
import { MobileBar } from "@/components/salon/mobile-bar";
import { ReviewsBlock } from "@/components/salon/reviews-block";
import { ServicesBlock } from "@/components/salon/services-block";
import { SiteFooter } from "@/components/salon/site-footer";
import { SiteHeader } from "@/components/salon/site-header";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <Identity />
        <LocksChapter />
        <Atelier />
        <ServicesBlock />
        <Experience />
        <ReviewsBlock />
        <FaqBlock />
        <LocationBlock />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileBar />
      <BookingModal />
      <Lightbox />
      <JsonLd />
    </>
  );
}
