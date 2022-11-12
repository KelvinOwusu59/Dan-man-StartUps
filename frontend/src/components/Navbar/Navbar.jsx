import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TopBanner } from "./TopBanner";
import { MiddleNav } from "./MiddleNav";
<<<<<<< HEAD
import SubNav from "./subMenu";
=======
import SubNav from "./WomensubMenu";
import { BottomBanner } from "./BottomBanner";
>>>>>>> 7960daf (productpage adde)
export const Navbar = () => {
  return (<>
    <Desktop>
      <Box>
      <TopBanner />
      <MiddleNav />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <SubNav /> */}
      {/* HiOutlineUser */}
=======
      
>>>>>>> 7960daf (productpage adde)
=======
      <BottomBanner />
>>>>>>> 6808b6d (added signup and signin page)
=======


>>>>>>> dd34221 (Mens Page added)
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
