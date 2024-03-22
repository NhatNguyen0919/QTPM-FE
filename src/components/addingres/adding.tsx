import {
  Button,
  Form,
  Input,
  Layout,
  Upload,
  UploadProps,
  message,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
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
    height: 400,
    width: 800,
    paddingInline: 48,
    lineHeight: "500px",
  };

  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Layout style={contentStyle}>
        <Form
          {...formItemLayout}
          variant="filled"
          style={{ maxWidth: 600 }}
          onFinish={handleClick}
          form={form}
        >
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
      </Layout>
    </>
  );
};

export default AddingRes;
