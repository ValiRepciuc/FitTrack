import React, { useState } from "react";
import {
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
  Button,
} from "@chakra-ui/react";

function RoutineAdd({ addRoutine, onClose }) {
  const [editableRoutine, setEditableRoutine] = useState({
    title: "",
    description: "",
    duration: "",
    difficulty: "",
    exercises: [],
  });

  const handleInputChange = (field, value) => {
    setEditableRoutine((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleAddRoutine = () => {
    addRoutine({
      ...editableRoutine,
      id: Date.now(),
    });
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="gray.800" color="white">
        <ModalHeader>Add Routine</ModalHeader>
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
              onChange={(e) => handleInputChange("description", e.target.value)}
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
              onChange={(e) => handleInputChange("difficulty", e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Exercises</FormLabel>
            <Textarea
              value={editableRoutine.exercises.join(", ")}
              onChange={(e) =>
                handleInputChange(
                  "exercises",
                  e.target.value.split(",").map((exercise) => exercise.trim())
                )
              }
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="ghost"
            onClick={onClose}
            color="rgb(127, 246, 114)"
            mr={3}
          >
            Cancel
          </Button>
          <Button
            backgroundColor="rgb(127, 246, 114)"
            color="white"
            _hover={{ opacity: 0.8 }}
            onClick={handleAddRoutine}
          >
            Add Routine
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RoutineAdd;
