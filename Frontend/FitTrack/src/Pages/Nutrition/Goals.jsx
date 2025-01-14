import React, { useState } from "react";
import {
  Box,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Stack,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

function Goals() {
  const [goals, setGoals] = useState({
    weight_goal: 80,
    daily_calories_goal: 2000,
    water_goal: 3,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Controlează starea modalului
  const [tempGoals, setTempGoals] = useState({ ...goals }); // Stocare temporară pentru valori

  const handleGoalsChange = () => {
    setGoals(tempGoals); // Salvează modificările
    setIsModalOpen(false); // Închide modalul
  };

  const handleInputChange = (field, value) => {
    setTempGoals((prevGoals) => ({
      ...prevGoals,
      [field]: parseFloat(value),
    }));
  };

  return (
    <>
      <Box
        w={{ base: "90%", md: "60%" }}
        border="2px solid rgb(127, 246, 114)"
        color={"white"}
        p={{ base: 4, md: 8 }}
        borderRadius="lg"
        bg="rgba(0, 0, 0, 0.5)"
        mt={{ base: "15%", md: "5%" }}
        mb={16}
      >
        <Stack direction="column" align="center" spacing={6}>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            textAlign="center"
            fontFamily="main"
          >
            Your Goals
          </Text>
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit goals"
            color="rgb(127, 246, 114)"
            backgroundColor={"transparent"}
            onClick={() => setIsModalOpen(true)}
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 0.65 }}
            alignSelf="center"
          />
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={8}
            wrap="wrap"
            justify="center"
            align="center"
          >
            <Box textAlign="center">
              <CircularProgress
                color="rgb(127, 246, 114)"
                value={(goals.weight_goal / 100) * 100}
                size="100px"
              >
                <CircularProgressLabel fontSize={{ base: "sm", md: "lg" }}>
                  {goals.weight_goal} kg
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box textAlign="center">
              <CircularProgress
                color="rgb(127, 246, 114)"
                value={(goals.water_goal / 4) * 100}
                size="100px"
              >
                <CircularProgressLabel fontSize={{ base: "sm", md: "lg" }}>
                  {goals.water_goal} l
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box textAlign="center">
              <CircularProgress
                color="rgb(127, 246, 114)"
                value={(goals.daily_calories_goal / 4000) * 100}
                size="100px"
              >
                <CircularProgressLabel fontSize={{ base: "sm", md: "md" }}>
                  {goals.daily_calories_goal} kcal
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
          </Stack>
        </Stack>
      </Box>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white">
          <ModalHeader>Edit Your Goals</ModalHeader>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Weight Goal (kg)</FormLabel>
              <Input
                type="number"
                value={tempGoals.weight_goal}
                onChange={(e) =>
                  handleInputChange("weight_goal", e.target.value)
                }
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Daily Calories Goal (kcal)</FormLabel>
              <Input
                type="number"
                value={tempGoals.daily_calories_goal}
                onChange={(e) =>
                  handleInputChange("daily_calories_goal", e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Water Goal (liters)</FormLabel>
              <Input
                type="number"
                value={tempGoals.water_goal}
                onChange={(e) =>
                  handleInputChange("water_goal", e.target.value)
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleGoalsChange}>
              Save Changes
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Goals;
