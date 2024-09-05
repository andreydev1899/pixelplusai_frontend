import { useLocation, useNavigate } from "react-router-dom";

import Logo from "@/components/common/Logo";
import Profile from "@/components/common/Profile";

import AvatarImage from "/images/layout/avatar.png";
import HomeIcon from "/icons/layout/home.png";
import ClientIcon from "/icons/layout/client.png";
import AssetIcon from "/icons/layout/asset.png";
import HistoryIcon from "/icons/layout/history.png";
import HelpCenterIcon from "/icons/layout/help-center.png";
import NotificationIcon from "/icons/layout/notification.png";
import SettingIcon from "/icons/layout/setting.png";
import LogoutIcon from "/icons/layout/logout.png";
import classes from "./Sidebar.module.css";

type INavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const mainItems: INavItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <img src={HomeIcon} />,
  },
  {
    name: "Clients",
    path: "/clients",
    icon: <img src={ClientIcon} />,
  },
  {
    name: "Assets",
    path: "/assets",
    icon: <img src={AssetIcon} />,
  },
  {
    name: "History",
    path: "/history",
    icon: <img src={HistoryIcon} />,
  },
  {
    name: "Help Centre",
    path: "/help-center",
    icon: <img src={HelpCenterIcon} />,
  },
];

const otherItems: INavItem[] = [
  {
    name: "Notifications",
    path: "/notifications",
    icon: <img src={NotificationIcon} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <img src={SettingIcon} />,
  },
  {
    name: "Logout",
    path: "/logout",
    icon: <img src={LogoutIcon} />,
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleItemClick = (path: string) => () => {
    navigate(path);
  };

  return (
    <div className={classes.root}>
      <Logo className="!text-left" />
      <div className={classes.navbar}>
        <ul className={classes.itemlist}>
          {mainItems.map((item, index) => (
            <li
              key={index}
              className={pathname === item.path ? classes.activeItem : ""}
              onClick={handleItemClick(item.path)}
            >
              {item.icon}
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        <ul className={classes.itemlist}>
          {otherItems.map((item, index) => (
            <li
              key={index}
              className={pathname === item.path ? classes.activeItem : ""}
              onClick={handleItemClick(item.path)}
            >
              {item.icon}
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* <Profile avatarUri={AvatarImage} /> */}
    </div>
  );
}

export default Sidebar;
