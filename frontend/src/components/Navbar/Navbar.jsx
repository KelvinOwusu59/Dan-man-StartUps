import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TopBanner } from "./TopBanner";
import { MiddleNav } from "./MiddleNav";
import SubNav from "./subMenu";
export const Navbar = () => {
  return (<>
    <Desktop>
      <Box>
      <TopBanner />
      <MiddleNav />
      {/* <SubNav /> */}
      {/* HiOutlineUser */}
    </Box>
    </Desktop>
    <Tablet >
      <TabNavbar />
    </Tablet>
    <Mobile>
     <MobileNavbar />
    </Mobile>
    </>
  );
};
