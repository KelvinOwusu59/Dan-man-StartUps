import { Box, HStack, VStack, Text, Image, Divider, Center } from '@chakra-ui/react';
import { CloseIcon } from "@chakra-ui/icons"
import {useDispatch,useSelector} from "react-redux"
import React, { useEffect } from 'react'
import styles from "./Cartitemsdetails.module.css";
import Cartsingleitem from './Cartsingleitem';
import { getaddcartdata } from '../../Redux/Addtocart/action';
const Cartitemsdetails = ({data}) => {
  // const {data} = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch()
  // useEffect(() => {
  //  dispatch(getaddcartdata()) 
  // }, [])
<<<<<<< HEAD
  
  
  return (
    <div className={styles.cartitem_d_mainbox}>
      <VStack w="100%" background="rgb(255, 255, 255)"   margin="auto"  marginBottom="8px">
        <Box w="95%"   >
          <HStack   justify="space-between" w="95%" margin="auto">
           <Box w="30%"> <Text  fontWeight="bold" fontSize="20px">MY BAG</Text></Box>
           <Box > <Text>Items are reversed for 60 minutes</Text></Box>
          </HStack>
        </Box>
        <Divider orientation="horizontal"></Divider>
=======
  console.log(data)
  
  return (
    <div className={styles.cartitem_d_mainbox}>
      <VStack w="100%" >
        <Box w="95%"   marginBottom="10px">
          <HStack   justify="space-between" w="95%" margin="auto">
           <Box w="30%"> <Text  fontWeight="bold" fontSize="20px">MY BAG</Text></Box>
           <Box > <Text>Items are reversed for 60 minutes</Text></Box>
          </HStack>
        </Box>
<<<<<<< HEAD
        
>>>>>>> 7de8bd9 (addtocart)
=======
        <Divider orientation="horizontal"></Divider>
>>>>>>> 5e17292 (styling to addtocart)
      </VStack>
      <div>
        {
          data && data.map((el) => (<Cartsingleitem el={ el} />))
         }
         
      
        
      </div>
    </div>
  )
}

export default Cartitemsdetails