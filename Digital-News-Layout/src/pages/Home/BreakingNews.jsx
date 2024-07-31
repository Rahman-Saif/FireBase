import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
      <div className="flex">
        <button className="btn btn-secondary">Breaking News!</button>
        <Marquee>
          News! Get the most exciting news from all over the world in seconds!
          {/* News! Get the most exciting news from all over the world in seconds!
          News! Get the most exciting news from all over the world in seconds! */}
        </Marquee>
      </div>
    );
};

export default BreakingNews;