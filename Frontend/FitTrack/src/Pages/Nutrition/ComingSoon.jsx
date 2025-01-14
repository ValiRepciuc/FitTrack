import React from "react";
import { Box, Text, Stack, Image } from "@chakra-ui/react";
import workingImage from "../../Images/working.png";

function ComingSoon() {
  return (
    <>
      <Box
        color={"white"}
        w={"100%"}
        mt={12}
        textAlign="center"
        p={{ base: 4, md: 8 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          wrap="wrap"
          align="center"
          justify="center"
        >
          <Image src={workingImage} w={{ base: "50%", md: "20%" }} />
          <Box>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              fontFamily="main"
            >
              Coming Soon...
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.300"
              mt={4}
              maxW="500px"
              fontFamily="second"
            >
              We're excited to announce that a **Nutrition Tracker** feature is
              on the way! Track your meals, monitor your calorie intake, and
              meet your fitness goals with ease.
            </Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default ComingSoon;
