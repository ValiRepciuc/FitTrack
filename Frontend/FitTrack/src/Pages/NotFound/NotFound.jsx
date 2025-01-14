import React from "react";
import { Box, Text } from "@chakra-ui/react";
import bgImage from "../../Images/RegisterBG.jpg";

function NotFound() {
  return (
    <Box
      bgImage={`url(${bgImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        color={"rgb(127, 246, 114)"}
        fontSize={{ base: "xl", md: "5xl" }}
        fontWeight={"bold"}
        bgColor={"rgba(0, 0, 0, 0.8)"}
        p={8}
        borderRadius="md"
      >
        Error! Page not found!
      </Text>
    </Box>
  );
}

export default NotFound;
