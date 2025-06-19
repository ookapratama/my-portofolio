import { Separator } from "../ui/separator";
import Resume from "./resume";
import Skills from "./skills";
import Story from "./story";

const About = () => {
  return (
    <>
      <Story />
      <Resume />
      <Separator className="my-4" />
      <Skills />
    </>
  );
};

export default About;
