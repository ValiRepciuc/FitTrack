import React from "react";
import PasswordInput from "../Auth/PasswordInput";
import CustomInput from "../Auth/CustomInput";
import {
  Box,
  Text,
  Button,
  Avatar,
  Stack,
  Input,
  FormControl,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";
import { FaMale, FaFemale } from "react-icons/fa";

function UserData({ userData, updateUserData }) {
  return (
    <Box
      p="16px"
      w={{ base: "80%", md: "45%" }}
      bg="rgba(0, 0, 0, 0.5)"
      borderRadius="md"
      textAlign="start"
      position={"absolute"}
      top="15%"
      left={{ base: "10%", md: "40%" }}
      border="2px solid rgb(127, 246, 114)"
      fontFamily={"second"}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 16, md: 64 }}
        alignItems={"space-between"}
      >
        <Stack direction="column">
          <Avatar bg="gray.500" size={"2xl"} ml={{ base: 32, md: 8 }} />
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign={"center"}
            color="white"
            ml={{ base: 0, md: 8 }}
          >
            Hi, John Doe!
          </Text>
        </Stack>
        <Stack direction="column" spacing={8} mt={2}>
          <Button
            color={"white"}
            backgroundColor={"rgb(127, 246, 114)"}
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 0.6 }}
          >
            Change image
          </Button>
          <Button
            color={"rgb(127, 246, 114)"}
            backgroundColor={"transparent"}
            border="2px solid rgb(127, 246, 114)"
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 0.6 }}
          >
            Delete image
          </Button>

          <Button
            display={{ base: "", md: "none" }}
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
            display={{ base: "", md: "none" }}
            variant="link"
            color="white"
            fontWeight="bold"
            m
            fontSize="2xl"
            fontFamily={"second"}
          >
            Terms&Conditions
          </Button>
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={8} mt={16}>
        {/* Nume */}
        <FormControl id="lName" mb="4">
          <FormLabel color="white">Last Name</FormLabel>
          <CustomInput />
        </FormControl>

        {/* Prenume */}
        <FormControl id="fName" mb="4">
          <FormLabel color="white">First Name</FormLabel>
          <CustomInput />
        </FormControl>
      </Stack>

      <Stack direction={"row"} spacing={8}>
        {/* Data nașterii */}
        <FormControl id="birthday" mb="4">
          <FormLabel color="white">Birthday date</FormLabel>
          <Input
            type="date"
            value={userData.birthday}
            onChange={(e) => updateUserData("birthday", e.target.value)}
            color={"white"}
            fontFamily={"second"}
            fontWeight={"bold"}
          />
        </FormControl>

        {/* Sex */}
        <FormControl id="gender" mb="4">
          <FormLabel color="white">Gender</FormLabel>
          <Stack direction="row" spacing={4}>
            <IconButton
              aria-label="Male"
              icon={<FaMale />}
              onClick={() => updateUserData("selectedGender", "male")}
              color={
                userData.selectedGender === "male"
                  ? "rgb(127, 246, 114)"
                  : "white"
              }
              backgroundColor={
                userData.selectedGender === "male"
                  ? "rgba(127, 246, 114, 0.2)"
                  : "transparent"
              }
              _hover={{ backgroundColor: "rgba(127, 246, 114, 0.2)" }}
            />
            <IconButton
              aria-label="Female"
              icon={<FaFemale />}
              onClick={() => updateUserData("selectedGender", "female")}
              color={
                userData.selectedGender === "female"
                  ? "rgb(127, 246, 114)"
                  : "white"
              }
              backgroundColor={
                userData.selectedGender === "female"
                  ? "rgba(127, 246, 114, 0.2)"
                  : "transparent"
              }
              _hover={{ backgroundColor: "rgba(127, 246, 114, 0.2)" }}
            />
          </Stack>
        </FormControl>
      </Stack>

      <Stack direction={"row"} spacing={8}>
        {/* Înălțime */}
        <FormControl id="height" mb="4">
          <FormLabel color="white">Height (cm)</FormLabel>
          <Input
            type="number"
            placeholder="Add your height"
            value={userData.height}
            onChange={(e) => updateUserData("height", e.target.value)}
            color={"white"}
            fontFamily={"second"}
            fontWeight={"bold"}
          />
        </FormControl>

        {/* Greutate */}
        <FormControl id="weight" mb="4">
          <FormLabel color="white">Weight (kg)</FormLabel>
          <Input
            type="number"
            placeholder="Add your weight"
            value={userData.weight}
            onChange={(e) => updateUserData("weight", e.target.value)}
            color={"white"}
            fontFamily={"second"}
            fontWeight={"bold"}
          />
        </FormControl>
      </Stack>

      {/* Email (read-only) */}
      <FormControl id="email" mb="4" mt={4}>
        <FormLabel color="white">Email</FormLabel>
        <Input
          type="email"
          value={userData.email}
          isReadOnly
          color={"white"}
          fontFamily={"second"}
          fontWeight={"bold"}
          _focus={{
            borderColor: "rgb(127, 246, 114)",
            boxShadow: "0 0 0 3px rgb(127, 246, 114)",
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel color="white">Password</FormLabel>
        <PasswordInput
          value={userData.password}
          onChange={(event) => updateUserData("password", event.target.value)}
          color={"white"}
        />
      </FormControl>
    </Box>
  );
}

export default UserData;
