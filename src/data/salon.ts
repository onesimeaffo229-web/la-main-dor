export const TIMEZONE = "Africa/Porto-Novo";

export const SALON = {
  name: "La Main d’Or Coiffure",
  shortName: "La Main d’Or",
  tagline: "Coiffure · Locks",
  city: "Abomey-Calavi",
  country: "Bénin",
  neighborhood: "Zopah",
  addressLine: "Zopah, fin du pavé ICC",
  addressFull: "Zopah, fin du pavé ICC, Abomey-Calavi, Bénin",
  phoneDisplay: "+229 01 53 29 25 06",
  phoneTel: "+2290153292506",
  /** Official salon mobile, used for appointment requests via WhatsApp. */
  phoneWhatsApp: "2290153292506",
  mapsQuery: "La Main d’Or Coiffure, Zopah, fin du pavé ICC, Abomey-Calavi, Bénin",
  googleSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=La%20Main%20d%27Or%20Coiffure%2C%20Zopah%2C%20fin%20du%20pav%C3%A9%20ICC%2C%20Abomey-Calavi%2C%20B%C3%A9nin",
  googleReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=La%20Main%20d%27Or%20Coiffure%20Zopah%20Abomey-Calavi",
  rating: 5.0,
  reviewCount: 49,
  hoursLabel: "Tous les jours, de 08h00 à 21h30",
  open: "08:00",
  close: "21:30",
  creator: {
    name: "Trésor AFFOKPE",
    phoneDisplay: "+229 01 66 65 51 75",
    whatsapp: "https://wa.me/2290166655175",
  },
} as const;

/** Open every day, same hours. Keys are JS getDay() (0 = Sunday). */
export const WEEKLY_HOURS: Record<number, { open: string; close: string }> = {
  0: { open: "08:00", close: "21:30" },
  1: { open: "08:00", close: "21:30" },
  2: { open: "08:00", close: "21:30" },
  3: { open: "08:00", close: "21:30" },
  4: { open: "08:00", close: "21:30" },
  5: { open: "08:00", close: "21:30" },
  6: { open: "08:00", close: "21:30" },
};

export type ServiceCategory = "locks" | "coiffure" | "entretien";

export type Service = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  category: ServiceCategory;
};

export const SERVICES: Service[] = [
  {
    id: "creation-dreadlocks",
    name: "Création de dreadlocks",
    shortName: "Création",
    description:
      "Création de dreadlocks personnalisées avec un travail soigné adapté à votre style et à la texture de vos cheveux.",
    category: "locks",
  },
  {
    id: "retwist",
    name: "Entretien de dreadlocks, retwist",
    shortName: "Retwist",
    description:
      "Entretien et resserrage des dreadlocks pour garder des locks propres, bien formées et bien entretenues.",
    category: "locks",
  },
  {
    id: "reparation",
    name: "Réparation de dreadlocks",
    shortName: "Réparation",
    description:
      "Réparation et restauration des dreadlocks abîmées pour leur redonner une meilleure apparence.",
    category: "locks",
  },
  {
    id: "delockage",
    name: "Délockage, défaire les dreadlocks",
    shortName: "Délockage",
    description:
      "Service de dépose et de retrait des dreadlocks (rastas) réalisé avec attention et professionnalisme.",
    category: "locks",
  },
  {
    id: "dreadlocks-enfant",
    name: "Dreadlocks enfant",
    shortName: "Locks enfant",
    description:
      "Création et entretien de dreadlocks pour enfants avec un travail adapté à leurs cheveux.",
    category: "locks",
  },
  {
    id: "coiffure-homme",
    name: "Coiffure homme",
    shortName: "Coiffure homme",
    description:
      "Services de coiffure pour hommes : styles modernes, entretien des cheveux et coiffures adaptées à votre look.",
    category: "coiffure",
  },
  {
    id: "coiffure-femme",
    name: "Coiffure femme",
    shortName: "Coiffure femme",
    description:
      "Coiffures pour femmes avec des styles adaptés aux envies et aux occasions.",
    category: "coiffure",
  },
  {
    id: "coupe-homme",
    name: "Coupe homme",
    shortName: "Coupe homme",
    description:
      "Coupe de cheveux homme avec finitions soignées et styles personnalisés.",
    category: "coiffure",
  },
  {
    id: "coupe-femme",
    name: "Coupe femme",
    shortName: "Coupe femme",
    description:
      "Coupe de cheveux femme réalisée selon votre style et vos préférences.",
    category: "coiffure",
  },
  {
    id: "barbe",
    name: "Taille de barbe",
    shortName: "Barbe",
    description:
      "Entretien et taille de barbe avec des finitions propres pour un style soigné.",
    category: "coiffure",
  },
  {
    id: "coiffure-enfant",
    name: "Coiffure enfant",
    shortName: "Coiffure enfant",
    description:
      "Coiffures adaptées aux enfants avec des styles soignés et confortables selon leurs besoins.",
    category: "coiffure",
  },
  {
    id: "lavage",
    name: "Lavage des cheveux",
    shortName: "Lavage",
    description:
      "Lavage des cheveux avec un entretien adapté avant ou après votre coiffure.",
    category: "entretien",
  },
];

export const LOCKS_SERVICES = SERVICES.filter((s) => s.category === "locks");
export const COIFFURE_SERVICES = SERVICES.filter((s) => s.category === "coiffure");
export const ENTRETIEN_SERVICES = SERVICES.filter((s) => s.category === "entretien");

export type Review = {
  id: string;
  name: string;
  rating: 5;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    id: "johana",
    name: "Johana SENA",
    rating: 5,
    text: "Très beau salon\nEt le coiffeur est exceptionnel\nJ'y fais mes resserrages et je recommande",
  },
  {
    id: "michel",
    name: "AKODHEGNON Michel",
    rating: 5,
    text: "Excellent coiffeur, parfait pour n'importe quel type de coiffure vous ne serez pas déçu, je vous le recommande vivement",
  },
  {
    id: "edwige",
    name: "Edwige",
    rating: 5,
    text: "très bon salon de coiffure, spécialisé dans la réalisation et l'entretien des locks et autres.\naccueil chaleureux et travail bien fait.",
  },
  {
    id: "marius",
    name: "Marius Kpehounton",
    rating: 5,
    text: "J'étais parti me coiffer dans son salon de coiffure vraiment c'est magnifique super et beau",
  },
  {
    id: "latifou",
    name: "Latifou Assan",
    rating: 5,
    text: "Je suis passé chez la main d'or c'est un super coiffeur, pas du tout cher, j'ai été bien accueilli, j'ai vraiment aimée",
  },
  {
    id: "basilia",
    name: "Dankpo Basilia",
    rating: 5,
    text: "Je suis passée chez la main d'Or et je ne regrette pas, un très bon coiffeur, je vous suggère d'y faire un tout",
  },
  {
    id: "stemar",
    name: "Stemar dat19",
    rating: 5,
    text: "Il est un très bon coiffeur venez vous tressé chez lui il n'est pas chère 😅",
  },
  {
    id: "honfo",
    name: "honfo fide Adnette",
    rating: 5,
    text: "Tu coiffes très bien Jtj tu as su répondre à mes attentes et je suis vraiment fier de mes nouveaux Locks ✂️💇‍♀️ Merci beaucoup",
  },
  {
    id: "aminatou",
    name: "Aminatou LALEYE",
    rating: 5,
    text: "Accueil chaleureux !",
  },
];

export const FEATURED_REVIEW = REVIEWS[0];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ: FaqItem[] = [
  {
    id: "types-locks",
    question: "Quels types de dreadlocks réalisez-vous ?",
    answer:
      "La Main d’Or propose la création, l’entretien (retwist), la réparation et le délockage des dreadlocks, pour hommes, femmes et enfants.",
  },
  {
    id: "entretien",
    question: "Faites-vous l’entretien des dreadlocks ?",
    answer:
      "Oui. Le salon propose l’entretien et le resserrage des dreadlocks (retwist).",
  },
  {
    id: "reparation",
    question: "Pouvez-vous réparer des dreadlocks abîmées ?",
    answer:
      "Oui. La réparation et la restauration des dreadlocks abîmées font partie des prestations proposées.",
  },
  {
    id: "delockage",
    question: "Faites-vous le délockage ?",
    answer:
      "Oui. Le salon propose la dépose et le retrait des dreadlocks, réalisés avec attention.",
  },
  {
    id: "enfants",
    question: "Faites-vous des dreadlocks pour enfants ?",
    answer:
      "Oui. La Main d’Or propose la création et l’entretien de dreadlocks adaptés aux enfants.",
  },
  {
    id: "coupes",
    question: "Faites-vous les coupes homme et femme ?",
    answer:
      "Oui. Le salon propose des coupes homme et femme ainsi que des coiffures adaptées aux enfants.",
  },
  {
    id: "barbe",
    question: "Faites-vous la taille de barbe ?",
    answer:
      "Oui. La taille et l’entretien de la barbe font partie des prestations proposées.",
  },
  {
    id: "rdv",
    question: "Comment prendre rendez-vous ?",
    answer:
      "Choisissez votre prestation, une date, une heure et indiquez votre prénom. Envoyez ensuite votre demande directement sur WhatsApp. Le salon vous confirmera ensuite le rendez-vous.",
  },
  {
    id: "confirmation",
    question: "Le rendez-vous est-il confirmé immédiatement ?",
    answer:
      "Non. Le message envoyé est une demande de rendez-vous. Le salon confirme ensuite.",
  },
  {
    id: "ou",
    question: "Où se trouve La Main d’Or ?",
    answer:
      "La Main d’Or Coiffure se trouve à Zopah, fin du pavé ICC, à Abomey-Calavi au Bénin.",
  },
  {
    id: "horaires",
    question: "Quels sont les horaires du salon ?",
    answer: "Le salon est ouvert tous les jours de 08h00 à 21h30.",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

/**
 * Editorial photographs used as art direction.
 * They are not client portraits of La Main d’Or and must never be labelled as such.
 */
export const GALLERY: GalleryImage[] = [
  {
    src: "/images/hero-locks.jpg",
    alt: "Détail de dreadlocks soigneusement formées, lumière rasante",
    caption: "Locks",
    width: 1728,
    height: 1152,
  },
  {
    src: "/images/look-back.jpg",
    alt: "Longues dreadlocks vues de dos, lumière de fenêtre",
    caption: "Cascade",
    width: 1152,
    height: 1728,
  },
  {
    src: "/images/hands-retwist.jpg",
    alt: "Mains en train de resserrer des dreadlocks sur une table de travail",
    caption: "Retwist",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/chair-locks.jpg",
    alt: "Personne assise de dos, dreadlocks fraîchement resserrées",
    caption: "Le fauteuil",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/texture.jpg",
    alt: "Texture rapprochée d’une dreadlock",
    caption: "Matière",
    width: 1408,
    height: 1408,
  },
  {
    src: "/images/wash.jpg",
    alt: "Dreadlocks encore humides, soin du lavage",
    caption: "Lavage",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/beard.jpg",
    alt: "Ligne de barbe nette, finition soignée",
    caption: "Barbe",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/mirror.jpg",
    alt: "Fauteuil et miroir dans un salon, lumière d’après-midi",
    caption: "Atelier",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/interior.jpg",
    alt: "Intérieur de salon, fauteuil et lumière de fenêtre",
    caption: "Le cadre",
    width: 1792,
    height: 1008,
  },
  {
    src: "/images/street.jpg",
    alt: "Rue de quartier au Bénin, terre latérite et pavé en fin de journée",
    caption: "Zopah",
    width: 1792,
    height: 1008,
  },
];

export const NAV = [
  { href: "#locks", label: "Locks" },
  { href: "#services", label: "Services" },
  { href: "#atelier", label: "Atelier" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const MARQUEE = [
  "Création de locks",
  "Retwist",
  "Réparation",
  "Délockage",
  "Locks enfant",
  "Coiffure homme",
  "Coiffure femme",
  "Coupe",
  "Barbe",
  "Lavage",
];

/** Request slots. Last slot 21:00. The salon closes at 21:30. Not a live calendar. */
export const TIME_SLOTS = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
] as const;

export function getService(id: string | null | undefined): Service | undefined {
  if (!id) return undefined;
  return SERVICES.find((s) => s.id === id);
}
