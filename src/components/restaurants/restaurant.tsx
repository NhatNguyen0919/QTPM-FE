import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Space, Table, Tag, Select, Input } from "antd";
import type { TableProps } from "antd";
import { useNavigate } from "react-router";
import { SearchProps } from "antd/es/input";

const RestaurantPage = () => {
  const [datasearch, setDatasearch] = useState<any>([]);
  const navigate = useNavigate();
  const [dataDis, setDataDis] = useState<any>("");
  const { Search } = Input;
  const [dataServer, setDataServer] = useState<any>("");
  useEffect(() => {
    getAllData();
    returnTable();
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
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleChangeRoute = (values: any) => {
    navigate(`/restaurant/${values}`);
  };

  const handleOnChange: SearchProps["onSearch"] = async (value, _e, info) => {
    setDataDis(value);
    try {
      const res: any = await axios.get(
        `http://localhost:3001/api/restaurant/find-res/${dataDis}`
      );
      const dataRes = res.data.message;
      if (dataRes) {
        setDataServer(dataRes);
        console.log("check : res", dataServer);
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.log("Error:", error);
    }
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

  const returnTable = () => {
    return (
      <>
        <Table
          columns={columns}
          dataSource={dataServer ? [{ ...dataServer }] : datasearch}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col gap-8 items-center border-red-500 justify-center">
      <h3 className="font-bold text-xl">Restaurant List</h3>
      <div className="flex gap-8">
        <Search
          placeholder="input search text"
          size="large"
          enterButton="Search"
          onSearch={handleOnChange}
        />
      </div>
      {returnTable()}
    </div>
  );
};

export default RestaurantPage;
