import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useDisclosure,
<<<<<<< HEAD
<<<<<<< HEAD
    useToast,
=======
>>>>>>> ecca77a (Final Touch up)
=======
    useToast,
>>>>>>> d3067d5 (Signup responsiveness done)
    VStack,
  } from "@chakra-ui/react";
  import React, { useRef, useState } from "react";
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react";
  import { HamburgerIcon, RepeatClockIcon, Search2Icon } from "@chakra-ui/icons";
  import { Link, useNavigate } from "react-router-dom";
  import { SearchInput } from "../SearchInput";
  import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
  import { FiShoppingBag } from "react-icons/fi";
  import { GrContact } from "react-icons/gr";
  import { IoBagOutline } from "react-icons/io5";
<<<<<<< HEAD
<<<<<<< HEAD
// import { MobileSearch } from "./MobileSearch";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
=======
import { MobileSearch } from "./MobileSearch";
=======
// import { MobileSearch } from "./MobileSearch";
>>>>>>> d3067d5 (Signup responsiveness done)
import { useDispatch } from "react-redux";
>>>>>>> ecca77a (Final Touch up)
=======
>>>>>>> 520db7e (dynamic bag count change accourding to length)
import { searchProduct } from "../../../Redux/App/action";
  export const MobileMiddleNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
<<<<<<< HEAD
<<<<<<< HEAD
    const { data, loading, error } = useSelector((state) => state.CartReducer);
  
=======
>>>>>>> ecca77a (Final Touch up)
=======
    const { data, loading, error } = useSelector((state) => state.CartReducer);
  
>>>>>>> 520db7e (dynamic bag count change accourding to length)
    const [userData, setData] = useState(
      JSON.parse(localStorage.getItem("userdata"))
    );
    const Navigate = useNavigate();
    const [item,setItem]=useState("")
<<<<<<< HEAD
<<<<<<< HEAD
    const toast=useToast()
    const dispatch=useDispatch();
      const HandleSearch=()=>{
        if(item===""){
          toast({
            title: 'Input is empty',
            status: 'error',
            duration: 5000,
            position:"top",
            isClosable: true,
          })
        }else{
          dispatch(searchProduct(item))
          Navigate("/searchproduct")
        }
=======
    
=======
    const toast=useToast()
>>>>>>> d3067d5 (Signup responsiveness done)
    const dispatch=useDispatch();
      const HandleSearch=()=>{
        if(item===""){
          toast({
            title: 'Input is empty',
            status: 'error',
            duration: 5000,
            position:"top",
            isClosable: true,
          })
        }else{
          dispatch(searchProduct(item))
          Navigate("/searchproduct")
<<<<<<< HEAD
>>>>>>> ecca77a (Final Touch up)
=======
        }
>>>>>>> d3067d5 (Signup responsiveness done)
      }
    const handelSignout = () => {
      localStorage.removeItem("userdata");
      Navigate("/signin");
    };
    return (
      <Box w="100%" h="60px" bgColor={"#525050"}>
        <Flex ml={"15px"} color="white" h={"100%"} alignItems={"center"}>
          <Box>
            <HamburgerIcon
              fontSize={40}
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
            />
          </Box>
          <Link to="/womenhome">
            <Box ml={"20px"}>
              <Text
                fontWeight={"bold"}
                w="100%"
                fontSize={"25px"}
                lineHeight="22px"
              >
                FASHION WORLD
              </Text>
            </Box>
          </Link>
        
          {/* <MobileSearch /> */}
          <Box ml={5}>
            <Flex alignItems={"center"}>
            <Popover>
                <PopoverTrigger>
                  <Button
                    mr={-5}
                    bgColor={"transparent"}
                    _hover={{ bgColor: "transparent" }}
                  >
                    <Search2Icon fontSize={25} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent color="black">
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader bgColor={"#ddd"}>
                  <Center>SEARCH</Center>  
                  </PopoverHeader>
                  <PopoverBody>
                  <InputGroup size='md'>
<<<<<<< HEAD
<<<<<<< HEAD
        <Input onChange={(e)=>setItem(e.target.value)} 
        borderRadius={"25px"} color="black"  bgColor="white" type={"text"}
         placeholder="Search for items and brand" />
      <InputRightElement width='4.5rem'>
       
          <Search2Icon color={"black"} cursor={"pointer"} mr={-5} onClick={HandleSearch}/>
=======
        <Input onChange={(e)=>setItem(e.target.value)} borderRadius={"25px"} color="black"  bgColor="white" type={"text"} placeholder="Search for items and brand" />
      <InputRightElement width='4.5rem'>
       
          <Search2Icon color={"black"} cursor={"pointer"} mr={-10} onClick={HandleSearch}/>
>>>>>>> ecca77a (Final Touch up)
=======
        <Input onChange={(e)=>setItem(e.target.value)} 
        borderRadius={"25px"} color="black"  bgColor="white" type={"text"}
         placeholder="Search for items and brand" />
      <InputRightElement width='4.5rem'>
       
          <Search2Icon color={"black"} cursor={"pointer"} mr={-5} onClick={HandleSearch}/>
>>>>>>> d3067d5 (Signup responsiveness done)
      
      </InputRightElement>
    </InputGroup>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
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
                    <Box>
                      {" "}
                      {userData ? (
                        <>
                          <Flex>
                            <Text>{userData.data.firstname}</Text>
                            &nbsp;|&nbsp;{" "}
                            <Text cursor={"pointer"} onClick={handelSignout}>
                              SignOut
                            </Text>
                          </Flex>
                        </>
                      ) : (
                        <Box>
                          <Link to="/signin"> Sign In</Link>|
                          <Link to="/signup">Join</Link>
                        </Box>
                      )}
                    </Box>
                  </PopoverHeader>
                  <PopoverBody>
                    <Flex
                      _hover={{ color: "#0770cf" }}
                      mt={2}
                      ml={2}
                      alignItems={"center"}
                    >
                      <HiOutlineUser size={30} /> <Text ml={2}> My Account</Text>
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
              <Link to="/wishlist">
                <HiOutlineHeart size={30} style={{ marginLeft: "20px" }} />
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 520db7e (dynamic bag count change accourding to length)
              <Box position={"relative"} mr={3}>
            <Link to={"/cart"}>
                  {" "}
                  <IoBagOutline size={30} style={{ marginLeft: "20px" }} />
     
                  <Text position={"absolute"} right="3" top="1.5">{data.length}</Text>
                </Link>
                </Box>
<<<<<<< HEAD
=======
              <Link to={"/cart"}>
                {" "}
                <IoBagOutline size={30} style={{ marginLeft: "20px" }} />
              </Link>
>>>>>>> ecca77a (Final Touch up)
=======
>>>>>>> 520db7e (dynamic bag count change accourding to length)
            </Flex>
          </Box>
        </Flex>
  
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>Create your account</DrawerHeader> */}
  
            <DrawerBody>
              <Tabs className="font-face-pt " variant="enclosed">
                <TabList>
                  <Tab
                    w="40%"
                    fontSize={"22px"}
                    borderRadius="0px"
                    fontWeight="bold"
                  >
                    {" "}
<<<<<<< HEAD
<<<<<<< HEAD
                    <Link to="/womenhome" >Women</Link>{" "}
=======
                    <Link to="/womenhome">Women</Link>{" "}
>>>>>>> ecca77a (Final Touch up)
=======
                    <Link to="/womenhome" >Women</Link>{" "}
>>>>>>> d3067d5 (Signup responsiveness done)
                  </Tab>
                  <Tab
                    w="40%"
                    fontSize={"22px"}
                    borderRadius="0px"
                    fontWeight="bold"
                  >
<<<<<<< HEAD
<<<<<<< HEAD
                    <Link to="/menhome" >Men</Link>
=======
                    <Link to="/menhome">Men</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                    <Link to="/menhome" >Men</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <VStack w="100%" m="auto" spacing={4}>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_homebuttontemplate_1746711?&$n_320w$)"
                        }
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="50px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/womenhome" onClick={onClose}> Home </Link>
=======
                        <Link to="/womenhome"> Home </Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/womenhome" onClick={onClose}> Home </Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/2022_BLACKFRIDAY_WU_APPMOBNAV_2292X762?&$n_320w$)"
                        }
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="80px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/womendresses" onClick={onClose}>
=======
                        <Link to="/womendresses">
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/womendresses" onClick={onClose}>
>>>>>>> d3067d5 (Signup responsiveness done)
                          {" "}
                          25% OFF ALL DRESSES
                          <br />
                          With code: DRESSUP25{" "}
                        </Link>
                      </Flex>
                      <Flex
                       backgroundSize="cover"
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/gradient_1_1m_041021?&$n_320w$)"
                        }
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="80px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/womendresses" onClick={onClose}> SALE: UP TO 80% OFF</Link>
=======
                        <Link to="/womendresses"> SALE: UP TO 80% OFF</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/womendresses" onClick={onClose}> SALE: UP TO 80% OFF</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_gbl_newin_newin_4wl_119920305?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/womennewin" onClick={onClose}> NEW IN</Link>
=======
                        <Link to="/womennewin"> NEW IN</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/womennewin" onClick={onClose}> NEW IN</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_sale_autumnedit_au_1m_1251578?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/womenclothing" onClick={onClose}> CLOTHING</Link>
=======
                        <Link to="/womenclothing"> CLOTHING</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/womenclothing" onClick={onClose}> CLOTHING</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_gbl_toplevel_dresses_1m_117815345?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/womendresses" onClick={onClose}> DRESSES</Link>
=======
                        <Link to="/womendresses"> DRESSES</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/womendresses" onClick={onClose}> DRESSES</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_gbl_shoes_toplevel2_1m_114865509?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/womenshoe" onClick={onClose}>SHOES</Link>
=======
                        <Link to="/womenshoe">SHOES</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/womenshoe" onClick={onClose}>SHOES</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_sportswear_top+level+gbl_1m_114633822?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/womensportwear" onClick={onClose}>SPORTWEAR</Link>
=======
                        <Link to="/womensportwear">SPORTWEAR</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/womensportwear" onClick={onClose}>SPORTWEAR</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                    </VStack>
                  </TabPanel>
                  <TabPanel>
                  <VStack w="100%" m="auto" spacing={4}>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_homebuttonnew_1826147?&$n_320w$)"
                        }
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="50px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/menhome" onClick={onClose}> Home </Link>
=======
                        <Link to="/menhome"> Home </Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/menhome" onClick={onClose}> Home </Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/2022_BLACKFRIDAY_WU_APPMOBNAV_2292X762?&$n_320w$)"
                        }
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="80px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/mendresses" onClick={onClose}>
=======
                        <Link to="/mendresses">
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/mendresses" onClick={onClose}>
>>>>>>> d3067d5 (Signup responsiveness done)
                          {" "}
                          25% OFF ALL DRESSES
                          <br />
                          With code: DRESSUP25{" "}
                        </Link>
                      </Flex>
                      <Flex
                       backgroundSize="cover"
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/gradient_1_1m_041021?&$n_320w$)"
                        }
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="80px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/mendresses" onClick={onClose}> SALE: UP TO 80% OFF</Link>
=======
                        <Link to="/mendresses"> SALE: UP TO 80% OFF</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/mendresses" onClick={onClose}> SALE: UP TO 80% OFF</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_gbl_new_in_new_in_flo_118858767_4WL?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/mennewin" onClick={onClose}> NEW IN</Link>
=======
                        <Link to="/mennewin"> NEW IN</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/mennewin" onClick={onClose}> NEW IN</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_gbl_clothing_clothing_flo_116031299_4WL?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/menclothing" onClick={onClose}> CLOTHING</Link>
=======
                        <Link to="/menclothing"> CLOTHING</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/menclothing" onClick={onClose}> CLOTHING</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_uk_autumn_toplevel_1M_123064845?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/mendresses" onClick={onClose}> DRESSES</Link>
=======
                        <Link to="/mendresses"> DRESSES</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/mendresses" onClick={onClose}> DRESSES</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_toplevel_shoes_gbl_1m_117448576?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/menshoe" onClick={onClose}>SHOES</Link>
=======
                        <Link to="/menshoe">SHOES</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/menshoe" onClick={onClose}>SHOES</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_gbl_sportswear_sportswear_1585797_1m?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="25px"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <Link to="/mensportwear" onClick={onClose}>SPORTWEAR</Link>
=======
                        <Link to="/mensportwear">SPORTWEAR</Link>
>>>>>>> ecca77a (Final Touch up)
=======
                        <Link to="/mensportwear" onClick={onClose}>SPORTWEAR</Link>
>>>>>>> d3067d5 (Signup responsiveness done)
                      </Flex>
                    </VStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </Box>
    );
  };
  