
import { Box, Button, Flex, Heading, Icon, Table, Th, Td, Thead, Tr,Checkbox, Tbody,Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiEditLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";





export default function UserList(){

    const [page, setPage] =  useState(1);
    const {data, isLoading, isFetching  ,error} = useUsers(page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    async function handlePerfetchUser(userId: string){
        await queryClient.prefetchQuery(["user", userId], async () => { 
            const response = await api.get(`users/${userId}`)
            return response.data;
        },{
            staleTime: 1000 * 60 * 10 //10 minutos
        })
        
    }

    return(
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">  
                    <Flex mb="8" justifyContent="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size="sm" ml="4" color="gray.500"/>}
                        </Heading>
                        <NextLink href="users/create" passHref>
                            <Button 
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                            >
                                Criar Novo
                            </Button>
                        </NextLink>
                    </Flex>

                    {isLoading ? (
                            <Flex justify="center">
                                <Spinner/>
                            </Flex>
                        ): error ?(                         
                            <Flex justify="center">
                                <Text>Falha ao carregar os dados </Text>
                            </Flex>
                        ):(
                            <>
                                <Table colorScheme="writeAlpha">
                                    <Thead>
                                        <Tr>
                                            <Th px={["4","4","6"]} color="gray.300" width="8">
                                                <Checkbox colorScheme="pink"/>
                                            </Th>
                                            <Th>Usuário</Th>
                                            {isWideVersion &&<Th>Data de Criação</Th>}
                                            <Th w="6"></Th>
                                        </Tr>
                                    </Thead>

                                    <Tbody>

                                        {data.users.map(user => {
                                            return(
                                                <Tr key={user.id}>
                                                    <Td px={["4","4","6"]}>
                                                        <Checkbox colorScheme="pink"/>
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Link color="purple.400" onMouseEnter={() => handlePerfetchUser(user.id)}>
                                                                <Text fontWeight="bold">{user.name}</Text>
                                                            
                                                            </Link>
                                                            <Text fontSize="sm" color="gray.300" >{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    {isWideVersion && <Td fontWeight="normal"  >
                                                        {user.createdAt}
                                                    </Td>}
                                                    <Td >
                                                        {isWideVersion && <Button 
                                                            as="a"
                                                            size="sm"
                                                            fontSize="sm"
                                                            colorScheme="purple"
                                                            leftIcon={<Icon as={RiPencilLine} fontSize="17"/>}
                                                        >
                                                            Editar
                                                        </Button> }
                                                    </Td>
                                                </Tr>
                                            )    
                                        })}
                                            
                                        
                                    </Tbody>
                                </Table>
                                <Pagination 
                                    totalCountOfRegions={data.totalCount}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                    )}

                </Box>

            </Flex>
            
        </Box>
    );
}