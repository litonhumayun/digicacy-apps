import React from "react";
import Banner from "../../Components/Banner/Banner";
import Stats from "../../Components/Stats/Stats";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const appsData = useLoaderData();
  //   console.log(appsData);
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApps appsData={appsData}></TrendingApps>
    </div>
  );
};

export default Home;
