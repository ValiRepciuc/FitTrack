import { Button, VStack, Text, Alert, AlertIcon } from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import PasswordInput from "./PasswordInput";
import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext); // Accesăm contextul

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Resetăm eroarea anterioară

    if (!formData.username || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_LOGIN_ENDPOINT}`,
        formData,
        { withCredentials: true }
      );

      const { access, refresh, username } = response.data;

      // Salvăm token-ul în context și în localStorage
      setAuth({ accessToken: access, username });
      localStorage.setItem("refreshToken", refresh);

      // Navigăm către dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response) {
        setError(
          error.response.data.error || "Login failed. Please try again."
        );
      } else {
        setError("Network error. Please try again later.");
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
      {error && (
        <Alert status="error" borderRadius="md">
          <AlertIcon />
          {error}
        </Alert>
      )}
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
