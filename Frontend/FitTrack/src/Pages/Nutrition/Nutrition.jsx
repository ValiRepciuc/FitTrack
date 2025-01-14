import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { Box } from "@chakra-ui/react";
import bgProfile from "../../Images/bgProfile.jpg";
import Footer from "../../Components/Footer";
import Goals from "./Goals";
import ComingSoon from "./ComingSoon";

function Nutrition() {
  return (
    <Box
      bgImage={`url(${bgProfile})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgAttachment="fixed"
      w="100%"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      overflowY="auto"
      p={{ base: 4, md: 8 }}
    >
      <Navbar />

      {/* Goal-urile utilizatorului */}
      <Goals />
      {/* Partea in lucru a site-ului */}
      <ComingSoon />

      <Box position="fixed" bottom="0" w="100%" textAlign="center">
        <Footer />
      </Box>
    </Box>
  );
}

export default Nutrition;
