import React from 'react';
import moment from "moment";
import BreakingNews from '../../Home/BreakingNews';

const Header = () => {
    return (
      <div className="text-center mt-14	">
        <img src="../../../assets/logo.png" alt="" className="w-[470px] mx-auto" /> 
        {/* image e mx-auto use korle seta middle e ashe */}
        <p className="text-lg text-[#706F6F]">
          Journalism without fear or fever!
        </p>
        <p className="font-medium text-xl">
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
    );
};

export default Header;