import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";

const MonthlyStats = () => {
  const monthlyData = useSelector((state) => state.monthlyData);
  const [monthlyStats, setMonthlyStats] = useState([]);

  useEffect(() => {
    const month = window.location.pathname.split("-")[1];
    Object.keys(monthlyData).map((item) => {
      if (item === month) {
        setMonthlyStats(monthlyData[item]);
      }
    });
  }, [monthlyData]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      <h1 className="text-center">Monthly Data</h1>
      <Table columns={columns} dataSource={monthlyStats} />
    </div>
  );
};

export default MonthlyStats;
