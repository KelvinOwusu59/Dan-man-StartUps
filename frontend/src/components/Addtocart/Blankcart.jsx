<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoBagOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Blankcart = () => {
  return (
    <Center>
    <VStack mt={40} >
     <IoBagOutline size={90} />
        <Text>Your bag is empty</Text>

       <Link style={{color:"blue",textDecoration:"underline"}} to="/">Go There and buy Something</Link>
      
    </VStack>
    </Center>

=======
=======
import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
>>>>>>> d3067d5 (Signup responsiveness done)
import React from 'react'
import { IoBagOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Blankcart = () => {
  return (
<<<<<<< HEAD
    <div>Blankcart</div>
>>>>>>> 7de8bd9 (addtocart)
=======
    <Center>
    <VStack mt={40} >
     <IoBagOutline size={90} />
        <Text>Your bag is empty</Text>

       <Link style={{color:"blue",textDecoration:"underline"}} to="/">Go There and buy Something</Link>
      
    </VStack>
    </Center>

>>>>>>> d3067d5 (Signup responsiveness done)
  )
}

export default Blankcart