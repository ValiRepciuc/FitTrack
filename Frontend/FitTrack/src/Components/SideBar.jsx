import React from "react";
import {
  Box,
  Text,
  Button,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? (
        <div></div>
      ) : (
        <Box
          position="fixed"
          top={0}
          left={0}
          w="80px" // Ajustează lățimea sidebar-ului pentru a se potrivi textului
          h="100%"
          backgroundColor="rgb(127, 246, 114)"
          zIndex={1}
          p="16px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Text
            transform="rotate(270deg)"
            fontSize="5xl"
            fontFamily="main"
            fontWeight="bold"
            color="white"
            mt="16px"
          >
            FIT
          </Text>
          <Spacer />
          <Button
            variant="ghost"
            color="white"
            _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
            onClick={() => alert("Logout button clicked")}
          >
            <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
          </Button>
        </Box>
      )}
    </>
  );
}

export default SideBar;
