import PageContainer from "@/components/common/page-container";
import { PageText } from "@/components/common/page-text";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <PageContainer
      title={<PageText page="contact" field="title" />}
      description={<PageText page="contact" field="description" />}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex justify-center ">
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
