import {
  IconButton,
  Box,
  Flex,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Heading,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import SidebarContent from "@/components/SidebarContent";
import { FiMenu } from "react-icons/fi";
import ChangeColorModeButton from "@/components/Common/ChangeColorModeButton";

interface WithSidebarProps {
  title?: string;
  children: React.ReactNode;
}

const WithSidebar = ({ title, children }: WithSidebarProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as="section"
      minH="100vh"
      mt={{ base: 2, md: 8 }}
      mr={{ base: 0, md: 4 }}
    >
      <SidebarContent
        display={{ base: "none", md: "unset" }}
        onClose={() => onClose}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="full">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify={{ base: "flex-end", md: "space-between" }}
          w="full"
          px="4"
          h="14"
        >
          <Heading display={{ base: "none", md: "block" }}>
            {title || ""}
          </Heading>

          <ChangeColorModeButton
            aria-label={"Toggle Color Mode"}
            size={useBreakpointValue({ base: "sm", md: "md" })}
          />
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="sm"
            ml={4}
          />
        </Flex>

        <Box as="main" p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default WithSidebar;
