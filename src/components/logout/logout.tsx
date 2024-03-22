import { Button, Layout, Popconfirm, message, notification } from "antd";
import React from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    notification.success({
      message: "Log out success",
    });
  };

  const cancel = () => {
    message.error("Click on No");
  };

  return (
    <Layout>
      <Popconfirm
        title="Logout"
        description="Are you sure to log out ?"
        onConfirm={handleLogout}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Log Out</Button>
      </Popconfirm>
    </Layout>
  );
};

export default Logout;
