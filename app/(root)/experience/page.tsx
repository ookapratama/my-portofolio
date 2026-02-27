"use client";

import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";
import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/experience/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Experiences } from "@/config/experience";

const renderContent = (tabVal: string) => {
  let expArr = Experiences;
  if (tabVal === "projects") {
    expArr = expArr.filter((val) => val.type === "Projects");
  } else if (tabVal === "contributions") {
    expArr = expArr.filter((val) => val.type === "Contributions");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {expArr.map((exp) => (
        <ProjectCard project={exp} key={exp.id} />
      ))}
    </div>
  );
};

export default function ExperiencePage() {
  const { language } = useLanguageStore();
  const t = translations[language].pages.experience;

  return (
    <PageContainer title={t.title} description={t.description}>
      <Tabs defaultValue="all" className="w-full">
        <TabsContent value="all" className="w-full">
          {renderContent("all")}
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
