import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import { Container,Flex, Spacer, Box,Heading} from '@chakra-ui/react'

const NavBar = () => {
    return (
    <>
        <Container maxW="100%" bg='black' color='white'  h='75'>
            <Flex alignContent={"center"} gap="2" >
                <Box p="5" bg='tomato'borderRadius='5%'>
                    <CartWidget/>
                </Box>
                <Spacer/>
                <Box p="4">
                     <Heading size={"xl"}>UNIQUE </Heading>
                </Box>
                <Spacer/>
                <Box p="5">
                    <ItemListContainer/>
                </Box>
            </Flex>
        </Container>
    </>
    )
};

export default NavBar;