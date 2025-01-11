import React from "react";
import { Box, Stack, Text, VStack } from "@chakra-ui/react";

function Informations() {
  return (
    <Box
      position="absolute"
      top="70%"
      left="50%"
      transform="translate(-50%, -50%)"
      w="80%"
    >
      <Stack
        spacing={0}
        align="stretch"
        w="100%"
        color={"white"}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          flex="1"
          p={4}
          border="1px solid rgb(127, 246, 114)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack>
            <Text fontSize="5xl" fontWeight="bold" fontFamily={"second"}>
              0
            </Text>
            <Text fontSize={"2xl"} fontWeight={"md"} fontFamily={"second"}>
              total workouts
            </Text>
          </VStack>
        </Box>
        <Box
          flex="1"
          p={4}
          border="1px solid rgb(127, 246, 114)"
          boxShadow="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack>
            <Text fontSize="5xl" fontWeight="bold" fontFamily={"second"}>
              0
            </Text>
            <Text fontSize={"2xl"} fontWeight={"md"} fontFamily={"second"}>
              users
            </Text>
          </VStack>
        </Box>
        <Box
          flex="1"
          p={4}
          border="1px solid rgb(127, 246, 114)"
          boxShadow="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack>
            <Text fontSize="5xl" fontWeight="bold" fontFamily={"second"}>
              0
            </Text>
            <Text fontSize={"2xl"} fontWeight={"md"} fontFamily={"second"}>
              total sets
            </Text>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Informations;
