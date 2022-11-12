<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React from "react";
>>>>>>> fabae54 (men page)
import offer from "../Images/offer.png"
import selfcare from "../Images/selfcare.png"
import gofor from "../Images/gofor.png"
import label from "../Images/label.png"
import inhouse from "../Images/inhouse.png"
import treat from "../Images/treat.png"
import collussion from "../Images/collussion.png"
import monkl from "../Brands/monkl.png"
import never from "../Brands/never.png"
import collusionlogo from "../Brands/collusionlogo.png"
import reclaimed from "../Brands/reclaimed.png"
import topshop from "../Brands/topshop.png"
import weekday from "../Brands/weekday.png"
import getgift from "../Brands/getgift.png"
import "../style/LandingPage.css";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";
import{Box, Grid, GridItem, Image, Text} from "@chakra-ui/react"
import { getaddcartdata } from "../Redux/Addtocart/action";
import { useDispatch } from "react-redux";


const WomenPage = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getaddcartdata())
      },[])
  return (
    <div>
      <br />
      <Grid className="maindiv" >
      <Link to={"/womendresses"}>
     <Image style={{"width":"100%"}} src={offer}alt="offer"/>
     </Link>
      </Grid>
      <br />
      <br />
      {/* 2nd div  */}
      <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",
      lg:"repeat(4,1fr)"}} gap={"10px"} width={"95%"} margin="auto" >
        
   {/* <SimpleGrid column={4} spacing={2}> */}
       <GridItem textAlign={"center"}>
          <Link to="/womensale"> 
          <img   src={selfcare} alt="selfcare"/></Link>
          <p  className="secondheading">SELF CARE MOMENT </p>
          <p>It's treats Yourself Time</p>
        </GridItem>
        <GridItem textAlign={"center"}>

        <Link to="/womensale"> 
        <img  src={label} alt="label"/></Link>
          <h3 className="secondheading"> LABEL LOVE </h3>
          <p>It's treats Yourself Time</p>
        </GridItem>

        <GridItem textAlign={"center"}>

        <Link to="/womensale"> 
          <img  src={inhouse} alt="inhouse"/></Link>
          <h3 className="secondheading"> IN-HOUSE BRNDS</h3>
          <p>It's treats Yourself Time</p>
        </GridItem>

        <GridItem textAlign={"center"}>

        <Link to="/womensale"> 
          <img  src={gofor} alt="gofor"/></Link>
          <h3 className="secondheading"> GO FOR GLAM </h3>
          <p>It's treats Yourself Time</p>
        </GridItem>
        {/* </SimpleGrid>  */}

</Grid>
      {/* 3rd div */}

      <div className="thirdmaindiv"> 
      <Link to={"/womenclothing"}>
        <p className="h2">UPTO 50% OFF COSY GEAR! </p>
        <p className="h2">GIVE WINTER THE COLD SHOULDER </p>
        <p style={{"fontSize":"10px"}}>Limited time only.Selected styles marked down as shown</p>
        </Link>
=======

=======
import { Link } from "react-router-dom";
import{Box, Grid, GridItem, Image, Text} from "@chakra-ui/react"
>>>>>>> b8362dc (responsive landing page)


const WomenPage = () => {
  return (
    <div>
      <br />
      <Grid className="maindiv" >
      <Link to={"/womendresses"}>
     <Image style={{"width":"100%"}} src={offer}alt="offer"/>
     </Link>
      </Grid>
      <br />
      <br />
      {/* 2nd div  */}
      <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",
      lg:"repeat(4,1fr)"}} gap={"10px"} width={"95%"} margin="auto" >
        
   {/* <SimpleGrid column={4} spacing={2}> */}
       <GridItem textAlign={"center"}>
          <Link to="/womensale"> 
          <img   src={selfcare} alt="selfcare"/></Link>
          <p  className="secondheading">SELF CARE MOMENT </p>
          <p>It's treats Yourself Time</p>
        </GridItem>
        <GridItem textAlign={"center"}>

        <Link to="/womensale"> 
        <img  src={label} alt="label"/></Link>
          <h3 className="secondheading"> LABEL LOVE </h3>
          <p>It's treats Yourself Time</p>
        </GridItem>

        <GridItem textAlign={"center"}>

        <Link to="/womensale"> 
          <img  src={inhouse} alt="inhouse"/></Link>
          <h3 className="secondheading"> IN-HOUSE BRNDS</h3>
          <p>It's treats Yourself Time</p>
        </GridItem>

        <GridItem textAlign={"center"}>

        <Link to="/womensale"> 
          <img  src={gofor} alt="gofor"/></Link>
          <h3 className="secondheading"> GO FOR GLAM </h3>
          <p>It's treats Yourself Time</p>
        </GridItem>
        {/* </SimpleGrid>  */}

</Grid>
      {/* 3rd div */}

      <div className="thirdmaindiv"> 
      <Link to={"/womenclothing"}>
        <p className="h2">UPTO 50% OFF COSY GEAR! </p>
        <p className="h2">GIVE WINTER THE COLD SHOULDER </p>
        <p style={{"fontSize":"10px"}}>Limited time only.Selected styles marked down as shown</p>
<<<<<<< HEAD
>>>>>>> fabae54 (men page)
=======
        </Link>
>>>>>>> b8362dc (responsive landing page)
      </div>
       <br />
      <br />

      {/* after offer page 2 div */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b8362dc (responsive landing page)
      <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",
      lg:"repeat(2,1fr)"}} margin={"auto"}
       gap={"30px"} width={"80%"} justifyContent={"space-around"} >
        <GridItem >
          <Link to={"/womenbrand"}>
          <img  src={treat}alt="treat"/></Link>
          <Box style={{"textAlign":"center"}}>
          <Text className="h3">TREAT YO,SELF BRANDS </Text>
          <Text>Cos deserve the best</Text>
<<<<<<< HEAD
          <br />
          <Link to={"/womenbrand"}>
          <button className="btn"> SHOP NOW</button></Link>
          </Box>
          </GridItem>

          <GridItem >
        <Link to={"/womenshoe"}>
          <img src={collussion} alt="collussion"/></Link>
=======
      <div className="afteroffer">
        <div style={{ width: "40%"}}>
          <img src={treat}alt="treat"/>
          <div style={{"textAlign":"center"}}>
          <h3 className="h3">TREAT YO,SELF BRANDS </h3>
          <p>Cos deserve the best</p>
=======
>>>>>>> b8362dc (responsive landing page)
          <br />
          <Link to={"/womenbrand"}>
          <button className="btn"> SHOP NOW</button></Link>
          </Box>
          </GridItem>

<<<<<<< HEAD
        <div style={{ width: "40%"}}>
          <img src={collussion} alt="collussion"/>
>>>>>>> fabae54 (men page)
=======
          <GridItem >
        <Link to={"/womenshoe"}>
          <img src={collussion} alt="collussion"/></Link>
>>>>>>> b8362dc (responsive landing page)
          <div style={{"textAlign":"center"}}>
          <h3 className="h3"> COLLUSIONS </h3>
          <p>POV:the club in 2062</p>
          <br />
<<<<<<< HEAD
<<<<<<< HEAD
          <Link to={"/womenshoe"}>
          <button className="btn"> SHOP THE BRAND</button></Link>
        </div>
        </GridItem>

      </Grid>
=======
          <button className="btn"> SHOP THE BRAND</button>
        </div>
=======
          <Link to={"/womenshoe"}>
          <button className="btn"> SHOP THE BRAND</button></Link>
>>>>>>> b8362dc (responsive landing page)
        </div>
        </GridItem>

<<<<<<< HEAD
      </div>
>>>>>>> fabae54 (men page)
=======
      </Grid>
>>>>>>> b8362dc (responsive landing page)
      
<br />
<br />
{/* get gifting div */}
<div style={{"width":"100%","height":"115px"}}>
  <img src={getgift} alt="getgift"/>
</div>
<br />
<br />
<br />
<br />
<<<<<<< HEAD
<<<<<<< HEAD
<br />
{/* trending brands */}
<Grid 
gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",
lg:"repeat(6,1fr)"}} margin={"auto"}
 gap={"5px"} width={"100%"} justifyContent={"space-evenly"}> 
<Link to={"/womenshoe"}>
<Image className="bimg"  src={monkl} alt="monkl"/>
</Link>
<Link to={"/womenbrand"}>
<Image className="bimg" src={never} alt="never"/>
</Link>
<Link to={"/womennewin"}>
<Image className="bimg" src={topshop} alt="topshop"/>
</Link>
<Link to={"/womensale"}>
<Image className="bimg" src={reclaimed} alt="reclaimed"/>
</Link>
<Link to={"/womentopshop"}>
<Image className="bimg" src={collusionlogo} alt="collusionlogo"/>
</Link>
<Link to={"/womendresses"}>
<Image className="bimg" src={weekday} alt="weekday"/>
</Link>
</Grid>  
=======
{/* trending brands */}
<div className="brands"> 
<img className="bimg"  src={monkl} alt="monkl"/>
<img className="bimg" src={never} alt="never"/>
<img className="bimg" src={topshop} alt="topshop"/>
<img className="bimg" src={reclaimed} alt="reclaimed"/>
<img className="bimg" src={collusionlogo} alt="collusionlogo"/>
<img className="bimg" src={weekday} alt="weekday"/>
</div>    
>>>>>>> fabae54 (men page)
=======
<br />
{/* trending brands */}
<Grid 
gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",
lg:"repeat(6,1fr)"}} margin={"auto"}
 gap={"5px"} width={"100%"} justifyContent={"space-evenly"}> 
<Link to={"/womenshoe"}>
<Image className="bimg"  src={monkl} alt="monkl"/>
</Link>
<Link to={"/womenbrand"}>
<Image className="bimg" src={never} alt="never"/>
</Link>
<Link to={"/womennewin"}>
<Image className="bimg" src={topshop} alt="topshop"/>
</Link>
<Link to={"/womensale"}>
<Image className="bimg" src={reclaimed} alt="reclaimed"/>
</Link>
<Link to={"/womentopshop"}>
<Image className="bimg" src={collusionlogo} alt="collusionlogo"/>
</Link>
<Link to={"/womendresses"}>
<Image className="bimg" src={weekday} alt="weekday"/>
</Link>
</Grid>  
>>>>>>> b8362dc (responsive landing page)
<br />
<br />
<hr />
<br />
    </div>
  )
}

export default WomenPage

