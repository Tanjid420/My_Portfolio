import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:tanjidkhanarnob2000@gmail.com">
        <p className="text-sm rotate-90 w-[470px] tracking-widest text-textGreen">
          tanjidkhanarnob2000@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-[102px] bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;