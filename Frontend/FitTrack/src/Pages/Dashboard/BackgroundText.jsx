import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function BackgroundText() {
  return (
    <Box>
      <Text
        fontSize={{ base: "32px", md: "clamp(30px, 10vw, 150px)" }} // Dimensiune responsivă
        fontWeight="bold"
        color="rgba(255, 255, 255, 0.2)"
        fontFamily={"main"}
        transform={{ base: "translateY(-500%)", md: "translateY(-90%) " }}
        w="100%"
        ml="3%"
        style={{
          whiteSpace: "nowrap",
          letterSpacing: "0.65em",
          overflow: "hidden",
        }}
        position="relative"
      >
        STRONGER
      </Text>
      <Box
        position="absolute"
        top="29%"
        left="35%"
        transform="translate(-50%, -50%)"
      >
        <Text
          fontWeight="semi-bold"
          color="white"
          fontFamily="main"
          fontSize={{ base: "md", md: "6xl" }}
        >
          BE MORE
        </Text>
        <Text
          fontWeight="bolder"
          color="rgb(127, 246, 114)"
          fontFamily="main"
          fontSize={{ base: "md", md: "6xl" }}
          letterSpacing="0.35em"
        >
          EFFICIENT
        </Text>
        <Text
          fontWeight="thin"
          color="white"
          fontFamily="main"
          fontSize={{ base: "sm", md: "2xl" }}
          overflow={"wrap"}
        >
          Simple and effective workout routines for everyone to use and enjoy!
        </Text>
        <Button
          backgroundColor={"rgb(127, 246, 114)"}
          color="white"
          fontSize={{ base: "xs", md: "xl" }}
          fontFamily={"second"}
          mt="16px"
          p={{ base: "8px", md: "24px" }}
        >
          set your profile
        </Button>
      </Box>
    </Box>
  );
}

export default BackgroundText;
