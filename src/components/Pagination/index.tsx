import { Box, Button, Stack,Text } from "@chakra-ui/react";
import { PaginationIcon } from "./PaginationIcon";

   /**
     * Quais paginas deve mostrar ?
     * Ultima pagina 
     * Primeira pagina
     * Pagina atual 
     * Proximas pagina após a atual
     * Paginas anteriores a atual 
     * 
     * 1 ... 4 5 6 ... 20
     */
interface PaginationProps {
    totalCountOfRegions: number;
    registersPerPage?: number;
    currentPage?: number;    
    onPageChange:(page: number) => void;
}


const siblingsCount = 1; //Qnt paginas mostrar antes e apos a pagina atual
function generatePagesArray(from: number, to: number){ //Gerando paginas vizinhas 
    return [...new Array(to - from)]
    .map((_, index) =>{
        return from + index + 1;
    })
    .filter(page => page > 0)
}



export function Pagination({
    totalCountOfRegions, 
    registersPerPage = 10,
    currentPage = 1,
    onPageChange
}:PaginationProps){
    
   
    const lastPage = Math.ceil(totalCountOfRegions / registersPerPage); //ultima pagina possivel

    const previousPage = currentPage > 1
        ? generatePagesArray((currentPage - 1 - siblingsCount), (currentPage - 1))
        : []

    const nextPages = currentPage < lastPage  
        ? generatePagesArray(currentPage, (Math.min(currentPage + siblingsCount, lastPage)))
        : []


    return(
        <Stack
            direction={["column","row" ]}
            mt="8"
            spacing="6"
            justify="space-between"
            align="center"

        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>                
            </Box>
           <Stack direction="row" spacing="2">
                
                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationIcon onPageChange={onPageChange}  number={1}/>
                        {currentPage > (2 + siblingsCount) && (
                            <Text color="gray.300" textAlign="center" width="8">...</Text>
                        ) }
                    </>
                )}

                {previousPage.length > 0 && previousPage.map(page => {
                    return <PaginationIcon onPageChange={onPageChange} key={page} number={page}/>
                })}
                
                <PaginationIcon onPageChange={onPageChange} number={currentPage} isCuredent />   
                
                {nextPages.length > 0  && nextPages.map(page => {
                    return <PaginationIcon onPageChange={onPageChange} key={page} number={page}/>
                })}
                
                {(currentPage + siblingsCount) < (lastPage) && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastPage && (
                            <Text color="gray.300" textAlign="center" width="8">...</Text>
                        )}
                        <PaginationIcon onPageChange={onPageChange} number={lastPage}/>
                    </>
                )}
            </Stack>     


        </Stack>
    );
}