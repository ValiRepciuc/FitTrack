import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../../Components/Footer";
import bgProfile from "../../Images/bgProfile.jpg";
import SidebarProfile from "./SidebarProfile";
import UserData from "./UserData";

function Profile() {
  const [userData, setUserData] = useState({
    password: "proba",
    selectedGender: "male",
    birthday: "1990-01-01",
    height: "",
    weight: "",
    email: "johndoe@example.com",
  });

  const updateUserData = (field, value) => {
    setUserData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <Box
      bgImage={`url(${bgProfile})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgAttachment="fixed" // Adaugă această proprietate pentru a fixa imaginea de fundal
      w="100%"
      minH="100vh" // Schimbă h="100vh" în minH="100vh" pentru a permite scroll-ul
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflowY="auto"
    >
      <Navbar />
      <Box
        display={{ base: "none", md: "block" }}
        p="16px"
        bg="rgba(0, 0, 0, 0.5)"
        borderRadius="md"
        textAlign="center"
        position={"absolute"}
        top="15%"
        left="15%"
        border={"2px solid rgb(127, 246, 114)"}
      >
        <SidebarProfile />
      </Box>
      <UserData userData={userData} updateUserData={updateUserData} />;
      <Box position="fixed" bottom="0" w="100%" textAlign="center">
        <Footer />
      </Box>
    </Box>
  );
}

export default Profile;
