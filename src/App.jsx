import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import LanguageProvider from "./components/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <Box minH="100vh" bg="#0f0a19" color="gray" px={6} py={8}>
          <CodeEditor />
        </Box>
      </LanguageProvider>
    </>
  );
}

export default App;
