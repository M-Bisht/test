import React from "react";

import { Img } from "components";

const FrameOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[1080px] sm:h-auto object-cover w-full"
          src="images/img_beautiful.png"
          alt="beautiful"
        />
      </div>
    </>
  );
};

export default FrameOnePage;
