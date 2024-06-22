import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ErcProvider } from "./context/ercContext";
import { WagmiProvider } from "wagmi";
import { config } from "./config/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

const breakpoints = {
  base: "0px",
  sm: "320px",
  "550px": "550px",
  md: "700px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  "3xl": "1800px",
  "4xl": "2500px",
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.900",
        mb: "8",
        fontFamily: "Dosis",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "'Dosis', sans-serif",
      },
    },
  },
  breakpoints,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            modalSize="compact"
            theme={darkTheme({
              accentColor: "#805AD5",
              accentColorForeground: "#E9D8FD",
            })}
          >
            <ErcProvider>
              <App />
            </ErcProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  </React.StrictMode>
);
