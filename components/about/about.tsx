import { Separator } from "../ui/separator";
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

    </>
  );
};

export default About;
