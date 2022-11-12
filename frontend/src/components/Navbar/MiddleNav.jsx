<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 6c776a1 (single page)
=======
// import { Box, Button, Flex, Heading,Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
>>>>>>> b8362dc (responsive landing page)
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
=======
import { Box, Button, Flex, Heading,Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
>>>>>>> f83085a (women data)
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 7960daf (productpage adde)
import { RepeatClockIcon } from "@chakra-ui/icons";
import { SearchInput } from "./SearchInput";
<<<<<<< HEAD
<<<<<<< HEAD
import { HiOutlineUser, HiOutlineHeart } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import { ProductPageNav } from "./ProductPageNav";
import styles from "./nav.module.css";
<<<<<<< HEAD
=======
import {HiOutlineUser ,HiOutlineHeart} from "react-icons/hi";
import {IoBagOutline} from "react-icons/io5";
import {FiShoppingBag} from "react-icons/fi";
import {GrContact} from "react-icons/gr"
// import { ProductPageNav } from "./ProductPageNav";
// import styles from "./nav.module.css";
>>>>>>> f83085a (women data)
import SubNav from "./subMenu";
=======
import SubNav from "./WomensubMenu";
import MenSubNav from "./MenSubNav";
<<<<<<< HEAD
=======

<<<<<<< HEAD
import {HiOutlineUser ,HiOutlineHeart} from "react-icons/hi";
import {IoBagOutline} from "react-icons/io5";
import {FiShoppingBag} from "react-icons/fi";
import {GrContact} from "react-icons/gr"
// import { ProductPageNav } from "./ProductPageNav";
// import styles from "./nav.module.css";
import SubNav from "./WomensubMenu";
import MenSubNav from "./MenSubNav";
// import { BottomBanner } from "./BottomBanner";
=======
>>>>>>> b8362dc (responsive landing page)


import { ProductPageNav } from "./ProductPageNav";
import styles from "./nav.module.css";


>>>>>>> 6c776a1 (single page)
import { BottomBanner } from "./BottomBanner";
<<<<<<< HEAD
>>>>>>> 7960daf (productpage adde)
=======
// import { BottomBanner } from "./BottomBanner";
>>>>>>> f83085a (women data)
export const MiddleNav = () => {
  const Navigate=useNavigate()
  const dispatch=useDispatch();
  const  [userData,setData]=useState(JSON.parse(localStorage.getItem('userdata')))
  const { data, loading, error } = useSelector((state) => state.CartReducer);

  const handelSignout=()=>{
    localStorage.removeItem("userdata");
Navigate("/signin")
  }
  useEffect(()=>{
dispatch(getaddcartdata())
  },[])
=======
import { useDispatch } from "react-redux";
import { SwitchTab } from "../../Redux/App/action";
export const MiddleNav = () => {
  const dispatch=useDispatch();
>>>>>>> dd34221 (Mens Page added)
  const HandleTab=(type)=>{
    dispatch(SwitchTab(type))
  }
  return (
    <Tabs variant="unstyled">
<<<<<<< HEAD
      <TabList>
<<<<<<< HEAD
        <Box  h="60px" w="100%" bgColor={"#2d2d2d"}>
=======
=======
       <TabList>
>>>>>>> 020c3b9 (pulling)
        <Box h="60px" w="100%" bgColor={"#2d2d2d"}>
>>>>>>> 7960daf (productpage adde)
          <Flex
            color={"white"}
            alignItems={"center"}
            w="90%"
            h="100%"
            m={"auto"}
<<<<<<< HEAD
          > <Link to="/womenhome">
            <Box  mr="20px" fontWeight={"bold"}>
             
                <Text className={styles.Heading} lineHeight="22px">FASHION WORLD</Text>
              
            </Box></Link>
=======
          >
            <Box mr="20px" fontWeight={"bold"}>
              <Link to="/womenhome">
                <Heading size={"xl"}>Fashion World</Heading>
              </Link>
            </Box>
>>>>>>> 7960daf (productpage adde)
            <Tab
              borderLeft={"1px solid grey"}
              _selected={{ color: "white", bg: "#525050" }}
              w="8%"
              h="100%"
              fontWeight={"bold"}
<<<<<<< HEAD
<<<<<<< HEAD
             
            >
                <Link to={"/womenhome"}> WOMEN</Link>
=======
            >
                <Link to={"/women"}> WOMEN</Link>
>>>>>>> 7960daf (productpage adde)
=======
             
            >
                <Link to={"/womenhome"}> WOMEN</Link>
>>>>>>> dd34221 (Mens Page added)
            </Tab>

        <Tab
              borderRight={"1px solid grey"}
              _selected={{ color: "white", bg: "#525050" }}
              w="8%"
              h="100%"
              fontWeight={"bold"}
            >
<<<<<<< HEAD
<<<<<<< HEAD
             <Link to={"/menhome"}> MEN</Link>
            </Tab>
          
            <SearchInput />
            <Box ml={5}>
=======
             <Link to={"/men"}> MEN</Link>
=======
             <Link to={"/menhome"}> MEN</Link>
>>>>>>> dd34221 (Mens Page added)
            </Tab>
          
            <SearchInput />
            <Box ml={10}>
>>>>>>> 7960daf (productpage adde)
              <Flex alignItems={"center"}>
                <Popover>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ea90062 (productpage added)
                  <PopoverTrigger>
                    <Button
                      mr={-5}
                      bgColor={"transparent"}
                      _hover={{ bgColor: "transparent" }}
                    >
                      <HiOutlineUser size={30} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent color="black">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader bgColor={"#ddd"}>
<<<<<<< HEAD
                    <Box> { userData?<><Flex><Text>{userData.data.firstname}</Text>
                      &nbsp;|&nbsp; <Text cursor={"pointer"}
                       onClick={handelSignout}>SignOut</Text></Flex></>:
                       <Box>
                     <Link to="/signin"> Sign In</Link>|
                      <Link to="/signup">Join</Link>
                      </Box>}
                     </Box>
=======
                      <Link to="/login">Sign In</Link>|{" "}
                      <Link to="/signup">Join</Link>
>>>>>>> 7960daf (productpage adde)
                    </PopoverHeader>
                    <PopoverBody>
                      <Flex
                        _hover={{ color: "#0770cf" }}
                        mt={2}
                        ml={2}
                        alignItems={"center"}
                      >
                        <HiOutlineUser size={30} />{" "}
                        <Text ml={2}> My Account</Text>
                      </Flex>
                      <Flex
                        _hover={{ color: "#0770cf" }}
                        mt={5}
                        ml={2}
                        alignItems={"center"}
                      >
                        <FiShoppingBag size={25} />
                        <Text ml={2}> My Orders</Text>
                      </Flex>
                      <Flex
                        _hover={{ color: "#0770cf" }}
                        mt={5}
                        ml={2}
                        alignItems={"center"}
                      >
                        <RepeatClockIcon fontSize={"25px"} />
                        <Text ml={2}> Returns Information</Text>
                      </Flex>
                      <Flex
                        _hover={{ color: "#0770cf" }}
                        mt={5}
                        ml={2}
                        alignItems={"center"}
                      >
                        <GrContact size={25} />
                        <Text ml={2}> Contact Preference</Text>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
<<<<<<< HEAD
<<<<<<< HEAD
               
=======
  <PopoverTrigger>
 
    <Button mr={-5} bgColor={"transparent"} _hover={{bgColor:"transparent"}}><HiOutlineUser size={30} /></Button>
    </PopoverTrigger>
  <PopoverContent color="black">
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader bgColor={"#ddd"}>
        <Link to="/signin">Sign In</Link>
           |   <Link to="/signup">Join</Link>
    </PopoverHeader>
    <PopoverBody>
        <Flex _hover={{color:"#0770cf"}} mt={2} ml={2} alignItems={"center"}>
        <HiOutlineUser size={30} /> <Text ml={2}> My Account</Text>
        </Flex>
        <Flex _hover={{color:"#0770cf"}} mt={5} ml={2} alignItems={"center"}>
        <FiShoppingBag size={25} /><Text ml={2}> My Orders</Text>
        </Flex>
        <Flex _hover={{color:"#0770cf"}} mt={5} ml={2} alignItems={"center"}>
        <RepeatClockIcon fontSize={"25px"} /><Text ml={2}> Returns Information</Text>
        </Flex>
        <Flex _hover={{color:"#0770cf"}} mt={5} ml={2} alignItems={"center"}>
        <GrContact size={25}  /><Text ml={2}> Contact Preference</Text>
        </Flex>
    </PopoverBody>
                </PopoverContent>
                
</Popover>
>>>>>>> 6808b6d (added signup and signin page)
                <Link to="/wishlist">
                  <HiOutlineHeart size={30} style={{ marginLeft: "20px" }} />
                </Link>
                <Box position={"relative"}>
                <Link to={"/cart"}>
                  {" "}
                  <IoBagOutline size={30} style={{ marginLeft: "20px" }} />
     
                  <Text position={"absolute"} right="3" top="1.5">{ data.length}</Text>
                </Link>
                </Box>
=======
=======
>>>>>>> ea90062 (productpage added)
                <Link to="/wishlist">
                  <HiOutlineHeart size={30} style={{ marginLeft: "20px" }} />
                </Link>
                <Link to={"/cart"}>
                  {" "}
                  <IoBagOutline size={30} style={{ marginLeft: "20px" }} />
                </Link>
>>>>>>> 7960daf (productpage adde)
              </Flex>
            </Box>
          </Flex>
        </Box>
<<<<<<< HEAD
    
  </TabList>
  <TabPanels>
    <TabPanel p="0"  w="100%">
    <SubNav />
    </TabPanel>
<<<<<<< HEAD
    <TabPanel>
      <p>two!</p>
=======
    <TabPanel p="0"  w="100%">
    <MenSubNav / >
      
>>>>>>> f83085a (women data)
    </TabPanel>
  </TabPanels>
</Tabs>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      </TabList>
      <TabPanels>
        <TabPanel p="0" w="100%">
          <SubNav />
          <BottomBanner />
        </TabPanel>
        <TabPanel p="0" w="100%">
<<<<<<< HEAD
        <SubNav />
<<<<<<< HEAD
          {/* <MenSubNav /> */}
=======
        {/* <SubNav /> */}
          <MenSubNav />
>>>>>>> dd34221 (Mens Page added)
          <BottomBanner />
        </TabPanel>
      </TabPanels>
    </Tabs>
>>>>>>> 7960daf (productpage adde)
=======
          <MenSubNav /> 
          <BottomBanner /> 
         </TabPanel> 
       </TabPanels> 
    </Tabs> 
>>>>>>> 020c3b9 (pulling)
=======

     

>>>>>>> 6c776a1 (single page)
=======

>>>>>>> b8362dc (responsive landing page)
  );
};
