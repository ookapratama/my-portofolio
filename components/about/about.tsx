"use client";

import { HiOutlineBriefcase as CareerIcon } from "react-icons/hi";
import { TbSchool as EducationIcon } from "react-icons/tb";
import { GiOrganigram as OrganizationIcon } from "react-icons/gi";
import { GrCertificate as CertificateIcon } from "react-icons/gr";

import { Separator } from "../ui/separator";
import AboutSection from "./about-section";
import CareerCard from "./career-card";
import EducationCard from "./education-card";
import OrganizationCard from "./organization-card";
import CertificateCard from "./certificate-card";
import Resume from "./resume";
import Skills from "./skills";
import Story from "./story";

import { careerExperiences } from "@/config/career";
import { EDUCATION } from "@/config/education";
import { ORGANIZATION } from "@/config/organization";
import { CERTIFICATION } from "@/config/certificate";

import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";

const About = () => {
  const { language } = useLanguageStore();
  const t = translations[language].about;

  return (
    <>
      <Story />
      <Resume />
      <Separator className="my-6" />
      <Skills />
      <Separator className="my-8" />
      <AboutSection
        title={t.career}
        description={t.careerDesc}
        icon={<CareerIcon className="mr-1" />}
        items={careerExperiences}
        renderItem={(item, index) => <CareerCard key={index} {...item} />}
      />
      <Separator className="my-8" />
      <AboutSection
        title={t.education}
        description={t.educationDesc}
        icon={<EducationIcon size={22} className="mr-1" />}
        items={EDUCATION}
        renderItem={(item, index) => <EducationCard key={index} {...item} />}
      />
      <Separator className="my-8" />
      <AboutSection
        title={t.organization}
        description={t.orgDesc}
        icon={<OrganizationIcon size={22} className="mr-1" />}
        items={ORGANIZATION}
        renderItem={(item, index) => <OrganizationCard key={index} {...item} />}
      />
      <Separator className="my-8" />
      <AboutSection
        title={t.certificate}
        description={t.certDesc}
        icon={<CertificateIcon size={22} className="mr-1" />}
        items={CERTIFICATION}
        renderItem={(item, index) => <CertificateCard key={index} {...item} />}
      />
    </>
  );
};

export default About;
