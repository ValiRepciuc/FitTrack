import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BackgroundText from "./BackgroundText";
import bgDashboard from "../../Images/db.jpg";
import Informations from "./Informations";

function Dashboard() {
  return (
    <Box
      bgImage={`url(${bgDashboard})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Navbar />
      <Box>
        <BackgroundText />
      </Box>
      <Informations />
      <Box position="absolute" bottom="0" w="100%" textAlign="center">
        <Footer />
      </Box>
    </Box>
  );
}

export default Dashboard;
