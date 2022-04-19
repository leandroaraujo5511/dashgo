import { Icon, Link as CkakraLink ,Text, LinkProps as ChakraLinkprops} from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link';
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkprops{
    icon: ElementType;
    children: string;
    href: string;
}
export function NavLink({icon, children , href, ...rest}:NavLinkProps){
    return(
        <ActiveLink href={href} passHref>
            <CkakraLink display="flex" {...rest}>
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="mediun">{children}</Text>
            </CkakraLink>
        </ActiveLink>
    );

}
