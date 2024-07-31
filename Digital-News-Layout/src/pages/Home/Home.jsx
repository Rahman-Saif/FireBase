import React from 'react';
import Header from '../shared/header/Header';
import Navbar from '../shared/navbar/Navbar';
import LeftSideNav from '../shared/leftsidenav/LeftSideNav';
import RightSideNav from '../shared/rightsidenav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCart from './NewsCart';

const Home = () => {
  const news=useLoaderData();
  console.log(news);
    return (
      <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        <h2 className="text-3xl font-poppins font-bold">This is Home!!</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div >
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="md:col-span-2 ">
            {
              news.map(aNews=><NewsCart key={aNews.id} news={aNews}></NewsCart>)
            }
          </div>
          <div className="border">
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
    );
};

export default Home;