import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { SiThemoviedatabase } from "react-icons/si";
import { MdPerson, MdExitToApp } from "react-icons/md";
import { Avatar, Dropdown, MenuProps } from "antd";

import useAuthStore from "../store/client/useAuth";

const Navbar: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);

  const dropDownItems = useMemo<MenuProps["items"]>(
    () => [
      {
        label: import.meta.env.VITE_USERNAME,
        key: "profile",
        icon: <MdPerson />,
      },
      { type: "divider" },
      {
        label: <a onClick={logout}>Logout</a>,
        key: "logout",
        icon: <MdExitToApp />,
        danger: true,
      },
    ],
    []
  );

  const menuProps = useMemo(
    () => ({
      items: dropDownItems,
    }),
    [dropDownItems]
  );

  return (
    <header className="w-screen bg-darkblue text-white flex">
      <nav className="w-full max-w-[1200px] mx-auto p-[1rem] flex justify-between items-center gap-4">
        <Link to="/" className="text-white no-underline leading-none w-12 h-12">
          <SiThemoviedatabase size={48} />
        </Link>
        <Dropdown menu={menuProps} trigger={["click"]} placement="bottomRight">
          <Avatar
            icon={<MdPerson />}
            size={40}
            className="cursor-pointer bg-lightblue"
          />
        </Dropdown>
      </nav>
    </header>
  );
};

export default Navbar;
