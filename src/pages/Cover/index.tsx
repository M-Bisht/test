import React from "react";

import { Img, Text } from "components";

const CoverPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900_0a flex flex-col font-kohsantepheap sm:gap-10 md:gap-10 gap-[60px] items-center justify-center mx-auto p-[91px] md:px-10 sm:px-5 w-full">
        <Text
          className="mt-[18px] md:text-5xl text-[64px] text-black-900 tracking-[12.80px] uppercase"
          size="txtKohSantepheapBold64"
        >
          Website Animations
        </Text>
        <div className="flex flex-col font-raleway md:gap-10 gap-[62px] items-start justify-start max-w-[1258px] mb-[18px] mx-auto w-full">
          <div className="flex sm:flex-col flex-row gap-[50px] h-[337px] md:h-auto items-start justify-start max-w-[1258px] w-full">
            <Img
              className="flex-1 md:h-auto h-full max-h-[337px] object-cover sm:w-[]"
              src="images/img_frame21.png"
              alt="frameTwentyOne"
            />
            <Img
              className="flex-1 md:h-auto h-full max-h-[337px] object-cover sm:w-[]"
              src="images/img_frame31.png"
              alt="frameThirtyOne"
            />
          </div>
          <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-start w-auto sm:w-full">
            <div className="bg-gray-900 flex flex-col h-20 items-center justify-start p-[15px] rounded-[50%] shadow-bs w-20">
              <Img
                className="h-[50px]"
                src="images/img_logosfigma.svg"
                alt="logosfigma"
              />
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Img
                className="h-20 md:h-auto rounded-[50%] w-20"
                src="images/img_ellipse1.png"
                alt="ellipseOne"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[-0.24px] w-auto"
                size="txtRalewayBold32"
              >
                Abdullah Bawazir
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
