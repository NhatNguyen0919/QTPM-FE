import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Space, Table, Tag, Select } from "antd";
import type { TableProps } from "antd";
import { useNavigate } from "react-router";

const RestaurantPage = () => {
  const [datasearch, setDatasearch] = useState<any>([]);
  const navigate = useNavigate();
  const [dataDis, setDataDis] = useState<any>("");

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const res: any = await axios.get(
        "http://localhost:3001/api/restaurant/getall"
      );
      const data = await res.data.message;
      if (data) {
        setDatasearch(data);
      } else {
        console.log("Pending");
      }
      console.log("check data : ", datasearch[0].district);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleChangeRoute = (values: any) => {
    navigate(`/restaurant/${values}`);
  };

  const columns: TableProps<any>["columns"] = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "300px",
      render: (img) => (
        <>
          <img src={img} width={200} height={200} alt="" />
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "200px",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "200px",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "200px",
      render: (text) => <a>{text}</a>,
    },
    {
      dataIndex: "_id",
      key: "_id",
      render: (id) => (
        <>
          <Button onClick={() => handleChangeRoute(id)}>Click here</Button>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 h-screen items-center border-red-500 justify-center">
      <h3 className="font-bold text-xl">Danh Sach Res</h3>
      <div className="flex gap-8">
        <Select style={{ width: 300 }} />
      </div>
      <Table columns={columns} dataSource={datasearch} />
    </div>
  );
};

export default RestaurantPage;
