import { StackCardIcons as StackIcons } from "./icons";

interface SkillsIconProps {
  size?: number;
  icons: string;
}

const SkillsIcon = ({ icons, size }: SkillsIconProps) => {
  return (
    <div>
      {StackIcons[icons] ? StackIcons[icons](size) : <></>}
    </div>
  );
};

export default SkillsIcon;
