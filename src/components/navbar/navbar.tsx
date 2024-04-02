import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  UserOutlined,
  HomeFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Menu, Modal, notification } from "antd";
import Footer from "../footer/footer";

const Header = () => {
  const [current, setCurrent] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  useEffect(() => { });

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
      icon: <Avatar size="small" icon={<UserOutlined />} />,
      children: [
        {
          type: "group",
          children: [
            {
              label: <Link to={"login"}>Login</Link>,
              key: "login",
            },
            {
              label: <span onClick={handleLogOut}> Log out</span>,
              key: "logout",
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
      <Footer />
    </div>
  );
};

export default Navbar;
