import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
} from "@chakra-ui/react";

function RoutineCard({ routine, updateRoutine, removeRoutine }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controlează deschiderea modalului
  const [editableRoutine, setEditableRoutine] = useState({ ...routine }); // Datele rutinei editabile

  const handleInputChange = (field, value) => {
    setEditableRoutine((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log(editableRoutine); // Salvează datele rutinei editabile
    updateRoutine(editableRoutine); // Actualizează rutina în componenta părinte
    setIsModalOpen(false);
  };

  const handleExerciseChange = (index, field, value) => {
    setEditableRoutine((prevState) => {
      const updatedExercises = [...prevState.exercises];
      updatedExercises[index][field] = value;
      return { ...prevState, exercises: updatedExercises };
    });
  };

  return (
    <>
      <Card
        border="1px solid rgb(127, 246, 114)"
        borderRadius="md"
        bg="gray.700"
        p={4}
        m={2}
        flexBasis={{ base: "100%", sm: "48%", md: "30%", lg: "22%" }}
        flexGrow={1}
        overflow="hidden"
      >
        <CardBody>
          <Heading fontSize="2xl" color="white">
            {routine.title}
          </Heading>
          <Text fontSize="md" color="gray.300" mt={2}>
            {routine.description} <br /> Duration: {routine.duration} <br />{" "}
            Difficulty: {routine.difficulty}
          </Text>
          <Text mt={4} color="white">
            <strong>Exercises:</strong>{" "}
            {routine.exercises.map((exercise) => exercise.name).join(", ")}
          </Text>
        </CardBody>
        <CardFooter justify="center" mt={4}>
          <Button
            mr={4}
            variant="solid"
            backgroundColor="rgb(127, 246, 114)"
            color="white"
            _hover={{ opacity: 0.8 }}
            onClick={() => setIsModalOpen(true)} // Deschide modalul
          >
            View Details
          </Button>
          <Button
            variant="solid"
            backgroundColor="red.500"
            color="white"
            _hover={{ opacity: 0.8 }}
            onClick={() => removeRoutine(routine.id)} // Șterge rutina
          >
            Delete
          </Button>
        </CardFooter>
      </Card>

      {/* Modal pentru detalii suplimentare */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white">
          <ModalHeader>Edit Routine</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={editableRoutine.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={editableRoutine.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Duration</FormLabel>
              <Input
                value={editableRoutine.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Difficulty</FormLabel>
              <Input
                value={editableRoutine.difficulty}
                onChange={(e) =>
                  handleInputChange("difficulty", e.target.value)
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Exercises</FormLabel>
              <Box>
                {editableRoutine.exercises.map((exercise, index) => (
                  <Box key={index} mb={4}>
                    <Text mb={2}>{exercise.name}</Text>
                    <Input
                      type="number"
                      value={exercise.kg}
                      onChange={(e) =>
                        handleExerciseChange(
                          index,
                          "kg",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      placeholder="kg"
                      mr={2}
                      width="80px"
                      display="inline-block"
                    />
                    <Text display="inline-block" mr={2}>
                      kg x
                    </Text>
                    <Input
                      type="number"
                      value={exercise.reps}
                      onChange={(e) =>
                        handleExerciseChange(
                          index,
                          "reps",
                          parseInt(e.target.value) || 0
                        )
                      }
                      placeholder="reps"
                      width="80px"
                      display="inline-block"
                    />
                    <Text display="inline-block" ml={2}>
                      reps
                    </Text>
                  </Box>
                ))}
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => setIsModalOpen(false)}
              color="rgb(127, 246, 114)"
              mr={3}
            >
              Cancel
            </Button>
            <Button
              backgroundColor="rgb(127, 246, 114)"
              color="white"
              _hover={{ opacity: 0.8 }}
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RoutineCard;
