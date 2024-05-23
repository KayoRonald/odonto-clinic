import { ChakraProvider } from "@chakra-ui/react";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import customTheme from "./theme";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
