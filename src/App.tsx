import { ChakraProvider } from "@chakra-ui/react";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import customTheme from "./theme";
import { Footer } from "./components/footer";
import NavHero from "./components/header";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <NavHero />
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
