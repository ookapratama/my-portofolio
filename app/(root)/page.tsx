import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ProjectCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
// import ookaImg from "@/public/ooka2.jpg";
import ookaImg from "@/public/ooka1.webp";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { LandingContent } from "@/components/common/landing-content";

export const metadata: Metadata = {
  title: `Ooka Pratama | Backend Developer Portfolio`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Ooka Pratama | Backend Developer",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Ooka Pratama Portfolio",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Ooka Pratama Portfolio Overview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Backend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Independent Developer",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.instagram],
    description: siteConfig.description,
  };

  // Structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ooka Pratama Portfolio",
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <LandingContent
        ookaImg={ookaImg}
        featuredExperiences={featuredExperiences}
        featuredSkills={featuredSkills}
      />
    </ClientPageWrapper>
  );
}
