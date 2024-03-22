import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image } from "antd";

const DetailRes = (props: any) => {
  const { id }: { id: string } = useParams();
  const [detailData, setDetailData] = useState<any>([]);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
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
        <Image width={"200px"} src={detailData.image} />
        <hr />
        <span>Name : {detailData.name}</span>
        <hr />
        <span>Address: {detailData.address}</span>
        <hr />
        <span>Phone:{detailData.phone}</span>
        <hr />
        <span>Description : {detailData.description}</span>
        <iframe
          src={detailData.district}
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default DetailRes;
