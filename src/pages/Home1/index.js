import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Button } from "components/Button";
import { Image } from "components/Image";
import { CheckBox } from "components/CheckBox";
import { Text } from "components/Text";
import { List } from "components/List";

const Home1Page = () => {
  const handleNavigate1 = () => {
    window.location.href = "http://google.com";
  };

  return (
    <Column className="bg-gray_100 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[947px] 2xl:mr-[28px] 3xl:h-[1136px] 3xl:mr-[34px] h-[1015px] lg:h-[736px] lg:mr-[22px] mr-[31px] w-[98%] xl:h-[842px] xl:mr-[25px]">
        <Row className="absolute bg-gray_100 justify-start left-[0] w-[79%]">
          <aside className="bg-gray_900 items-center justify-end w-[7%]">
            <Column className="">
              <Column className="2xl:mb-[18px] 2xl:mr-[23px] 2xl:mt-[75px] 3xl:mb-[22px] 3xl:mr-[28px] 3xl:mt-[90px] justify-start lg:mb-[14px] lg:mr-[18px] lg:mt-[58px] mb-[20px] mr-[25.55px] mt-[81px] w-[68%] xl:mb-[16px] xl:mr-[21px] xl:mt-[67px]">
                <Stack className="2xl:h-[26px] 3xl:h-[31px] h-[27.449997px] lg:h-[20px] self-stretch w-[100%] xl:h-[23px]">
                  <Button className="2xl:left-[9px] 3xl:left-[11px] absolute bg-transparent border-bw left-[10px] lg:left-[7px] w-[50%] xl:left-[8px]">
                    {""}
                  </Button>
                </Stack>
                <Column className="2xl:mt-[35px] 3xl:mt-[42px] items-center lg:mt-[27px] mt-[38.33px] self-stretch w-[100%] xl:mt-[31px]">
                  <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                    <div className="2xl:h-[48px] 3xl:h-[58px] bg-blue_500 h-[51.09px] lg:h-[38px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[10%] xl:h-[43px]"></div>
                    <Button className="2xl:mb-[12px] 2xl:mt-[9px] 3xl:mb-[15px] 3xl:mt-[11px] bg-transparent border-bw lg:mb-[9px] lg:mt-[7px] mb-[13.610001px] mr-[1px] mt-[10.479996px] w-[50%] xl:mb-[11px] xl:mt-[8px]">
                      {""}
                    </Button>
                  </Row>
                </Column>
                <Column className="2xl:mt-[33px] 3xl:mt-[39px] items-end lg:mt-[25px] mt-[35.65001px] self-stretch w-[100%] xl:mt-[29px]">
                  <Image
                    src="img_iconbelll.svg"
                    className="2xl:h-[26px] 2xl:ml-[24px] 2xl:w-[25px] 3xl:h-[31px] 3xl:ml-[29px] 3xl:w-[30px] h-[27.45px] lg:h-[20px] lg:ml-[18px] lg:w-[19px] ml-[26px] mr-[1px] object-contain w-[27.45px] xl:h-[23px] xl:ml-[21px] xl:w-[22px]"
                    alt="IconBellL"
                  />
                  <Image
                    src="img_iconfolder.svg"
                    className="2xl:h-[26px] 2xl:ml-[24px] 2xl:mt-[45px] 2xl:w-[25px] 3xl:h-[31px] 3xl:ml-[29px] 3xl:mt-[54px] 3xl:w-[30px] h-[27.45px] lg:h-[20px] lg:ml-[18px] lg:mt-[35px] lg:w-[19px] ml-[26px] mr-[1px] mt-[48.809998px] object-contain w-[27.45px] xl:h-[23px] xl:ml-[21px] xl:mt-[40px] xl:w-[22px]"
                    alt="IconFolder"
                  />
                  <Image
                    src="img_iconsettings.svg"
                    className="2xl:h-[26px] 2xl:ml-[23px] 2xl:mr-[1px] 2xl:mt-[45px] 2xl:w-[25px] 3xl:h-[31px] 3xl:ml-[27px] 3xl:mt-[54px] 3xl:w-[30px] h-[27.45px] lg:h-[20px] lg:ml-[18px] lg:mr-[1px] lg:mt-[35px] lg:w-[19px] ml-[25px] mr-[2px] mt-[48.799988px] object-contain w-[27.45px] xl:h-[23px] xl:ml-[20px] xl:mr-[1px] xl:mt-[40px] xl:w-[22px]"
                    alt="IconSettings"
                  />
                  <Image
                    src="img_iconlogout.svg"
                    className="2xl:h-[26px] 2xl:ml-[22px] 2xl:mr-[2px] 2xl:mt-[498px] 2xl:w-[25px] 3xl:h-[31px] 3xl:ml-[26px] 3xl:mt-[598px] 3xl:w-[30px] h-[27.45px] lg:h-[20px] lg:ml-[17px] lg:mr-[2px] lg:mt-[387px] lg:w-[19px] ml-[24px] mr-[3px] mt-[534.52px] object-contain w-[27.45px] xl:h-[23px] xl:ml-[19px] xl:mr-[2px] xl:mt-[443px] xl:w-[22px]"
                    alt="IconLogOut"
                  />
                </Column>
              </Column>
            </Column>
          </aside>
          <Column className="2xl:mb-[406px] 2xl:ml-[24px] 2xl:mr-[63px] 2xl:mt-[170px] 3xl:mb-[487px] 3xl:ml-[29px] 3xl:mr-[76px] 3xl:mt-[204px] bg-white_A700_00 items-center justify-center lg:mb-[316px] lg:ml-[18px] lg:mr-[49px] lg:mt-[132px] mb-[436px] ml-[26px] mr-[68px] mt-[183px] shadow-bs w-[85%] xl:mb-[361px] xl:ml-[21px] xl:mr-[56px] xl:mt-[151px]">
            <Stack className="2xl:h-[64px] 2xl:mt-[49px] 3xl:h-[77px] 3xl:mt-[59px] bg-white_A700 h-[68.54001px] lg:h-[50px] lg:mt-[38px] mt-[53.309998px] self-stretch w-[100%] xl:h-[57px] xl:mt-[44px]">
              <Row className="absolute font-inter h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                <CheckBox
                  className="2xl:my-[14px] 3xl:my-[17px] lg:my-[11px] my-[16px] w-[2%] xl:my-[13px]"
                  inputClassName=" mr-[5px]"
                  name="LeftIcon"
                  label={""}
                ></CheckBox>
                <Column className="2xl:ml-[14px] 2xl:my-[11px] 3xl:ml-[17px] 3xl:my-[13px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[8px] ml-[16px] my-[12px] rounded-radius50 shadow-bs1 w-[3%] xl:ml-[13px] xl:my-[9px]">
                  <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                    <Image
                      src="img_image.png"
                      className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                      alt="Image"
                    />
                  </Column>
                </Column>
                <Column className="2xl:mb-[8px] 2xl:ml-[7px] 2xl:mt-[7px] 3xl:mb-[10px] justify-start lg:mb-[6px] lg:ml-[5px] lg:mt-[5px] mb-[9px] ml-[8px] mt-[8px] w-[4%] xl:mb-[7px] xl:ml-[6px] xl:mt-[6px]">
                  <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Henry Warmullër`}</Text>
                  <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`UI Designer`}</Text>
                </Column>
                <Image
                  src="img_iconcheckmar.svg"
                  className="2xl:h-[23px] 2xl:ml-[223px] 2xl:my-[14px] 3xl:h-[27px] 3xl:ml-[268px] 3xl:my-[17px] h-[24px] lg:h-[18px] lg:ml-[173px] lg:my-[11px] ml-[239.91px] my-[16px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[13px]"
                  alt="IconCheckmar"
                />
                <Text className="2xl:ml-[7px] 2xl:my-[14px] 2xl:text-fs14 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[5px] lg:my-[11px] lg:text-fs11 ml-[8px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[13px] xl:text-fs13">{`Approved`}</Text>
                <Text className="2xl:ml-[210px] 2xl:my-[14px] 2xl:text-fs14 3xl:ml-[252px] 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[163px] lg:my-[11px] lg:text-fs11 ml-[225.43px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[13px] xl:text-fs13">{`Needs a quick call`}</Text>
                <Image
                  src="img_righticon.svg"
                  className="2xl:h-[23px] 2xl:ml-[197px] 2xl:my-[14px] 2xl:w-[22px] 3xl:h-[27px] 3xl:ml-[237px] 3xl:my-[17px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:ml-[153px] lg:my-[11px] lg:w-[17px] ml-[212.08002px] my-[16px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:my-[13px] xl:w-[19px]"
                  alt="RightIcon"
                />
              </Row>
              <Row className="absolute bg-white_A700 font-inter inset-[0] items-center justify-start self-stretch w-[100%]">
                <Image
                  src="img_lefticon.svg"
                  className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.540009px] ml-[16px] mt-[22px] object-contain w-[24px] xl:h-[20px] xl:ml-[13px] xl:my-[18px] xl:w-[19px]"
                  alt="LeftIcon"
                />
                <Column className="2xl:mb-[17px] 2xl:ml-[14px] 2xl:mt-[16px] 3xl:ml-[17px] 3xl:my-[20px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[13px] mb-[18.540009px] ml-[16px] mt-[18px] rounded-radius50 shadow-bs1 w-[3%] xl:mb-[15px] xl:ml-[13px] xl:mt-[14px]">
                  <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                    <Image
                      src="img_image.png"
                      className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                      alt="Image"
                    />
                  </Column>
                </Column>
                <Column className="2xl:mb-[14px] 2xl:ml-[7px] 2xl:mt-[13px] 3xl:mb-[17px] 3xl:mt-[15px] justify-start lg:mb-[11px] lg:ml-[5px] lg:mt-[10px] mb-[15.540009px] ml-[8px] mt-[14px] w-[3%] xl:mb-[12px] xl:ml-[6px] xl:mt-[11px]">
                  <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Henry Warmullër`}</Text>
                  <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`UI Designer`}</Text>
                </Column>
                <Image
                  src="img_iconcheckmar.svg"
                  className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[223px] 2xl:mt-[20px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[268px] 3xl:mt-[24px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[173px] lg:mt-[15px] mb-[22.540009px] ml-[239.91px] mt-[22px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[18px]"
                  alt="IconCheckmar"
                />
                <Text className="2xl:mb-[21px] 2xl:ml-[7px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[5px] lg:mt-[15px] lg:text-fs11 mb-[22.540009px] ml-[8px] mt-[22px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[18px] xl:text-fs13">{`Approved`}</Text>
                <Text className="2xl:mb-[21px] 2xl:ml-[210px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:ml-[252px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[163px] lg:mt-[15px] lg:text-fs11 mb-[22.540009px] ml-[225.43px] mt-[22px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[18px] xl:text-fs13">{`Needs a quick call`}</Text>
                <Image
                  src="img_righticon.svg"
                  className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[197px] 2xl:mr-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[237px] 3xl:mr-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[153px] lg:mr-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.540009px] ml-[212.08002px] mr-[16px] mt-[22px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:mr-[13px] xl:my-[18px] xl:w-[19px]"
                  alt="RightIcon"
                />
              </Row>
            </Stack>
            <List
              className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
              orientation="vertical"
            >
              <Column className="items-center justify-start my-[0] self-stretch w-[100%]">
                <Stack className="2xl:h-[64px] 3xl:h-[77px] bg-gray_50 h-[68.54001px] lg:h-[50px] self-stretch w-[100%] xl:h-[57px]">
                  <Row className="absolute font-inter h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                    <CheckBox
                      className="2xl:my-[14px] 3xl:my-[17px] lg:my-[11px] my-[16px] w-[2%] xl:my-[13px]"
                      inputClassName=" mr-[5px]"
                      name="LeftIcon"
                      label={""}
                    ></CheckBox>
                    <Column className="2xl:ml-[14px] 2xl:my-[11px] 3xl:ml-[17px] 3xl:my-[13px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[8px] ml-[16px] my-[12px] rounded-radius50 shadow-bs1 w-[3%] xl:ml-[13px] xl:my-[9px]">
                      <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                        <Image
                          src="img_image_1.png"
                          className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                          alt="Image"
                        />
                      </Column>
                    </Column>
                    <Column className="2xl:mb-[8px] 2xl:ml-[7px] 2xl:mt-[7px] 3xl:mb-[10px] justify-start lg:mb-[6px] lg:ml-[5px] lg:mt-[5px] mb-[9px] ml-[8px] mt-[8px] w-[4%] xl:mb-[7px] xl:ml-[6px] xl:mt-[6px]">
                      <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Nado Husa`}</Text>
                      <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`Front-End Developer`}</Text>
                    </Column>
                    <Image
                      src="img_iconclose.svg"
                      className="2xl:h-[23px] 2xl:ml-[223px] 2xl:my-[14px] 3xl:h-[27px] 3xl:ml-[268px] 3xl:my-[17px] h-[24px] lg:h-[18px] lg:ml-[173px] lg:my-[11px] ml-[239.91px] my-[16px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[13px]"
                      alt="IconClose"
                    />
                    <Text className="2xl:ml-[7px] 2xl:my-[14px] 2xl:text-fs14 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[5px] lg:my-[11px] lg:text-fs11 ml-[8px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[13px] xl:text-fs13">{`Cancelled`}</Text>
                    <Text className="2xl:ml-[210px] 2xl:my-[14px] 2xl:text-fs14 3xl:ml-[252px] 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[163px] lg:my-[11px] lg:text-fs11 ml-[225.43px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[13px] xl:text-fs13">{`No follow up required`}</Text>
                    <Image
                      src="img_righticon.svg"
                      className="2xl:h-[23px] 2xl:ml-[197px] 2xl:my-[14px] 2xl:w-[22px] 3xl:h-[27px] 3xl:ml-[237px] 3xl:my-[17px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:ml-[153px] lg:my-[11px] lg:w-[17px] ml-[212.08002px] my-[16px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:my-[13px] xl:w-[19px]"
                      alt="RightIcon"
                    />
                  </Row>
                  <Row className="absolute bg-gray_50 font-inter inset-[0] items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_lefticon.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.540009px] ml-[16px] mt-[22px] object-contain w-[24px] xl:h-[20px] xl:ml-[13px] xl:my-[18px] xl:w-[19px]"
                      alt="LeftIcon"
                    />
                    <Column className="2xl:mb-[17px] 2xl:ml-[14px] 2xl:mt-[16px] 3xl:ml-[17px] 3xl:my-[20px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[13px] mb-[18.540009px] ml-[16px] mt-[18px] rounded-radius50 shadow-bs1 w-[3%] xl:mb-[15px] xl:ml-[13px] xl:mt-[14px]">
                      <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                        <Image
                          src="img_image_1.png"
                          className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                          alt="Image"
                        />
                      </Column>
                    </Column>
                    <Column className="2xl:mb-[14px] 2xl:ml-[7px] 2xl:mt-[13px] 3xl:mb-[17px] 3xl:mt-[15px] justify-start lg:mb-[11px] lg:ml-[5px] lg:mt-[10px] mb-[15.540009px] ml-[8px] mt-[14px] w-[3%] xl:mb-[12px] xl:ml-[6px] xl:mt-[11px]">
                      <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Nado Husa`}</Text>
                      <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`Front-End Developer`}</Text>
                    </Column>
                    <Image
                      src="img_iconclose.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[223px] 2xl:mt-[20px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[268px] 3xl:mt-[24px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[173px] lg:mt-[15px] mb-[22.540009px] ml-[239.91px] mt-[22px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[18px]"
                      alt="IconClose"
                    />
                    <Text className="2xl:mb-[21px] 2xl:ml-[7px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[5px] lg:mt-[15px] lg:text-fs11 mb-[22.540009px] ml-[8px] mt-[22px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[18px] xl:text-fs13">{`Cancelled`}</Text>
                    <Text className="2xl:mb-[21px] 2xl:ml-[210px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:ml-[252px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[163px] lg:mt-[15px] lg:text-fs11 mb-[22.540009px] ml-[225.43px] mt-[22px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[18px] xl:text-fs13">{`No follow up required`}</Text>
                    <Image
                      src="img_righticon.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[197px] 2xl:mr-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[237px] 3xl:mr-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[153px] lg:mr-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.540009px] ml-[212.08002px] mr-[16px] mt-[22px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:mr-[13px] xl:my-[18px] xl:w-[19px]"
                      alt="RightIcon"
                    />
                  </Row>
                </Stack>
                <Stack className="2xl:h-[64px] 3xl:h-[77px] bg-white_A700 h-[68.54001px] lg:h-[50px] self-stretch w-[100%] xl:h-[57px]">
                  <Row className="absolute font-inter h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                    <CheckBox
                      className="2xl:my-[14px] 3xl:my-[17px] lg:my-[11px] my-[16px] w-[2%] xl:my-[13px]"
                      inputClassName=" mr-[5px]"
                      name="LeftIcon"
                      label={""}
                    ></CheckBox>
                    <Column className="2xl:ml-[14px] 2xl:my-[11px] 3xl:ml-[17px] 3xl:my-[13px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[8px] ml-[16px] my-[12px] rounded-radius50 shadow-bs1 w-[3%] xl:ml-[13px] xl:my-[9px]">
                      <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                        <Image
                          src="img_image_2.png"
                          className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                          alt="Image"
                        />
                      </Column>
                    </Column>
                    <Column className="2xl:mb-[8px] 2xl:ml-[7px] 2xl:mt-[7px] 3xl:mb-[10px] justify-start lg:mb-[6px] lg:ml-[5px] lg:mt-[5px] mb-[9px] ml-[8px] mt-[8px] w-[4%] xl:mb-[7px] xl:ml-[6px] xl:mt-[6px]">
                      <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Jushawn McDowell`}</Text>
                      <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`Engineer`}</Text>
                    </Column>
                    <Image
                      src="img_iconcheckmar_1.svg"
                      className="2xl:h-[23px] 2xl:ml-[223px] 2xl:my-[14px] 3xl:h-[27px] 3xl:ml-[268px] 3xl:my-[17px] h-[24px] lg:h-[18px] lg:ml-[173px] lg:my-[11px] ml-[239.91px] my-[16px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[13px]"
                      alt="IconCheckmar"
                    />
                    <Text className="2xl:ml-[7px] 2xl:my-[14px] 2xl:text-fs14 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[5px] lg:my-[11px] lg:text-fs11 ml-[8px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[13px] xl:text-fs13">{`Approved`}</Text>
                    <Text className="2xl:ml-[210px] 2xl:my-[14px] 2xl:text-fs14 3xl:ml-[252px] 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[163px] lg:my-[11px] lg:text-fs11 ml-[225.43px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[13px] xl:text-fs13">{`Follow up call`}</Text>
                    <Image
                      src="img_righticon.svg"
                      className="2xl:h-[23px] 2xl:ml-[197px] 2xl:my-[14px] 2xl:w-[22px] 3xl:h-[27px] 3xl:ml-[237px] 3xl:my-[17px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:ml-[153px] lg:my-[11px] lg:w-[17px] ml-[212.08002px] my-[16px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:my-[13px] xl:w-[19px]"
                      alt="RightIcon"
                    />
                  </Row>
                  <Row className="absolute bg-white_A700 font-inter inset-[0] items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_lefticon.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.540009px] ml-[16px] mt-[22px] object-contain w-[24px] xl:h-[20px] xl:ml-[13px] xl:my-[18px] xl:w-[19px]"
                      alt="LeftIcon"
                    />
                    <Column className="2xl:mb-[17px] 2xl:ml-[14px] 2xl:mt-[16px] 3xl:ml-[17px] 3xl:my-[20px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[13px] mb-[18.540009px] ml-[16px] mt-[18px] rounded-radius50 shadow-bs1 w-[3%] xl:mb-[15px] xl:ml-[13px] xl:mt-[14px]">
                      <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                        <Image
                          src="img_image_2.png"
                          className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                          alt="Image"
                        />
                      </Column>
                    </Column>
                    <Column className="2xl:mb-[14px] 2xl:ml-[7px] 2xl:mt-[13px] 3xl:mb-[17px] 3xl:mt-[15px] justify-start lg:mb-[11px] lg:ml-[5px] lg:mt-[10px] mb-[15.540009px] ml-[8px] mt-[14px] w-[3%] xl:mb-[12px] xl:ml-[6px] xl:mt-[11px]">
                      <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Jushawn McDowell`}</Text>
                      <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`Engineer`}</Text>
                    </Column>
                    <Image
                      src="img_iconcheckmar_1.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[223px] 2xl:mt-[20px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[268px] 3xl:mt-[24px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[173px] lg:mt-[15px] mb-[22.540009px] ml-[239.91px] mt-[22px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[18px]"
                      alt="IconCheckmar"
                    />
                    <Text className="2xl:mb-[21px] 2xl:ml-[7px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[5px] lg:mt-[15px] lg:text-fs11 mb-[22.540009px] ml-[8px] mt-[22px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[18px] xl:text-fs13">{`Approved`}</Text>
                    <Text className="2xl:mb-[21px] 2xl:ml-[210px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:ml-[252px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[163px] lg:mt-[15px] lg:text-fs11 mb-[22.540009px] ml-[225.43px] mt-[22px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[18px] xl:text-fs13">{`Follow up call`}</Text>
                    <Image
                      src="img_righticon.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[197px] 2xl:mr-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[237px] 3xl:mr-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[153px] lg:mr-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.540009px] ml-[212.08002px] mr-[16px] mt-[22px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:mr-[13px] xl:my-[18px] xl:w-[19px]"
                      alt="RightIcon"
                    />
                  </Row>
                </Stack>
              </Column>
              <Column className="items-center justify-start my-[0] self-stretch w-[100%]">
                <Stack className="2xl:h-[64px] 3xl:h-[77px] bg-gray_50 h-[68.54001px] lg:h-[50px] self-stretch w-[100%] xl:h-[57px]">
                  <Row className="absolute font-inter h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                    <CheckBox
                      className="2xl:my-[14px] 3xl:my-[17px] lg:my-[11px] my-[16px] w-[2%] xl:my-[13px]"
                      inputClassName=" mr-[5px]"
                      name="LeftIcon"
                      label={""}
                    ></CheckBox>
                    <Column className="2xl:ml-[14px] 2xl:my-[11px] 3xl:ml-[17px] 3xl:my-[13px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[8px] ml-[16px] my-[12px] rounded-radius50 shadow-bs1 w-[3%] xl:ml-[13px] xl:my-[9px]">
                      <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                        <Image
                          src="img_image_3.png"
                          className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                          alt="Image"
                        />
                      </Column>
                    </Column>
                    <Column className="2xl:mb-[8px] 2xl:ml-[7px] 2xl:mt-[7px] 3xl:mb-[10px] justify-start lg:mb-[6px] lg:ml-[5px] lg:mt-[5px] mb-[9px] ml-[8px] mt-[8px] w-[4%] xl:mb-[7px] xl:ml-[6px] xl:mt-[6px]">
                      <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Henrik Vardën`}</Text>
                      <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`UI Designer`}</Text>
                    </Column>
                    <Image
                      src="img_iconalertci.svg"
                      className="2xl:h-[23px] 2xl:ml-[223px] 2xl:my-[14px] 3xl:h-[27px] 3xl:ml-[268px] 3xl:my-[17px] h-[24px] lg:h-[18px] lg:ml-[173px] lg:my-[11px] ml-[239.91px] my-[16px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[13px]"
                      alt="IconAlertCi"
                    />
                    <Text className="2xl:ml-[7px] 2xl:my-[14px] 2xl:text-fs14 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[5px] lg:my-[11px] lg:text-fs11 ml-[8px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[13px] xl:text-fs13">{`Unconfirmed`}</Text>
                    <Text className="2xl:ml-[210px] 2xl:my-[14px] 2xl:text-fs14 3xl:ml-[252px] 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[163px] lg:my-[11px] lg:text-fs11 ml-[225.43px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[13px] xl:text-fs13">{`Chase on Tuesday`}</Text>
                    <Image
                      src="img_righticon.svg"
                      className="2xl:h-[23px] 2xl:ml-[197px] 2xl:my-[14px] 2xl:w-[22px] 3xl:h-[27px] 3xl:ml-[237px] 3xl:my-[17px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:ml-[153px] lg:my-[11px] lg:w-[17px] ml-[212.08002px] my-[16px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:my-[13px] xl:w-[19px]"
                      alt="RightIcon"
                    />
                  </Row>
                  <Row className="absolute bg-gray_50 font-inter inset-[0] items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_lefticon.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.540009px] ml-[16px] mt-[22px] object-contain w-[24px] xl:h-[20px] xl:ml-[13px] xl:my-[18px] xl:w-[19px]"
                      alt="LeftIcon"
                    />
                    <Column className="2xl:mb-[17px] 2xl:ml-[14px] 2xl:mt-[16px] 3xl:ml-[17px] 3xl:my-[20px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[13px] mb-[18.540009px] ml-[16px] mt-[18px] rounded-radius50 shadow-bs1 w-[3%] xl:mb-[15px] xl:ml-[13px] xl:mt-[14px]">
                      <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                        <Image
                          src="img_image_3.png"
                          className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                          alt="Image"
                        />
                      </Column>
                    </Column>
                    <Column className="2xl:mb-[14px] 2xl:ml-[7px] 2xl:mt-[13px] 3xl:mb-[17px] 3xl:mt-[15px] justify-start lg:mb-[11px] lg:ml-[5px] lg:mt-[10px] mb-[15.540009px] ml-[8px] mt-[14px] w-[3%] xl:mb-[12px] xl:ml-[6px] xl:mt-[11px]">
                      <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Henrik Vardën`}</Text>
                      <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`UI Designer`}</Text>
                    </Column>
                    <Image
                      src="img_iconalertci.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[223px] 2xl:mt-[20px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[268px] 3xl:mt-[24px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[173px] lg:mt-[15px] mb-[22.540009px] ml-[239.91px] mt-[22px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[18px]"
                      alt="IconAlertCi"
                    />
                    <Text className="2xl:mb-[21px] 2xl:ml-[7px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[5px] lg:mt-[15px] lg:text-fs11 mb-[22.540009px] ml-[8px] mt-[22px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[18px] xl:text-fs13">{`Unconfirmed`}</Text>
                    <Text className="2xl:mb-[21px] 2xl:ml-[210px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:ml-[252px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[163px] lg:mt-[15px] lg:text-fs11 mb-[22.540009px] ml-[225.43px] mt-[22px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[18px] xl:text-fs13">{`Chase on Tuesday`}</Text>
                    <Image
                      src="img_righticon.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[197px] 2xl:mr-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[237px] 3xl:mr-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[153px] lg:mr-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.540009px] ml-[212.08002px] mr-[16px] mt-[22px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:mr-[13px] xl:my-[18px] xl:w-[19px]"
                      alt="RightIcon"
                    />
                  </Row>
                </Stack>
                <Stack className="2xl:h-[64px] 3xl:h-[77px] bg-white_A700 h-[68.54001px] lg:h-[50px] self-stretch w-[100%] xl:h-[57px]">
                  <Row className="absolute font-inter h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                    <CheckBox
                      className="2xl:my-[14px] 3xl:my-[17px] lg:my-[11px] my-[16px] w-[2%] xl:my-[13px]"
                      inputClassName=" mr-[5px]"
                      name="LeftIcon"
                      label={""}
                    ></CheckBox>
                    <Column className="2xl:ml-[14px] 2xl:my-[11px] 3xl:ml-[17px] 3xl:my-[13px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[8px] ml-[16px] my-[12px] rounded-radius50 shadow-bs1 w-[3%] xl:ml-[13px] xl:my-[9px]">
                      <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                        <Image
                          src="img_image_4.png"
                          className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                          alt="Image"
                        />
                      </Column>
                    </Column>
                    <Column className="2xl:mb-[8px] 2xl:ml-[7px] 2xl:mt-[7px] 3xl:mb-[10px] justify-start lg:mb-[6px] lg:ml-[5px] lg:mt-[5px] mb-[9px] ml-[8px] mt-[8px] w-[4%] xl:mb-[7px] xl:ml-[6px] xl:mt-[6px]">
                      <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Olivia Eklund`}</Text>
                      <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`UX Designer`}</Text>
                    </Column>
                    <Image
                      src="img_iconcheckmar_1.svg"
                      className="2xl:h-[23px] 2xl:ml-[223px] 2xl:my-[14px] 3xl:h-[27px] 3xl:ml-[268px] 3xl:my-[17px] h-[24px] lg:h-[18px] lg:ml-[173px] lg:my-[11px] ml-[239.91px] my-[16px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[13px]"
                      alt="IconCheckmar"
                    />
                    <Text className="2xl:ml-[7px] 2xl:my-[14px] 2xl:text-fs14 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[5px] lg:my-[11px] lg:text-fs11 ml-[8px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[13px] xl:text-fs13">{`Approved`}</Text>
                    <Text className="2xl:ml-[210px] 2xl:my-[14px] 2xl:text-fs14 3xl:ml-[252px] 3xl:my-[17px] 3xl:text-fs17 font-normal lg:ml-[163px] lg:my-[11px] lg:text-fs11 ml-[225.43px] my-[16px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[13px] xl:text-fs13">{`Schedule video call`}</Text>
                    <Image
                      src="img_righticon.svg"
                      className="2xl:h-[23px] 2xl:ml-[197px] 2xl:my-[14px] 2xl:w-[22px] 3xl:h-[27px] 3xl:ml-[237px] 3xl:my-[17px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:ml-[153px] lg:my-[11px] lg:w-[17px] ml-[212.08002px] my-[16px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:my-[13px] xl:w-[19px]"
                      alt="RightIcon"
                    />
                  </Row>
                  <Row className="absolute bg-white_A700 font-inter inset-[0] items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_lefticon.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.539978px] ml-[16px] mt-[22.00003px] object-contain w-[24px] xl:h-[20px] xl:ml-[13px] xl:my-[18px] xl:w-[19px]"
                      alt="LeftIcon"
                    />
                    <Column className="2xl:mb-[17px] 2xl:ml-[14px] 2xl:mt-[16px] 3xl:ml-[17px] 3xl:my-[20px] bg-white_A700_00 items-center justify-start lg:ml-[11px] lg:my-[13px] mb-[18.539978px] ml-[16px] mt-[18.00003px] rounded-radius50 shadow-bs1 w-[3%] xl:mb-[15px] xl:ml-[13px] xl:mt-[14px]">
                      <Column className="bg-white_A700 items-center justify-start rounded-radius50 self-stretch w-[100%]">
                        <Image
                          src="img_image_4.png"
                          className="2xl:h-[27px] 2xl:my-[1px] 3xl:h-[32px] h-[28px] lg:h-[21px] lg:my-[1px] mx-[auto] my-[2px] object-contain rounded-radius50 w-[88%] xl:h-[24px] xl:my-[1px]"
                          alt="Image"
                        />
                      </Column>
                    </Column>
                    <Column className="2xl:mb-[14px] 2xl:ml-[7px] 2xl:mt-[13px] 3xl:mb-[17px] 3xl:mt-[15px] justify-start lg:mb-[11px] lg:ml-[5px] lg:mt-[10px] mb-[15.539978px] ml-[8px] mt-[14.0000305px] w-[3%] xl:mb-[12px] xl:ml-[6px] xl:mt-[11px]">
                      <Text className="2xl:text-fs14 3xl:text-fs17 font-inter font-normal lg:text-fs11 self-stretch text-fs16 text-gray_901 text-left xl:text-fs13">{`Olivia Eklund`}</Text>
                      <Text className="2xl:text-fs13 3xl:text-fs15 font-normal font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`UX Designer`}</Text>
                    </Column>
                    <Image
                      src="img_iconcheckmar_1.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[223px] 2xl:mt-[20px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[268px] 3xl:mt-[24px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[173px] lg:mt-[15px] mb-[22.539978px] ml-[239.91px] mt-[22.00003px] object-contain w-[2%] xl:h-[20px] xl:ml-[198px] xl:my-[18px]"
                      alt="IconCheckmar"
                    />
                    <Text className="2xl:mb-[21px] 2xl:ml-[7px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[5px] lg:mt-[15px] lg:text-fs11 mb-[22.539978px] ml-[8px] mt-[22.00003px] text-fs16 text-gray_901 text-left xl:ml-[6px] xl:my-[18px] xl:text-fs13">{`Approved`}</Text>
                    <Text className="2xl:mb-[21px] 2xl:ml-[210px] 2xl:mt-[20px] 2xl:text-fs14 3xl:mb-[25px] 3xl:ml-[252px] 3xl:mt-[24px] 3xl:text-fs17 font-normal lg:mb-[16px] lg:ml-[163px] lg:mt-[15px] lg:text-fs11 mb-[22.539978px] ml-[225.43px] mt-[22.00003px] text-fs16 text-gray_901 text-left xl:ml-[186px] xl:my-[18px] xl:text-fs13">{`Schedule video call`}</Text>
                    <Image
                      src="img_righticon.svg"
                      className="2xl:h-[23px] 2xl:mb-[21px] 2xl:ml-[197px] 2xl:mr-[14px] 2xl:mt-[20px] 2xl:w-[22px] 3xl:h-[27px] 3xl:mb-[25px] 3xl:ml-[237px] 3xl:mr-[17px] 3xl:mt-[24px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:mb-[16px] lg:ml-[153px] lg:mr-[11px] lg:mt-[15px] lg:w-[17px] mb-[22.539978px] ml-[212.08002px] mr-[16px] mt-[22.00003px] object-contain w-[24px] xl:h-[20px] xl:ml-[175px] xl:mr-[13px] xl:my-[18px] xl:w-[19px]"
                      alt="RightIcon"
                    />
                  </Row>
                </Stack>
              </Column>
            </List>
          </Column>
        </Row>
        <Column className="2xl:top-[93px] 3xl:top-[111px] absolute justify-start lg:top-[72px] right-[0] top-[100px] w-[23%] xl:top-[82px]">
          <Column className="self-stretch w-[100%]">
            <div className="overflow-x-scroll w-[100%]">
              <Column className="justify-start self-stretch w-[100%]">
                <Column className="items-center self-stretch w-[100%]">
                  <Stack className="2xl:h-[231px] 3xl:h-[277px] font-oxygen h-[247px] lg:h-[180px] self-stretch w-[100%] xl:h-[205px]">
                    <Text className="2xl:leading-lh26 2xl:text-fs14 3xl:leading-lh31 3xl:text-fs17 absolute bottom-[0] font-normal leading-lh2800 lg:leading-lh20 lg:text-fs11 right-[0] text-fs16 text-gray_600 text-left w-[25%] xl:leading-lh23 xl:text-fs13">{`Did you know that you will be able to syncronise your lead information via. active analytics. Use our pathbreaker.js to integrate and hydrate activily for the most upto date data.`}</Text>
                    <header className="absolute self-stretch top-[0] w-[100%]">
                      <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                        <Column className="font-inter justify-start w-[72%]">
                          <Text className="2xl:mr-[9px] 2xl:text-fs29 3xl:mr-[11px] 3xl:text-fs35 font-bold lg:mr-[7px] lg:text-fs23 mr-[10px] text-fs32 text-gray_901 text-left xl:mr-[8px] xl:text-fs26">{`Nurtured Leads`}</Text>
                          <Column className="2xl:mt-[10px] 3xl:mt-[12px] items-center lg:mt-[7px] mt-[11px] self-stretch w-[100%] xl:mt-[9px]">
                            <Row className="2xl:gap-[12px] 2xl:pr-[631px] 3xl:gap-[14px] 3xl:pr-[757px] gap-[13px] grid grid-cols-3 items-center justify-start lg:gap-[9px] lg:pr-[490px] pr-[677px] self-stretch w-[100%] xl:gap-[10px] xl:pr-[561px]">
                              <div className="bg-transparent border-bw mb-[1px] w-[100%] input-wrap">
                                <Image
                                  src="img_shape.svg"
                                  className="absolute border-bw bg-transparent my-[0] mx-[auto] inset-y-[0]"
                                  alt="Shape"
                                />
                                <Button className="2xl:pr-[96px] 3xl:pr-[116px] bg-transparent border-bw lg:pr-[75px] pr-[104px] w-[100%] xl:pr-[86px]">
                                  {""}
                                </Button>
                              </div>
                              <div className="bg-transparent border-bw mt-[1px] w-[100%] input-wrap">
                                <Image
                                  src="img_shape.svg"
                                  className="absolute border-bw bg-transparent my-[0] mx-[auto] inset-y-[0]"
                                  alt="Shape"
                                />
                                <Button className="2xl:pr-[96px] 3xl:pr-[116px] bg-transparent border-bw lg:pr-[75px] pr-[104px] w-[100%] xl:pr-[86px]">
                                  {""}
                                </Button>
                              </div>
                              <div className="bg-transparent border-bw mt-[1px] w-[100%] input-wrap">
                                <Image
                                  src="img_shape.svg"
                                  className="absolute border-bw bg-transparent my-[0] mx-[auto] inset-y-[0]"
                                  alt="Shape"
                                />
                                <Button className="2xl:pr-[96px] 3xl:pr-[116px] bg-transparent border-bw lg:pr-[75px] pr-[104px] w-[100%] xl:pr-[86px]">
                                  {""}
                                </Button>
                              </div>
                            </Row>
                            <Row className="2xl:mt-[35px] 3xl:mt-[42px] bg-gray_100 font-inter items-center justify-start lg:mt-[27px] mt-[38px] self-stretch w-[100%] xl:mt-[31px]">
                              <Image
                                src="img_lefticon.svg"
                                className="2xl:h-[23px] 2xl:ml-[14px] 2xl:my-[13px] 2xl:w-[22px] 3xl:h-[27px] 3xl:ml-[17px] 3xl:my-[16px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:ml-[11px] lg:my-[10px] lg:w-[17px] mb-[14.309998px] ml-[16px] mt-[15px] object-contain w-[24px] xl:h-[20px] xl:mb-[11px] xl:ml-[13px] xl:mt-[12px] xl:w-[19px]"
                                alt="LeftIcon"
                              />
                              <Text className="2xl:ml-[14px] 2xl:my-[13px] 2xl:text-fs14 3xl:ml-[17px] 3xl:my-[16px] 3xl:text-fs17 font-normal lg:ml-[11px] lg:my-[10px] lg:text-fs11 mb-[14.309998px] ml-[16px] mt-[15px] text-fs16 text-gray_901 text-left xl:mb-[11px] xl:ml-[13px] xl:mt-[12px] xl:text-fs13">{`Name`}</Text>
                              <Text className="2xl:ml-[251px] 2xl:my-[13px] 2xl:text-fs14 3xl:ml-[302px] 3xl:my-[16px] 3xl:text-fs17 font-normal lg:ml-[195px] lg:my-[10px] lg:text-fs11 mb-[14.309998px] ml-[269.91px] mt-[15px] text-fs16 text-gray_901 text-left xl:mb-[11px] xl:ml-[223px] xl:mt-[12px] xl:text-fs13">{`Status`}</Text>
                              <Text className="2xl:ml-[242px] 2xl:my-[13px] 2xl:text-fs14 3xl:ml-[290px] 3xl:my-[16px] 3xl:text-fs17 font-normal lg:ml-[188px] lg:my-[10px] lg:text-fs11 mb-[14.309998px] ml-[259.71997px] mt-[15px] text-fs16 text-gray_901 text-left xl:mb-[11px] xl:ml-[215px] xl:mt-[12px] xl:text-fs13">{`Notes`}</Text>
                              <Image
                                src="img_righticon.svg"
                                className="2xl:h-[23px] 2xl:ml-[233px] 2xl:mr-[14px] 2xl:my-[13px] 2xl:w-[22px] 3xl:h-[27px] 3xl:ml-[280px] 3xl:mr-[17px] 3xl:my-[16px] 3xl:w-[26px] h-[24px] lg:h-[18px] lg:ml-[181px] lg:mr-[11px] lg:my-[10px] lg:w-[17px] mb-[14.309998px] ml-[250.37px] mr-[16px] mt-[15px] object-contain w-[24px] xl:h-[20px] xl:mb-[11px] xl:ml-[207px] xl:mr-[13px] xl:mt-[12px] xl:w-[19px]"
                                alt="RightIcon"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="2xl:mb-[71px] 2xl:mt-[62px] 3xl:mb-[85px] 3xl:mt-[74px] font-oxygen justify-start lg:mb-[55px] lg:mt-[48px] mb-[76.31px] mt-[67px] w-[25%] xl:mb-[63px] xl:mt-[55px]">
                          <Text className="2xl:text-fs13 3xl:text-fs15 font-bold font-oxygen lg:text-fs10 self-stretch text-fs14 text-gray_600 text-left xl:text-fs11">{`HELP`}</Text>
                          <Text className="2xl:mt-[7px] 2xl:text-fs19 3xl:text-fs23 font-bold font-inter lg:mt-[5px] lg:text-fs15 mt-[8px] self-stretch text-fs21 text-gray_901 text-left xl:mt-[6px] xl:text-fs17">{`Lightning Leads`}</Text>
                        </Column>
                      </Row>
                    </header>
                  </Stack>
                </Column>
                <Stack className="2xl:h-[30px] 2xl:ml-[986px] 2xl:mt-[14px] 3xl:h-[36px] 3xl:ml-[1184px] 3xl:mt-[17px] font-inter h-[32px] lg:h-[24px] lg:ml-[766px] lg:mt-[11px] ml-[1058px] mt-[16px] w-[25%] xl:h-[27px] xl:ml-[877px] xl:mt-[13px]">
                  <Image
                    src="img_iconarrowfo.svg"
                    className="2xl:h-[15px] 2xl:left-[37px] 2xl:w-[14px] 3xl:h-[18px] 3xl:left-[44px] 3xl:w-[17px] absolute h-[16px] inset-y-[0] left-[40px] lg:h-[12px] lg:left-[28px] lg:w-[11px] my-[auto] object-contain w-[16px] xl:h-[14px] xl:left-[33px] xl:w-[13px]"
                    alt="IconArrowFo"
                  />
                  <Text
                    className="common-pointer 2xl:text-fs13 3xl:text-fs15 absolute font-bold h-[max-content] inset-y-[0] left-[0] lg:text-fs10 my-[auto] text-blue_500 text-fs14 text-left xl:text-fs11"
                    onClick={handleNavigate1}
                  >{`READ More`}</Text>
                </Stack>
              </Column>
            </div>
          </Column>
          <Column className="items-center self-stretch w-[100%]">
            <Column className="font-oxygen justify-center self-stretch w-[100%]">
              <Text className="2xl:mt-[37px] 2xl:text-fs13 3xl:mt-[44px] 3xl:text-fs15 font-bold font-oxygen lg:mt-[28px] lg:text-fs10 mt-[40px] self-stretch text-fs14 text-gray_600 text-left xl:mt-[33px] xl:text-fs11">{`DESIGN`}</Text>
              <Text className="2xl:mt-[7px] 2xl:text-fs19 3xl:text-fs23 font-bold font-inter lg:mt-[5px] lg:text-fs15 mt-[8px] self-stretch text-fs21 text-gray_901 text-left xl:mt-[6px] xl:text-fs17">{`Segments`}</Text>
              <Text className="2xl:leading-lh26 2xl:mb-[44px] 2xl:mt-[7px] 2xl:text-fs14 3xl:leading-lh31 3xl:mb-[53px] 3xl:text-fs17 font-normal font-oxygen leading-lh2800 lg:leading-lh20 lg:mb-[34px] lg:mt-[5px] lg:text-fs11 mb-[48px] mt-[8px] self-stretch text-fs16 text-gray_600 text-left w-[100%] xl:leading-lh23 xl:mb-[39px] xl:mt-[6px] xl:text-fs13">{`Create your own segments to help in picking up the right data to the right groups. The auto assign AI intelligently pick up the next best lead for your sales groups to work on, keeping the engagement active.`}</Text>
            </Column>
          </Column>
        </Column>
      </Stack>
    </Column>
  );
};

export default Home1Page;
