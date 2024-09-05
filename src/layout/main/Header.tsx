import { TbBell } from "react-icons/tb";

import UserMenu from "@/components/common/UserMenu";

const dummyStatus = { news: 6 };

function Header() {
  const { news } = dummyStatus;

  return (
    <div className="py-2.5 px-5 flex items-center justify-end gap-x-3 bg-white">
      <div className="relative h-6 w-6 flex items-center justify-center">
        <TbBell size={24} />
        <span className="absolute top-0 right-0 h-3 w-3 flex items-center justify-center font-bold text-[8px] text-white bg-danger rounded-full">
          {news}
        </span>
      </div>
      <UserMenu avatarUri="/images/layout/avatar.png" />
    </div>
  );
}

export default Header;
