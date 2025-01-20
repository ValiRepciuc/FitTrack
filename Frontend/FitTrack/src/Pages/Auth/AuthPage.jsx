import { React, useState } from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import RegisterBG from "../../Images/RegisterBG.jpg";
import Footer from "../../Components/Footer";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import testLogin from "../../Images/testLogin.jpg";

function Register() {
  const [isCreated, setIsCreated] = useState(true);

  const bgPhoto = isCreated ? testLogin : RegisterBG;
  return (
    <Box
      bgImage={`url(${bgPhoto})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="absolute" top="16px" left="24px">
        <Text fontSize="3xl" fontWeight="bold" fontFamily="main">
          <Text as="span" color="rgb(127, 246, 114)">
            FIT
          </Text>
          <Text as="span" color="white">
            TRACK
          </Text>
        </Text>
      </Box>
      <Box
        w={{ base: "75%", md: "400px" }}
        p="24px"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        background={"rgba(128, 128, 128, 0.5)"}
        border={"2px"}
        borderColor={"rgb(127, 246, 114)"}
        sx={{
          backdropFilter: "blur(5px)",
        }}
        color="white"
      >
        {isCreated ? <LoginForm /> : <RegisterForm />}

        <Text fontSize="l" textAlign="center">
          {isCreated ? "Don't have an account? " : "Already have an account? "}
          <Link
            color="rgb(127, 246, 114)"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
            href="#login"
            fontFamily={"second"}
            onClick={() => setIsCreated(!isCreated)}
          >
            {isCreated ? "Register" : "Login"}
          </Link>
        </Text>
        <Text
          fontSize={"xs"}
          color={"white"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          By clicking the Register button, you agree to our Terms of Service and
          Privacy Policy.
        </Text>
      </Box>
      <Box position="absolute" bottom="0" w="100%" textAlign="center">
        <Footer />
      </Box>
    </Box>
  );
}

export default Register;
