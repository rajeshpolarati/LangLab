/* eslint-disable react/prop-types */
import { Box, Button, HStack, Icon, useToast } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { LanguageContext } from "./LanguageContext";
import { useContext, useEffect, useState } from "react";
import { CopyIcon, DownloadIcon } from "@chakra-ui/icons";
import { FILE_EXTENSIONS } from "../../constants";
const LanguageSelector = ({
  handleLanguageChange,
  selectedLanguage,
  setVersion,
  selectedVersion,
  versionList,
  setVersionList,
  value,
}) => {
  const toast = useToast();
  const [languageList, setLanguageList] = useState([]);
  const { languages } = useContext(LanguageContext);
  useEffect(() => {
    if (Object.keys(languages)?.length > 0) {
      setLanguageList(Object.keys(languages));
    }
  }, [languages]);

  useEffect(() => {
    if (languages && selectedLanguage) {
      setVersionList(languages[selectedLanguage]);
    }
  }, [selectedLanguage, languages, setVersionList]);

  
  const handleDownload = () => {
    const blob = new Blob([value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    let ext = FILE_EXTENSIONS[selectedLanguage] || '.txt';
    a.download = `download${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "File downloaded",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <HStack spacing={4}>
        <Box ml={2} mb={4}>
          <Text mb={2} fontSize={"lg"}>
            Language:{" "}
          </Text>
          <Menu isLazy>
            <MenuButton
              as={Button}
              color={"white"}
              bg={"#343434"}
              _hover={{
                color: "white",
                bg: "#343434",
              }}
              minW={100}
            >
              {selectedLanguage}
            </MenuButton>
            <MenuList
              bg={"#110c1b"}
              borderColor={"#343434"}
              maxHeight={"30vh"}
              overflowY={"scroll"}
            >
              {languageList.map((language) => (
                <MenuItem
                  key={language}
                  onClick={() => {
                    handleLanguageChange(language);
                  }}
                  color={language === selectedLanguage ? "blue.400" : ""}
                  bg={
                    language === selectedLanguage ? "gray.900" : "transparent"
                  }
                  _hover={{
                    color: "blue.400",
                    bg: "gray.900",
                  }}
                >
                  {language} &nbsp;
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <Box ml={4} mb={4}>
          <Text mb={2} fontSize={"lg"}>
            Version:{" "}
          </Text>
          <Menu isLazy>
            <MenuButton
              as={Button}
              color={"white"}
              bg={"#343434"}
              _hover={{
                color: "white",
                bg: "#343434",
              }}
              minW={100}
            >
              {selectedVersion}
            </MenuButton>
            <MenuList
              bg={"#110c1b"}
              borderColor={"#343434"}
              maxHeight={"30vh"}
              overflowY={"scroll"}
            >
              {versionList?.map((version) => (
                <MenuItem
                  key={version}
                  onClick={() => {
                    setVersion(version);
                  }}
                  color={version === selectedVersion ? "blue.400" : ""}
                  bg={version === selectedVersion ? "gray.900" : "transparent"}
                  _hover={{
                    color: "blue.400",
                    bg: "gray.900",
                  }}
                >
                  {version} &nbsp;
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <Box ml={4} mb={0} mt={5}>
        <Icon as={CopyIcon} onClick={
            ()=>{
                navigator.clipboard.writeText(value);
                toast({
                    title: "Copied text to clipboard",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                    position: "top-right",
                  });
              }
        } boxSize={6} cursor={"pointer"}/>
        </Box>
        <Box ml={4} mb={0} mt={5}>
        <Icon as={DownloadIcon} onClick={handleDownload} boxSize={6} cursor={"pointer"}/>
        </Box>
      </HStack>
    </>
  );
};

export default LanguageSelector;
