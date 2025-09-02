import { Separator } from "../ui/separator";
import CareerList from "./careerList";
import CertificateList from "./certificateList";
import EducationList from "./educationList";
import OrganizationList from "./organizationList";
import Resume from "./resume";
import Skills from "./skills";
import Story from "./story";

const About = () => {
  return (
    <>
      <Story />
      <Resume />
      <Separator className="my-6" />
      <Skills />
      <Separator className="my-8" />
      <CareerList />
      <Separator className="my-8" />
      <EducationList />
      <Separator className="my-8" />
      <OrganizationList />
      <Separator className="my-8" />
      <CertificateList />
    </>
  );
};

export default About;
