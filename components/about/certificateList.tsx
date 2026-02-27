"use client";

import { GrCertificate as CertificateIcon } from "react-icons/gr";

import SectionHeading from "../common/section-header";
import SectionSubHeading from "../common/section-sub-header";
import { CERTIFICATION } from "@/config/certificate";

import CertificateCard from "./certificateCard";

import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";

const CertificateList = () => {
  const { language } = useLanguageStore();
  const t = translations[language].about;

  return (
    <section className="space-y-6 font-sora">
      <div className="space-y-2">
        <SectionHeading
          title={t.certificate}
          icon={<CertificateIcon size={22} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">{t.certDesc}</p>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CERTIFICATION?.map((item, index) => (
          <CertificateCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CertificateList;
