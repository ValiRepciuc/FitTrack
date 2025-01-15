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
  Select,
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";

function RoutineAdd({ addRoutine, onClose }) {
  const exerciseOptions = [
    "Bench Press",
    "Squats",
    "Deadlift",
    "Pull-ups",
    "Push-ups",
    "Plank",
    "Lunges",
    "Crunches",
    "Calf raises",
    "Leg curls",
    "Leg raises",
    "Russian twists",
    "Jumping jacks",
    "High knees",
    "Burpees",
    "Mountain climbers",
    "Bicep curls",
    "Shoulder press",
  ];

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

  const handleAddExercise = () => {
    setEditableRoutine((prevState) => ({
      ...prevState,
      exercises: [
        ...prevState.exercises,
        { name: "", kg: 0, reps: 0 }, // Exercițiu gol pentru editare
      ],
    }));
  };

  const handleExerciseChange = (index, field, value) => {
    setEditableRoutine((prevState) => {
      const updatedExercises = [...prevState.exercises];
      updatedExercises[index][field] = value;
      return { ...prevState, exercises: updatedExercises };
    });
  };

  const handleAddRoutine = () => {
    if (editableRoutine.exercises.length === 0) {
      alert("Please add at least one exercise.");
      return;
    }
    addRoutine({
      ...editableRoutine,
      id: Date.now(), // Generare ID unic
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
            {editableRoutine.exercises.map((exercise, index) => (
              <Box key={index} mb={4}>
                {/* Dropdown pentru selectarea exercițiului (doar pentru prima instanță) */}
                {index === 0 && (
                  <Select
                    placeholder="Select Exercise"
                    value={exercise.name}
                    onChange={(e) =>
                      handleExerciseChange(index, "name", e.target.value)
                    }
                  >
                    {exerciseOptions.map((exerciseOption) => (
                      <option key={exerciseOption} value={exerciseOption}>
                        {exerciseOption}
                      </option>
                    ))}
                  </Select>
                )}

                {/* Input-uri pentru kg și reps */}
                <HStack mt={2}>
                  <Input
                    type="number"
                    placeholder="kg"
                    value={exercise.kg}
                    onChange={(e) =>
                      handleExerciseChange(
                        index,
                        "kg",
                        parseFloat(e.target.value)
                      )
                    }
                  />
                  <Text>x</Text>
                  <Input
                    type="number"
                    placeholder="Reps"
                    value={exercise.reps}
                    onChange={(e) =>
                      handleExerciseChange(
                        index,
                        "reps",
                        parseInt(e.target.value)
                      )
                    }
                  />
                </HStack>

                {/* Buton pentru adăugarea unui nou set pentru același exercițiu */}
                {index === editableRoutine.exercises.length - 1 && (
                  <Button
                    mt={2}
                    size="sm"
                    colorScheme="blue"
                    onClick={() =>
                      setEditableRoutine((prevState) => ({
                        ...prevState,
                        exercises: [
                          ...prevState.exercises,
                          { name: exercise.name, kg: 0, reps: 0 }, // Adaugă un set nou cu același exercițiu
                        ],
                      }))
                    }
                  >
                    + Add Set
                  </Button>
                )}
              </Box>
            ))}

            {/* Buton pentru adăugarea unui exercițiu complet nou */}
            <Button
              mt={4}
              colorScheme="green"
              onClick={() =>
                setEditableRoutine((prevState) => ({
                  ...prevState,
                  exercises: [
                    ...prevState.exercises,
                    { name: "", kg: 0, reps: 0 }, // Exercițiu gol pentru completare
                  ],
                }))
              }
            >
              + Add New Exercise
            </Button>
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
