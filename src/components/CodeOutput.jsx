/* eslint-disable react/prop-types */
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { executeCode } from "../api";

const CodeOutput = ({ editorRef, language, selectedVersion }) => {
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const toast = useToast();
  const handleRunCode = async () => {
    const code = editorRef.current.getValue();
    if (!code) return;
    try {
      setLoading(true);
      const res = await executeCode(language, code, selectedVersion);
      let out = res?.run?.output?.split("\n") || res?.run?.stderr;
      res?.run?.stderr ? setError(true) : setError(false);
      setOutput(out);
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred",
        description: error.message || "Unable to execute the code",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box>
      <Box ml={2} mb={2}>
        <Text mb={2} fontSize={"lg"}>
          Output
        </Text>
        <Button
          variant="outline"
          colorScheme="green"
          mb={2}
          onClick={handleRunCode}
          isLoading={loading}
        >
          Run Code
        </Button>
      </Box>
      <Box
        minH={"75vh"}
        width={"100%"}
        p={2}
        color={error ? "red.500" : ""}
        border={"1px solid"}
        borderRadius={4}
        borderColor={error ? "red.500" : "333"}
      >
        {output && output?.length
          ? output?.map((out, i) => <Text key={i}>{out}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default CodeOutput;
