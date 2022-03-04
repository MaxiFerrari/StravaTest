import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Divider } from "antd";

const Activities = (props) => {
  const [fullName, setFullName] = useState(
    props.userInfo.firstname + " " + props.userInfo.lastname,
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "Distance",
      dataIndex: "distance",
      key: "distance",
    },
    {
      title: "Moving Time",
      dataIndex: "moving_time",
      key: "moving_time",
    },
    {
      title: "Elevation Gain",
      dataIndex: "total_elevation_gain",
      key: "total_elevation_gain",
    },
  ];

  return (
    <div>
      <Divider />
      <h1 className="text-center">Activities</h1>
      <Divider />
      <Table columns={columns} dataSource={props.athleteData} />
      <Divider />
    </div>
  );
};

export default Activities;
