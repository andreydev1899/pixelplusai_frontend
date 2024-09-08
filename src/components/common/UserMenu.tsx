import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface UserMenuProps {
  avatarUri: string;
  email?: string;
  role?: string;
}

function UserMenu({
  avatarUri,
  email = "moniroy@gmail.com",
  role = "Admin",
}: UserMenuProps) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="flex items-center gap-x-4 max-w-[200px]">
        <div className="shrink-0 h-12 w-12 rounded-full overflow-hidden">
          <img src={avatarUri} alt="Avatar" className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-y-0.5 text-primary-text overflow-hidden">
          <p className="font-bold text-sm overflow-hidden text-ellipsis">
            {email}
          </p>
          <p className="font-semibold text-xs">{role}</p>
        </div>
        <span
          className="shrink-0 h-[18px] w-[18px] flex items-center justify-center text-xs border border-primary-text rounded-full"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
        </span>
      </div>
      {isExpanded && (
        <ul className="absolute mt-4 right-0 py-1.5 text-xs bg-white rounded-lg">
          <li
            onClick={() => {
              navigate("/manage");
            }}
            className="hover:bg-primary-white px-5 py-1 cursor-pointer"
          >
            User Management
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
