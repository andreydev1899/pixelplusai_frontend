import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface UserMenuProps {
  avatarUri: string;
  name?: string;
  role?: string;
}

function UserMenu({
  avatarUri,
  name = "Moni Roy",
  role = "Admin",
}: UserMenuProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-x-4">
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <img src={avatarUri} alt="Avatar" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-y-0.5 text-primary-text">
        <p className="font-bold text-sm">{name}</p>
        <p className="font-semibold text-xs">{role}</p>
      </div>
      <span
        className="h-[18px] w-[18px] flex items-center justify-center text-xs border border-primary-text rounded-full"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
      </span>
    </div>
  );
}

export default UserMenu;
