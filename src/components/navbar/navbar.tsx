import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
import { Menu, Modal, notification } from "antd";

const Header = () => {
  const [current, setCurrent] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  useEffect(() => {});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    localStorage.removeItem("token");
    navigate("/");
    notification.success({
      message: "Log out success",
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogOut = () => {
    showModal();
  };

  const items: MenuProps["items"] = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeFilled />,
    },
    {
      label: <Link to={"restaurants"}> {token ? "Restaurant" : ""}</Link>,
      key: "app",
      disabled: token ? false : true,
    },
    {
      label: <Link to={"adding"}>{token ? "Adding Restaurant" : ""}</Link>,
      key: "SubMenu",
      disabled: token ? false : true,
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
              label: <span onClick={handleLogOut}> Log out</span>,
              key: "logout",
              icon: <UserAddOutlined />,
            },
          ],
        },
      ],
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Modal
        title="Logout"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Do you want to log out ?</p>
      </Modal>
    </>
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
