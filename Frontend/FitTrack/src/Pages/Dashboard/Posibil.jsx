import React from "react";
import { Box, Heading, Stack, Button } from "@chakra-ui/react";

function Posibil() {
  return (
    <Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        backgroundColor={"transparent"}
        color={"white"}
        bgImage={`url(${testcard1})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="500px"
        h="250px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderColor={"transparent"}
        transition="transform 0.5s ease-in-out, border-color 0.5s ease-in-out"
        _hover={{
          borderColor: "rgb(127, 246, 114)",
          transform: "scale(1.1)",
        }}
      >
        <Stack>
          <CardBody>
            <Heading
              size="md"
              textAlign={"center"}
              fontFamily={"second"}
              position={"relative"}
              top={"-20px"}
              left={"-20%"}
            >
              You had so far 0 Routines registered
            </Heading>
          </CardBody>

          <CardFooter>
            <Button
              colorScheme="green"
              variant="outline"
              size="md"
              position={"relative"}
              top={"40px"}
            >
              Add Routine
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}

export default Posibil;
