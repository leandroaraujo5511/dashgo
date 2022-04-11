
import { Box, Button, Flex, Heading, Icon, Table, Th, Td, Thead, Tr,Checkbox, Tbody,Text } from "@chakra-ui/react";
import { RiAddLine, RiEditLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Heard";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){
    return(
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">  
                    <Flex mb="8" justifyContent="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Button 
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                        >
                            Criar Novo
                        </Button>
                    </Flex>

                    <Table colorScheme="writeAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de Criação</Th>
                                <Th w="6"></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Leandro Araújo</Text>
                                        <Text fontSize="sm" color="gray.300" >Leandroaraujo5511@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td fontWeight="normal"  >
                                    12 Abril 2022
                                </Td>
                                <Td >
                                    <Button 
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="17"/>}
                                    >
                                        Editar
                                    </Button> 
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Patricia Araújo</Text>
                                        <Text fontSize="sm" color="gray.300" >Patriciaaraujo5511@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td fontWeight="normal"  >
                                    12 Abril 2022
                                </Td>
                                <Td >
                                    <Button 
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="17"/>}
                                    >
                                        Editar
                                    </Button> 
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Davi Araújo</Text>
                                        <Text fontSize="sm" color="gray.300" >Davi.5511.Araujo@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td fontWeight="normal"  >
                                    12 Abril 2022
                                </Td>
                                <Td >
                                    <Button 
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="17"/>}
                                    >
                                        Editar
                                    </Button> 
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>

                </Box>

            </Flex>
            
        </Box>
    );
}