import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import {
  BankFilled,
  MailFilled,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  PhoneFilled,
  HomeFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "home",
    icon: <HomeFilled />,
  },
  {
    label: <Link to={"restaurants"}>Restaurants</Link>,
    key: "app",
    icon: <BankFilled />,
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
            icon:<PhoneFilled />,
          },
          {
            label: "Email",
            key: "setting:2",
            icon:<MailFilled />,
          },
        ],
      },
    ],
  },
  {
    label: "Account",
    key: "Account",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to={"login"}>Login</Link>,
            key: "login",
            icon: <UserOutlined />,
          },
          {
            label: <Link to={"register"}>Register</Link>,
            key: "register",
            icon: <UserAddOutlined />,
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
