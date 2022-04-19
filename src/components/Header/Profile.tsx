import { Avatar, Box, Flex,Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;

}


export function Profile({showProfileData}:ProfileProps){
    return(
        <Flex align="center">
            {showProfileData && <Box mr="4" textAlign="right">
                <Text>Leandro Araujo</Text>
                <Text color="gray.400" fontSize="small">
                    leandroaraujo5511@gmail.com
                </Text>
            </Box>}
            <Avatar size="md" name="Leandro Araujo" src="https://github.com/leandroaraujo5511.png" />
        </Flex>
    );
}