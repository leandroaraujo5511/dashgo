import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationIcon } from "./PaginationIcon";

export function Pagination(){
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
                <PaginationIcon number={1} isCuredent />   
                <PaginationIcon number={2} />   
                <PaginationIcon number={3} />   
                <PaginationIcon number={4} />   
                <PaginationIcon number={5} />   
                <PaginationIcon number={6} />   
            </Stack>     


        </Stack>
    );
}