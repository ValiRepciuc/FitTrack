import { VStack, Text, Button } from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import PasswordInput from "./PasswordInput";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [formData, setFormData] = React.useState({
    last_name: "",
    first_name: "",
    email: "",
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.last_name ||
      !formData.first_name ||
      !formData.email ||
      !formData.username ||
      !formData.password
    ) {
      alert("All fields are required!");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REGISTER_ENDPOINT}`,
        formData,
        { withCredentials: true }
      );
      console.log("User registered successfully:", response.data);
      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
      console.log(error.response);
      console.log(formData);
      alert("Failed to register user.");
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
        Register
      </Text>
      <CustomInput
        placeholder="Enter your Last Name"
        name="last_name"
        value={formData.last_name}
        type="text"
        onChange={handleChange}
      />
      <CustomInput
        placeholder="Enter your First Name"
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <CustomInput
        placeholder="Enter your email"
        value={formData.email}
        name="email"
        type="email"
        onChange={handleChange}
      />
      <CustomInput
        placeholder="Enter your username"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <PasswordInput
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button
        backgroundColor="rgb(127, 246, 114)"
        onClick={handleSubmit}
        variant="solid"
        size="lg"
        fontFamily={"main"}
        isLoading={isSubmitting}
      >
        Register
      </Button>
    </VStack>
  );
}

export default RegisterForm;
