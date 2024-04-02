import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const DetailRes = () => {
  const id:Readonly<any> = useParams<any>();
  const [detailData, setDetailData] = useState<any>([]);

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailData = async () => {
    try {
      const res: any = await axios.get(
        `http://localhost:3001/api/restaurant/get-detail-by-id?_id=${id}`
      );
      const data = await res.data.message;
      if (data) {
        setDetailData(data);
        console.log("check data : ", detailData);
      } else {
        console.log("Missing Data");
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <>
      <div>
        <Layout style={{ backgroundColor: "white" }}>
          <Content style={{ padding: "40px 48px" }}>
            <h1
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "50px",
              }}
            >
              Detail Restaurant
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ marginRight: "50px" }}>
                <Image
                  width={"350px"}
                  src={detailData.image}
                  style={{
                    borderRadius: "5px",
                    boxShadow: "0px 2px 2px black",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                  {detailData.name}
                </span>
                <span>Address: {detailData.address}</span>
                <hr />
                <span>Phone: {detailData.phone}</span>
                <hr />
                <span style={{ marginBottom: "20px" }}>
                  Description : {detailData.description}
                </span>
                {/* <iframe
                  src={detailData.district}
                  width="350"
                  height="350"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </>
  );
};

export default DetailRes;
