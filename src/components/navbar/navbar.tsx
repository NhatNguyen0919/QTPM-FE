import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "home",
    icon: <MailOutlined />,
  },
  {
    label: <Link to={"restaurants"}>Restaurants</Link>,
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Contact Us",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "Phone number",
            key: "setting:1",
          },
          {
            label: "Email",
            key: "setting:2",
          },
        ],
      },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

const Navbar = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div>footer</div>
    </div>
  );
};

export default Navbar;
