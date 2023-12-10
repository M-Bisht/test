import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const FrameThreePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-kohsantepheap h-[1080px] mx-auto relative w-full">
        <Img
          className="absolute h-[100px] inset-x-[0] mx-auto object-cover top-[0] w-full"
          src="images/img_beautiful_100x1920.png"
          alt="beautiful"
        />
        <div className="absolute bg-gray-900 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[15px] w-full">
          <div className="flex flex-col gap-[27px] justify-start mr-[46px] mt-[129px] md:px-5 w-[81%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[117px] w-auto md:w-full">
              <Text
                className="md:text-5xl text-8xl text-white-A700 tracking-[9.60px] uppercase w-auto"
                size="txtKohSantepheapBold96"
              >
                top
              </Text>
              <Text
                className="md:text-5xl text-8xl text-white-A700 tracking-[9.60px] uppercase w-auto"
                size="txtKohSantepheapLight96"
              >
                DESTINATION
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start mb-[142px] w-auto md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Img
                    className="h-[541px] sm:h-auto object-cover w-[344px] md:w-full"
                    src="images/img_frame8.png"
                    alt="frameEight"
                  />
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[4.80px] underline uppercase w-auto"
                    size="txtKohSantepheapLight48"
                  >
                    Mecca
                  </Text>
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Img
                    className="h-[541px] sm:h-auto object-cover w-[344px] md:w-full"
                    src="images/img_frame8_541x344.png"
                    alt="frameEight_One"
                  />
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[4.80px] underline uppercase w-auto"
                    size="txtKohSantepheapLight48"
                  >
                    Jeddah
                  </Text>
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Img
                    className="h-[541px] sm:h-auto object-cover w-[344px] md:w-full"
                    src="images/img_frame8_1.png"
                    alt="frameEight_Two"
                  />
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[4.80px] underline uppercase w-auto"
                    size="txtKohSantepheapLight48"
                  >
                    Riyadh
                  </Text>
                </div>
              </div>
              <Text
                className="md:mt-0 mt-[607px] md:text-5xl text-9xl text-white-A700 tracking-[25.60px] uppercase"
                size="txtKohSantepheapRegular128"
              >
                02
              </Text>
            </div>
          </div>
        </div>
        <div
          className="common-pointer absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto md:px-5 top-[0] w-auto"
          onClick={() => navigate("/frametwo")}
        >
          <Line className="bg-white-A700 h-[60px] w-[5px]" />
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[8.00px] uppercase w-auto"
            size="txtKohSantepheapRegular40"
          >
            Home
          </Text>
        </div>
      </div>
    </>
  );
};

export default FrameThreePage;
