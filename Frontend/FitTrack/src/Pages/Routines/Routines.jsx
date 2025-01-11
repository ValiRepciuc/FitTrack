import { React, useState } from "react";
import Navbar from "../../Components/Navbar";
import bgProfile from "../../Images/bgProfile.jpg";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Footer from "../../Components/Footer";
import RoutineCard from "./RoutineCard";
import RoutineAdd from "./RoutineAdd";

function Routines() {
  const [workoutRoutines, setWorkoutRoutines] = useState([
    {
      id: 1,
      title: "Full Body Workout",
      type: "Strength",
      description:
        "This is a full body workout routine that you can do at home.",
      duration: "30 minutes",
      difficulty: "Beginner",
      exercises: ["Squats", "Push-ups", "Plank", "Lunges", "Crunches"],
    },
    {
      id: 2,
      title: "Legs Workout",
      type: "Strength",
      description: "This is a legs workout routine that you can do at home.",
      duration: "20 minutes",
      difficulty: "Intermediate",
      exercises: ["Squats", "Lunges", "Calf raises", "Leg curls"],
    },
    {
      id: 3,
      title: "Abs Workout",
      type: "Strength",
      description: "This is an abs workout routine that you can do at home.",
      duration: "15 minutes",
      difficulty: "Advanced",
      exercises: ["Crunches", "Leg raises", "Russian twists", "Plank"],
    },
    {
      id: 4,
      title: "Cardio Workout",
      type: "Cardio",
      description: "This is a cardio workout routine that you can do at home.",
      duration: "45 minutes",
      difficulty: "Intermediate",
      exercises: [
        "Jumping jacks",
        "High knees",
        "Burpees",
        "Mountain climbers",
      ],
    },
    {
      id: 5,
      title: "Upper Body Workout",
      type: "Strength",
      description:
        "This is an upper body workout routine that you can do at home.",
      duration: "25 minutes",
      difficulty: "Beginner",
      exercises: ["Push-ups", "Pull-ups", "Bicep curls", "Shoulder press"],
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const updateRoutine = (updatedRoutine) => {
    setWorkoutRoutines((prevRoutines) =>
      prevRoutines.map((routine) =>
        routine.id === updatedRoutine.id ? updatedRoutine : routine
      )
    );
  };

  const addRoutine = (newRoutine) => {
    setWorkoutRoutines((prevRoutines) => [...prevRoutines, newRoutine]);
  };

  const removeRoutine = (id) => {
    setWorkoutRoutines((prevRoutines) =>
      prevRoutines.filter((routine) => routine.id !== id)
    );
  };

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
      position="relative"
      overflowY="auto"
    >
      <Navbar />
      <Box mt={32} mb={8} w="90%" textAlign="right">
        <Button
          color={"black"}
          backgroundColor={"rgb(127, 246, 114)"}
          _hover={{ opacity: 0.8 }}
          _active={{ opacity: 0.6 }}
          onClick={() => setIsAddModalOpen(true)}
        >
          + Add workout Routine
        </Button>
        {isAddModalOpen && (
          <RoutineAdd
            workoutRoutines={workoutRoutines}
            addRoutine={addRoutine}
            onClose={() => setIsAddModalOpen(false)} // Funcție pentru a închide modalul
          />
        )}
      </Box>
      <Box
        w="90%"
        border="2px solid rgba(0, 0, 0, 0.5)"
        color={"white"}
        p={4}
        borderRadius="md"
        bg="rgba(0, 0, 0, 0.5)"
        mb={16}
      >
        <Stack direction="row" spacing={4} wrap="wrap" justify="center">
          {Array.isArray(workoutRoutines) && workoutRoutines.length > 0 ? (
            workoutRoutines.map((routine) => (
              <RoutineCard
                key={routine.id}
                routine={routine}
                updateRoutine={updateRoutine}
                removeRoutine={removeRoutine}
              />
            ))
          ) : (
            <Text fontFamily={"second"} fontSize={"2xl"} textAlign={"center"}>
              You don't have any routines registred. Create one now!{" "}
            </Text>
          )}
        </Stack>
      </Box>
      <Box w="100%" textAlign="center" mt="auto">
        <Footer />
      </Box>
    </Box>
  );
}

export default Routines;
