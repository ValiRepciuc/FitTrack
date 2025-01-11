import React from "react";
import { VStack, Button } from "@chakra-ui/react";

function SidebarProfile() {
  return (
    <VStack spacing={8} mx={8}>
      <Button
        variant="link"
        color="white"
        fontWeight="bold"
        m
        fontSize="2xl"
        fontFamily={"second"}
      >
        Settings
      </Button>
      <Button
        variant="link"
        color="white"
        fontWeight="bold"
        m
        fontSize="2xl"
        fontFamily={"second"}
      >
        My Stats
      </Button>
      <Button
        variant="link"
        color="white"
        fontWeight="bold"
        m
        fontSize="2xl"
        fontFamily={"second"}
      >
        Terms&Conditions
      </Button>
    </VStack>
  );
}

export default SidebarProfile;
