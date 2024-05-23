import { Box, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt={10}>
      <VStack spacing={4}>
        <Button onClick={() => navigate("/learn/5")}>Learn 5 Words</Button>
        <Button onClick={() => navigate("/learn/10")}>Learn 10 Words</Button>
        <Button onClick={() => navigate("/learn/20")}>Learn 20 Words</Button>
        <Button onClick={() => navigate("/learn/40")}>Learn 40 Words</Button>
      </VStack>
    </Box>
  );
}

export default Home;
