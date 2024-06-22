import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Query from "./components/Query";
import DisplayTokens from "./components/DisplayTokens";

function App() {
  return (
    <Box
      w={{ base: "100%", "2xl": "80%" }}
      mx={{ "2xl": "auto" }}
      color="purple.100"
    >
      <Header />
      <Query />
      <DisplayTokens />
    </Box>
  );
}

export default App;
