import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Divider } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import _ from "lodash";

const MonthlyStats = (props) => {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const [lastsMonths, setLastsMonths] = useState([]);
  const [groupedByMonth, setGroupedByMonth] = useState({});

  const monthNames2 = [
    {
      name: "January",
      value: "01",
    },
    {
      name: "February",
      value: "02",
    },
    {
      name: "March",
      value: "03",
    },
    {
      name: "April",
      value: "04",
    },
    {
      name: "May",
      value: "05",
    },
    {
      name: "June",
      value: "06",
    },
    {
      name: "July",
      value: "07",
    },
    {
      name: "August",
      value: "08",
    },
    {
      name: "September",
      value: "09",
    },
    {
      name: "October",
      value: "10",
    },
    {
      name: "November",
      value: "11",
    },
    {
      name: "December",
      value: "12",
    },
  ];

  function getLast3Months() {
    var monthNames = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];

    var today = new Date();
    var last3Months = [];
    var i = 0;
    for (i = 0; i < 3; i++) {
      last3Months.push(monthNames[today.getMonth() - i]);
    }
    return last3Months;
  }

  useEffect(() => {
    const last3Months = getLast3Months();
    let data = [];
    props.athleteData.filter((item) => {
      if (
        item.start_date.split("-")[1] === last3Months[0] ||
        item.start_date.split("-")[1] === last3Months[1] ||
        item.start_date.split("-")[1] === last3Months[2]
      ) {
        data.push(item);
      }
    });
    let result = _.groupBy(data, (item) => {
      return item.start_date.split("-")[1];
    });

    let monthInfo = [];
    Object.keys(result).map((item) => {
      monthInfo.push({
        month: item,
        distance: _.sumBy(result[item], "distance"),
        moving_time: _.sumBy(result[item], "moving_time"),
        total_elevation_gain: _.sumBy(result[item], "total_elevation_gain"),
      });
    });

    dispatch({
      type: "MONTHLY_DATA",
      payload: result,
    });
    setFilteredData(monthInfo);
  }, [props.athleteData]);

  const columns = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
      render: (text, record) => {
        return (
          <Link to={`/monthly-${text}`}>
            <Tag color="blue">
              {
                monthNames2.filter((item) => item.value === record.month)[0]
                  .name
              }
            </Tag>
          </Link>
        );
      },
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
      <h1 className="text-center">Monthly Stats</h1>
      <Divider />

      <Table columns={columns} dataSource={filteredData} />

      <Divider />
    </div>
  );
};

export default MonthlyStats;
