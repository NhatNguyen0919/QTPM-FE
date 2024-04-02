import {
  Button,
  Form,
  Input,
  Layout,

  notification,
} from "antd";
import React, { useState } from "react";
import axios from "axios";

const AddingRes = () => {
  const [form] = Form.useForm();
  const [image, setImg] = useState<any>();

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    height: "100%",
    width: "100%",
    paddingInline: 48,
    padding: "20px",
    lineHeight: "500px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  };

  const handleClick = async (values: any) => {
    const { name, address, phone, description, district } = values;
    const data = { name, address, phone, description, image, district };
    console.log("check data", values);
    if (!address || !phone || !name) {
      notification.error({
        message: "Missing Input !",
      });
      return;
    } else {
      try {
        const res: any = await axios.post(
          "http://localhost:3001/api/restaurant/addnew",
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.status === 200) {
          await console.log("check data");
          notification.success({
            message: "Add new success",
          });
          form.resetFields();
          setImg("");
        } else {
          notification.success({
            message: "Add new fail",
          });
        }
      } catch (error) {
        console.log("Eror : ", error);
      }
    }
  };

  const convertBase64 = (e: any) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImg(reader.result);
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  return (
    <>
      <Layout style={contentStyle}>
        <div className="w-1/2 bg-white	">
          <Form
            {...formItemLayout}
            variant="filled"
            style={{ maxWidth: 600 }}
            onFinish={handleClick}
            form={form}
            className="text-center items-center	"
          >
            <h1 className="font-bold text-xl">Adding Restaurant</h1>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input!" }]}
              style={{ marginTop: "20px" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Source"
              name="district"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <input onChange={convertBase64} accept="image/" type="file"></input>
            <div>
              {image == "" || image == null ? (
                ""
              ) : (
                <img width={100} height={100} src={image} />
              )}
            </div>

            <Button
              type="default"
              style={{ marginTop: "20px" }}
              onClick={() => {
                form.submit();
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Layout>
    </>
  );
};

export default AddingRes;
