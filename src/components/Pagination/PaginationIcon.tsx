import { Button } from "@chakra-ui/react";

interface PaginationsProps { 
    number: number
    isCuredent?: boolean,
}

export function PaginationIcon({number, isCuredent}: PaginationsProps){
    if(isCuredent){
        return(
            <Button 
                    size="sm"
                    fontSize="sx"
                    width="4"
                    colorScheme="pink"
                    disabled
                    _disabled={{
                        bg: "pink.500",
                        cursor: "default",

                    }}
                >
                    {number}
                </Button>
        );
    }
    return(
        <Button 
        size="sm"
        fontSize="sx"
        width="4"
        bg="gray.700"
        _hover={{
            bg: "gray.500",
        }}
    >
        {number}
    </Button>
    );
}