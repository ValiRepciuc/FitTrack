import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box
      bg="rgb(127, 246, 114)"
      px={4}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={3}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          fontFamily="main"
        >
          <Button
            variant="none"
            fontWeight="bold"
            fontSize="2xl"
            fontFamily={"main"}
            onClick={() => navigate("/dashboard")}
          >
            <Text as="span" color="black">
              FIT
            </Text>
            <Text as="span" color="white">
              TRACK
            </Text>
          </Button>
        </Text>

        {/* Burger menu button (hidden on larger screens) */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Menu links (visible on larger screens) */}
        <HStack
          as="nav"
          spacing={16}
          display={{ base: "none", md: "flex" }}
          mr="24px"
        >
          <Button
            variant="link"
            color="white"
            fontWeight="bold"
            fontSize="2xl"
            fontFamily={"main"}
            onClick={() => navigate("/nutrition")}
          >
            Nutrition
          </Button>
          <Button
            variant="link"
            color="white"
            fontWeight="bold"
            fontSize="2xl"
            fontFamily={"main"}
            onClick={() => navigate("/routines")}
          >
            Routines
          </Button>
          <Button
            variant="link"
            color="white"
            fontWeight="bold"
            fontSize="2xl"
            fontFamily={"main"}
            onClick={() => navigate("/profile")}
          >
            Profile
          </Button>
          <Button
            variant="link"
            color="white"
            fontWeight="bold"
            fontSize="2xl"
            fontFamily={"main"}
            onClick={() => navigate("/")}
          >
            Logout
          </Button>
        </HStack>
      </Flex>

      {/* Mobile menu (visible only when burger menu is open) */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Button
              variant="link"
              color="white"
              fontWeight="bold"
              fontSize="l"
              fontFamily={"main"}
            >
              Nutrition
            </Button>
            <hr />
            <Button
              variant="link"
              color="white"
              fontWeight="bold"
              fontSize="l"
              fontFamily={"main"}
            >
              Routines
            </Button>
            <hr />
            <Button
              variant="link"
              color="white"
              fontWeight="bold"
              fontSize="l"
              fontFamily={"main"}
              onClick={() => navigate("/profile")}
            >
              Profile
            </Button>
            <hr />
            <Button
              variant="link"
              color="white"
              fontWeight="bold"
              fontSize="l"
              fontFamily={"main"}
              onClick={() => navigate("/")}
            >
              Logout
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
