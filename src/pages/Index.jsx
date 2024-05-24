import React, { useState } from "react";
import { Container, VStack, Text, Button, Box, HStack, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";

const flashcards = [
  { swedish: "Hej", english: "Hello" },
  { swedish: "Tack", english: "Thank you" },
  { swedish: "Ja", english: "Yes" },
  { swedish: "Nej", english: "No" },
  { swedish: "Vän", english: "Friend" },
];

const Index = () => {
  const navigate = useNavigate();
  const { numWords } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEnglish, setShowEnglish] = useState(false);

  const selectedFlashcards = flashcards.slice(0, numWords);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedFlashcards.length);
    setShowEnglish(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + selectedFlashcards.length) % selectedFlashcards.length);
    setShowEnglish(false);
  };

  const toggleLanguage = () => {
    setShowEnglish((prevShowEnglish) => !prevShowEnglish);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" textAlign="left" mb={4}>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </Box>
      <VStack spacing={4}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%" textAlign="center">
          <Text fontSize="2xl">{showEnglish ? selectedFlashcards[currentIndex].english : selectedFlashcards[currentIndex].swedish}</Text>
        </Box>
        <HStack spacing={4}>
          <IconButton aria-label="Previous" icon={<FaArrowLeft />} onClick={handlePrev} />
          <Button onClick={toggleLanguage}>Show {showEnglish ? "Swedish" : "English"}</Button>
          <IconButton aria-label="Next" icon={<FaArrowRight />} onClick={handleNext} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
