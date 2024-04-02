import { Layout } from "antd";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <Footer
          className="bg-black text-white mt-[0px]"
          style={{ textAlign: "center" }}
        >
          Finding Res ©{new Date().getFullYear()} All Rights Reserved.
        </Footer>
      </Layout>
    </>
  );
};

export default Footer;
