import {
  HStack,
  Icon,
  Link,
  StackProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiGithub, SiTwitter } from "react-icons/si";
import { HiMail } from "react-icons/hi";

const Socials = (props: StackProps): JSX.Element => (
  <HStack spacing={4} {...props}>
    <Link isExternal href="https://github.com/AnishDe12020/devkit">
      <Icon
        as={SiGithub}
        w="5"
        h="5"
        _hover={{
          opacity: 0.7,
        }}
        display="block"
        color={useColorModeValue("gray.700", "gray.400")}
      />
    </Link>
    <Link isExternal href="https://twitter.com/DevKitHQ">
      <Icon
        as={SiTwitter}
        w="5"
        h="5"
        _hover={{
          opacity: 0.7,
        }}
        display="block"
        color={useColorModeValue("gray.700", "gray.400")}
      />
    </Link>
    <Link isExternal href="mailto:contact@devkit.one">
      <Icon
        as={HiMail}
        w="5"
        h="5"
        _hover={{
          opacity: 0.7,
        }}
        display="block"
        color={useColorModeValue("gray.700", "gray.400")}
      />
    </Link>
  </HStack>
);

export default Socials;
