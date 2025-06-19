import { ABOUT } from "@/config/constants";


const Story  = () => {
  return (
    <section
      className="space-y-4 leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 text-lg text-justify indent-10"
      dangerouslySetInnerHTML={{ __html: ABOUT }}
    />
  );
};

export default Story;
