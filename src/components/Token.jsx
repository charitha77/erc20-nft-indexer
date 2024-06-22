import { VStack } from "@chakra-ui/react";

function Token({ children }) {
  return (
    <VStack
      borderColor="purple.300"
      bgColor="gray.800"
      boxShadow="rgba(128, 90, 213, 0.3) -5px 5px, rgba(128, 90, 213, 0.2) -10px 10px, rgba(128, 90, 213, 0.1) -15px 15px, rgba(165, 102, 237, 0.05) -20px 20px"
      px={6}
      py={4}
      justifyContent="space-evenly"
      borderRadius="2xl"
      position="relative"
    >
      {children}
    </VStack>
  );
}

export default Token;
