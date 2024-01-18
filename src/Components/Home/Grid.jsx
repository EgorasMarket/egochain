import React from "react";

const Grid = () => {
  return (
    <div className="home_div_section1_grid_bg">
      <svg
        width="102%"
        height="102%"
        xmlns="http://www.w3.org/2000/svg"
        // style="--x: 274px; --y: 713px; --size: 1.087920298879203;"
        // class="-ml-[2px] -mt-[2px] text-white/45 heroGrid_spotlight__Cw43Y"
      >
        <defs>
          <pattern
            id="smallGrid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
            ></path>
          </pattern>
          <pattern
            id="grid"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <rect width="240" height="240" fill="url(#smallGrid)"></rect>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"></rect>
      </svg>
    </div>
  );
};

export default Grid;
