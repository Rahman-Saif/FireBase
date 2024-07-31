import React from 'react';
import { FaBeer, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import qZone1 from '../../../../assets/qZone1.png';
import qZone2 from '../../../../assets/qZone2.png';
import qZone3 from '../../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
      <div>
        <div className="p-4 space-y-3">
          <h2 className="text-3xl ">Login With</h2>
          <button className="btn btn-outline w-full">
            <FaGoogle />
            Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub />
            Github
          </button>
        </div>
        <div className="p-4 space-y-3 mb-6 ">
          <h2 className="text-3xl mb-3 ">Find Us On</h2>
          <a
            href=""
            className="p-4 flex text-lg items-center border-rounded-t-lg"
          >
            <FaFacebook className="mr-3"></FaFacebook>
            <span>Facebook</span>
          </a>
          <a
            href=""
            className="p-4 flex text-lg items-center border-rounded-t-lg"
          >
            <FaTwitter className="mr-3"></FaTwitter>
            <span>Twitter</span>
          </a>
          <a
            href=""
            className="p-4 flex text-lg items-center border-rounded-t-lg"
          >
            <FaInstagram className="mr-3"></FaInstagram>
            <span>Instagram</span>
          </a>
        </div>
        {/* Qzone */}
        <div className="p-4 space-y-3 mb-6 ">
          <h2 className="text-3xl mb-3 ">Q Zone</h2>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
        
      </div>
    );
};

export default RightSideNav;