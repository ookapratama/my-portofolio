import PageContainer from "@/components/common/page-container";
import { PageText } from "@/components/common/page-text";
import About from "@/components/about/about";

export default function AboutPage() {
  return (
    <PageContainer
      title={<PageText page="about" field="title" />}
      description={<PageText page="about" field="description" />}
    >
      <About />
    </PageContainer>
  );
}
