import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activities from "./activities";
import MonthlyStats from "./monthly_stats";
import MonthlyData from "./monthlyData";
import { Divider } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const dispatch = useDispatch();
  const athleteData = useSelector((state) => state.athleteData);
  const userInfo = useSelector((state) => state.userInfo);
  const token = process.env.REACT_APP_AUTHORIZATION_TOKEN;
  useEffect(() => {
    fetch("https://www.strava.com/api/v3/athlete", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "USER_INFO",
          payload: data,
        }),
      );
    fetch("https://www.strava.com/api/v3/athlete/activities", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "ATHLETE_DATA",
          payload: data,
        }),
      );
  }, []);

  return (
    <div>
      <nav className="bg-dark d-flex justify-content-center navbar navbar-dark mb-5">
        <div>
          <Link to="/activities" className="btn btn-danger">
            Activities
          </Link>
          <Divider type="vertical" />
          <Link to="/monthly" className="btn btn-primary">
            Monthly Stats
          </Link>
        </div>
      </nav>
      <div>
        <h1 className="text-center">Welcome To Strava Stats</h1>
      </div>
      <Routes>
        <Route
          path={"/activities"}
          exact
          element={<Activities userInfo={userInfo} athleteData={athleteData} />}
        />
        <Route
          path={"/monthly"}
          exact
          element={<MonthlyStats athleteData={athleteData} />}
        />
        <Route path={"/monthly-:month"} exact element={<MonthlyData />} />
      </Routes>
    </div>
  );
}

export default App;
