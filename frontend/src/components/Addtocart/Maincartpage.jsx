import React, { useEffect } from 'react'
import Cartitemsdetails from './Cartitemsdetails'
import Ordersummary from './Ordersummary'
import styles from "./Maincartpage.module.css"
import { useDispatch, useSelector } from 'react-redux'
import Blankcart from './Blankcart'
import { getaddcartdata } from '../../Redux/Addtocart/action'
<<<<<<< HEAD
import { Flex, Image } from '@chakra-ui/react'
const Maincartpage = () => {
  const dispatch=useDispatch()
  const { data, loading, error } = useSelector((state) => state.CartReducer);
  console.log("befordta",data)
  useEffect(() => {
    dispatch(getaddcartdata())
  }, [getaddcartdata])
<<<<<<< HEAD
  console.log(data)
  return (
      
    <div  className={styles.addtocartbox}>
      <div >
        {
          loading ? <Flex alignItems={"center"} justifyContent={"center"}>
          <Image mt={20}  src="https://i.stack.imgur.com/MnyxU.gif" alt="x" />
          </Flex>  : (<div>
            {
              data.length == 0 ? <div>
                <Blankcart/>
              </div> : <div className={styles.maincartpageitem}>
              <div className={styles.cartitemcomp}><Cartitemsdetails data={data} /></div>
                  <div className={styles.ordersumcomp}><Ordersummary data={ data} /></div>
=======
const Maincartpage = () => {
  const dispatch=useDispatch()
  const { data, loading, error } = useSelector((state) => state.CartReducer);
  
  useEffect(() => {
    dispatch(getaddcartdata())
  }, [])
=======
>>>>>>> 6ea9c7a (addtocart)
  console.log(data)
  return (
      
    <div  className={styles.addtocartbox}>
      <div >
        {
          loading ? <div>Loading</div> : (<div>
            {
              data.length == 0 ? <div>
                <Blankcart/>
<<<<<<< HEAD
              </div> : <div>
              <div><Cartitemsdetails data={data} /></div>
                  <div><Ordersummary data={ data} /></div>
>>>>>>> 7de8bd9 (addtocart)
=======
              </div> : <div className={styles.maincartpageitem}>
              <div className={styles.cartitemcomp}><Cartitemsdetails data={data} /></div>
                  <div className={styles.ordersumcomp}><Ordersummary data={ data} /></div>
>>>>>>> 5e17292 (styling to addtocart)
              </div>
            }
          </div>)
        }
        
          </div>
         </div>
  
  )
}

export default Maincartpage