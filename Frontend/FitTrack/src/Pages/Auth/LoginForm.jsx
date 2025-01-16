import { Button, VStack, Text } from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import PasswordInput from "./PasswordInput";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      alert("All fields are required!");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_LOGIN_ENDPOINT}`, // Endpoint-ul pentru login
        formData,
        { withCredentials: true } // Necesită includerea cookie-urilor
      );

      // Extragem token-ul JWT din răspuns
      const token = response.data.token;

      // Salvăm token-ul în localStorage
      localStorage.setItem("authToken", token);

      // Navigăm către dashboard
      navigate("/dashboard");
      alert("Login successful!");
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data.error || "Failed to login.");
      } else {
        alert("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
      />
      <PasswordInput
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        backgroundColor="rgb(127, 246, 114)"
        variant="solid"
        size="lg"
        fontFamily={"main"}
        onClick={handleSubmit}
        isLoading={isSubmitting}
      >
        Login
      </Button>
    </VStack>
  );
}

export default LoginForm;
