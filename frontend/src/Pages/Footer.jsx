<<<<<<< HEAD
import React from "react";
import american from "../Brands/american.png";
import mastercard from "../Brands/mastercard.png";
import paypal from "../Brands/paypal.png";
import visaelectron from "../Brands/visaelectron.png";
import visa from "../Brands/visa.png";
import insta from "../Images/insta.png";
import fb from "../Images/fb.png";
import snapchat from "../Images/snapchat.png";
import india from "../Brands/india.png";
import "../style/Footer.css";
import {
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  SimpleGrid,
  Box,
  Flex,
} from "@chakra-ui/react";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
// import { Link } from 'react-router-dom'
=======
import React from 'react'
import american from "../Brands/american.png"
import mastercard from "../Brands/mastercard.png"
import paypal from "../Brands/paypal.png"
import visaelectron from "../Brands/visaelectron.png"
import visa from "../Brands/visa.png"
import insta from "../Images/insta.png"
import fb from "../Images/fb.png"
import snapchat from "../Images/snapchat.png"
import india from "../Brands/india.png"
import "../style/Footer.css";
>>>>>>> fabae54 (men page)
// style={{"display":"flex","width":"95%"}}
const Footer = () => {
  return (
    <div>
<<<<<<< HEAD
      <hr style={{ marginBottom: "20px" }} />{" "}
      <SimpleGrid  w="60%" m="auto" columns={[4,4,6,8]} spacing={5}>
        <Flex
          alignItems={"center"}
          justifyContent="center"
          w="40px"
          h="40px"
          bgColor={"purple"}
          borderRadius={"50%"}
        >
          <Link href="https://www.facebook.com/ASOS/">
            <AiFillFacebook size={"25px"} color="white" />
          </Link>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent="center"
          w="40px"
          h="40px"
          bgColor={"purple"}
          borderRadius={"50%"}
        >
          <Link href="https://www.instagram.com/asos/">
            <AiOutlineInstagram size={"30px"} color="white" />
          </Link>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent="center"
          w="40px"
          h="40px"
          bgColor={"yellow"}
          borderRadius={"50%"}
        >
          <Link href="https://www.snapchat.com/add/asosfashion">
            <BsSnapchat size={"25px"} color="white" />
          </Link>
        </Flex>

        <Flex
          h={"40px"}
          pl={5}
          alignItems={"center"}
          borderLeft={"1px solid black"}
        >
          <FaCcVisa size={"40px"} />
        </Flex>
        <Flex h={"40px"} alignItems={"center"}>
          <Image w={"50px"} src={mastercard} alt="mastercard" />
        </Flex>
        <Flex h={"40px"} alignItems={"center"}>
          <Image w={"50px"} src={paypal} alt="mastercard" />
        </Flex>
        <Flex h={"40px"} alignItems={"center"}>
          <Image w={"50px"} src={american} alt="mastercard" />
        </Flex>
        <Flex h={"40px"} alignItems={"center"}>
          <Image w={"50px"} src={visaelectron} alt="mastercard" />
        </Flex>
      </SimpleGrid>
      <br />
      {/* footer info page */}
      <Box   pb={5} pt={5} bgColor="#ddd" width={"100%"}>
        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          margin={"auto"}
          gap={"20px"}
         
          // height={"10rem"}
          lineHeight={"30px"}
          width={"85%"}
          justifyContent={"center"}
        >
          <GridItem className="helpdiv">
            <Text className="head">HELP & INFORMATION</Text>
            <a href="https://www.asos.com/customer-care/" target="_blank">
              {" "}
              <Text>Help </Text>
              <Text>Track Order</Text>{" "}
            </a>
            <a
              href="https://www.asos.com/payments-and-deliveries/delivery/"
              target="_blank"
            >
              {" "}
              <Text>Delivery & Returns</Text>
            </a>
            <Text>Sitemap</Text>
          </GridItem>
          <GridItem className="helpdiv">
            <Text className="head">ABOUT ASOS</Text>
            <a href="https://www.asos.com/about/" target="_blank">
              {" "}
              <Text>About asos</Text>
            </a>
            <a href="https://asoscareers.asos.com/" target="_blank">
              {" "}
              <Text>Career at ASOS</Text>
            </a>
            <Text>Corporate responsibilty</Text>
            <Text>Investor's site</Text>
          </GridItem>
          <GridItem className="helpdiv">
            <Text className="head">MORE FROM ASOS</Text>
            <a href="https://www.asos.com/discover/our-apps/" target="_blank">
              {" "}
              <Text>Mobile and asos apps</Text>
            </a>
            <a
              href="https://marketplace.asos.com/?ctaref=Global+footer"
              target="_blank"
            >
              <Text>ASOS Marketplace</Text>
            </a>
            <Text>Gift vouchers</Text>
            <Text>Black Friday</Text>
            {/* <Text>ASOS x Thrift+</Text> */}
          </GridItem>
          <GridItem className="helpdiv">
            <Text className="head">SHOPPING FROM</Text>

            <SimpleGrid>
              <Text>You're in</Text>
              <Image ml={3} mr={3} w={["20px","20px","30px"]} src={india} alt="india" />
              <Text>| CHANGE </Text>
            </SimpleGrid>
            {/* <Text>
            You're in{" "}
            <span>
              <img style={{ width: "20px" }} src={india} alt="india" />
            </span>{" "}
          </Text> */}
           
          </GridItem>
        </Grid>
      </Box>{" "}
      <br />
    </div>
  );
};

export default Footer;
=======
<div >
<div className='footermain' >  
<img className='fb' src={fb} alt="fb"/>
<img className='insta' src={insta} alt="insta"/>

<img  className='snapchat' src={snapchat} alt="snapchat"/>

<img className='visa' src={visa} alt="visa"/>
<img className='master' src={mastercard} alt="mastercard"/>
<img className='paypal' src={paypal} alt="paypal"/>
<img className='american' src={american} alt="american"/>
<img className='electron' src={visaelectron} alt="visaelectron"/>
</div>
</div>
<br />

{/* footer info page */}
<div className='lastfooter' >
<div className='helpdiv' >
    <p className='head' >HELP & INFORMATION</p>
    <a href="https://www.asos.com/customer-care/" target="_blank" > <p>Help </p>
     <p>Track Order</p> </a>
     <a href="https://www.asos.com/payments-and-deliveries/delivery/" target="_blank" > <p>Delivery & Returns</p></a>
    <p>Sitemap</p>
</div>
<div className='helpdiv'>
    <p className='head'>ABOUT ASOS</p>
    <a href="https://www.asos.com/about/" target="_blank" >  <p>About asos</p></a>
    <a href="https://asoscareers.asos.com/" target="_blank" > <p>Career at ASOS</p></a>
    <p>Corporate responsibilty</p>
    <p>Investor's site</p>
</div>
<div className='helpdiv'>
    <p className='head'>MORE FROM ASOS</p>
    <a href="https://www.asos.com/discover/our-apps/" target="_blank" > <p>Mobile and asos apps</p></a>
    <a href="https://marketplace.asos.com/?ctaref=Global+footer" target="_blank" ><p>ASOS Marketplace</p></a>
    <p>Gift vouchers</p>
    <p>Black Friday</p>
    <p>ASOS x Thrift+</p>

</div>
<div className='helpdiv'>
    <p className='head'>SHOPPING FROM</p>
    <div style={{"display":"flex"}}>
    <p>You're in  <span><img style={{"width":"20px"}} src={india} alt="india"/></span>  </p>
    <p>
     | CHANGE </p> 
    </div>   
</div>
</div>
<br />
</div>
  )
}

export default Footer
>>>>>>> fabae54 (men page)
