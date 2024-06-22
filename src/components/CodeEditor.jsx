import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useState, useRef, useContext } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, LANGUAGES } from "../../constants";
import CodeOutput from "./CodeOutput";
import { LanguageContext } from "./LanguageContext";


const CodeEditor = () => {
  const [value, setValue] = useState(CODE_SNIPPETS.javascript);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedVersion, setVersion] = useState(LANGUAGES.javascript[0]);
  const { languages } = useContext(LanguageContext);
  const [versionList, setVersionList] = useState(LANGUAGES.javascript);

  const editorRef = useRef();
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    if(language && languages[language]){
        setVersionList(languages[language])
        setVersion(languages[language][0]);
    }
    setValue(CODE_SNIPPETS[language]);
  };
  return (
    <Box>
      <HStack spacing={4}>
        <Box width={"50%"}>
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            handleLanguageChange={handleLanguageChange}
            selectedVersion={selectedVersion}
            setVersion={setVersion}
            versionList= {versionList || []}
            setVersionList={setVersionList}
            value={value}
          />
          <Editor
            height="75vh"
            theme="vs-dark"
            language={selectedLanguage}
            defaultValue={CODE_SNIPPETS[selectedLanguage]}
            value={value}
            onChange={(value) => setValue(value)}
            onMount={onMount}
          />
        </Box>
        <Box width={"50%"}>
          <CodeOutput editorRef={editorRef} language={selectedLanguage} selectedVersion={selectedVersion}/>
        </Box>
        
      </HStack>
    </Box>
  );
};

export default CodeEditor;
