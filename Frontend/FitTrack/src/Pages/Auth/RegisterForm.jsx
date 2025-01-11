import { VStack, Text, Button } from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import PasswordInput from "./PasswordInput";
import React from "react";

function RegisterForm() {
  return (
    <VStack spacing="16px" align="stretch">
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textDecoration="underline"
        textAlign="center"
        color={"rgb(127, 246, 114)"}
        fontFamily={"main"}
      >
        Register
      </Text>
      <CustomInput placeholder="Enter your Last Name" />
      <CustomInput placeholder="Enter your First Name" />
      <CustomInput placeholder="Enter your email" />
      <CustomInput placeholder="Enter your username" />
      <PasswordInput />
      <Button
        backgroundColor="rgb(127, 246, 114)"
        onClick={() => alert("Register button clicked")}
        variant="solid"
        size="lg"
        fontFamily={"main"}
      >
        Register
      </Button>
    </VStack>
  );
}

export default RegisterForm;
