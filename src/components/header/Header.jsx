import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

function Header() {
  const {
    clearActivity,
    setActivities,
    fetchData,
    setPageNumber,
    url,
    config,
  } = useGlobalContext();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  // const url = "https://final-project-backend-ashy.vercel.app";
  // console.log("url in header : ", url);

  const fetchDatabyType = async (type) => {
    try {
      const res = await axios.get(`${url}/activity`, {
        ...config,
        params: { type },
      });
      console.log("fetchDatabyType", res.data);
      setActivities(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   fetchDatabyType();
  // }, []);

  const handleClick = () => {
    clearActivity();
    navigate("/form");
  };

  const handleClickSortAll = (e) => {
    e.preventDefault();
    setPageNumber(1);
    fetchData();
  };

  const handleClickSortRun = (e) => {
    e.preventDefault();
    fetchDatabyType("run");
  };

  const handleClickSortSwim = (e) => {
    e.preventDefault();
    fetchDatabyType("swim");
  };

  const handleClickSortBike = (e) => {
    e.preventDefault();
    fetchDatabyType(e.target.value);
  };

  return (
    <section className="header container">
      {location.pathname === "/" ? (
        <>
          <div className="header-activity">
            <button onClick={handleClickSortAll}>ALL</button>
            <button onClick={handleClickSortRun}>RUN</button>
            <button onClick={handleClickSortSwim}>SWIM</button>
            <div className="header-dropdown">
              <select onClick={handleClickSortBike}>
                <option value="bike">Bike</option>
                <option value="walk">Walk</option>
                <option value="hike">Hike</option>
                <option value="scuba">Scuba</option>
              </select>
            </div>
          </div>
          <div className="header-add">
            <button onClick={handleClick}>ADD ACTIVITIES</button>
          </div>

          <div className="header-activity-responsive">
            <button onClick={handleClickSortAll}>ALL</button>
            <div className="header-dropdown">
              <select onClick={handleClickSortBike}>
                <option value="run">Run</option>
                <option value="swim">Swim</option>
                <option value="bike">Bike</option>
                <option value="walk">Walk</option>
                <option value="hike">Hike</option>
                <option value="scuba">Scuba</option>
              </select>
            </div>
          </div>
          <div className="header-add-responsive">
            <button onClick={handleClick}>ADD ACTIVITIES</button>
          </div>
        </>
      ) : (
        <>
          <div className="header-activity-change">
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Header;
