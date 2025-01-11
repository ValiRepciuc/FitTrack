import { Button, VStack, Text } from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import PasswordInput from "./PasswordInput";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "admin") {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  }

  function handleUsernameChange(event) {
    console.log(event.target.value);
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

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
        Login
      </Text>
      <CustomInput
        placeholder="Enter your email/username"
        value={username}
        onChange={handleUsernameChange}
      />
      <PasswordInput value={password} onChange={handlePasswordChange} />
      <Button
        backgroundColor="rgb(127, 246, 114)"
        onClick={handleLogin}
        variant="solid"
        size="lg"
        fontFamily={"main"}
      >
        Login
      </Button>
    </VStack>
  );
}

export default LoginForm;
