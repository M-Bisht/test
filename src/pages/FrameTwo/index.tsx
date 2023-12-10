import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const FrameTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex font-kohsantepheap h-[1080px] justify-end mx-auto relative w-full">
        <div className="md:h-[1080px] h-[2160px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute md:h-[1080px] h-[1180px] inset-x-[0] mx-auto pb-[100px] top-[0] w-full">
            <Img
              className="h-[1080px] mx-auto object-cover w-full"
              src="images/img_beautiful_1080x1920.png"
              alt="beautiful"
            />
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[4%] w-[94%]">
              <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <Text
                  className="flex-1 md:text-5xl text-[64px] text-white-A700 w-auto"
                  size="txtKohSantepheapBold64WhiteA700"
                >
                  LOGO
                </Text>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[50px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                    size="txtKohSantepheapRegular36"
                  >
                    ABOUT
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                    size="txtKohSantepheapRegular36"
                  >
                    BLOG
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                    size="txtKohSantepheapRegular36"
                  >
                    DESTINATION
                  </Text>
                </div>
              </header>
              <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start mt-[159px] w-auto md:w-full">
                <Text
                  className="md:text-5xl text-[64px] text-white-A700 tracking-[12.80px] uppercase w-auto"
                  size="txtKohSantepheapRegular64"
                >
                  Discover
                </Text>
                <Text
                  className="md:text-5xl text-[64px] text-white-A700 tracking-[12.80px] uppercase w-auto"
                  size="txtKohSantepheapRegular64"
                >
                  Your tourist destination
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[377px] w-full">
                <div className="flex flex-row gap-[50px] items-center justify-start sm:mt-0 mt-[87px] w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 w-10"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                  </div>
                  <Img
                    className="h-10 w-10"
                    src="images/img_info.svg"
                    alt="info"
                  />
                </div>
                <Text
                  className="md:text-5xl text-9xl text-white-A700 tracking-[25.60px] uppercase"
                  size="txtKohSantepheapRegular128"
                >
                  01
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute backdrop-opacity-[0.5] bg-gray-900_01 blur-[200.00px] bottom-[41%] h-[200px] inset-x-[0] mx-auto w-full"></div>
          <div className="absolute bg-gray-900 bottom-[0] h-[1080px] inset-x-[0] mx-auto w-full"></div>
        </div>
        <div
          className="common-pointer absolute bottom-[0] flex flex-col gap-5 inset-x-[0] items-center justify-end mx-auto md:px-5 w-auto"
          onClick={() => navigate("/framethree")}
        >
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[8.00px] uppercase w-auto"
            size="txtKohSantepheapRegular40"
          >
            SCROLL
          </Text>
          <Line className="bg-white-A700 h-[120px] w-[5px]" />
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

export default FrameTwoPage;
