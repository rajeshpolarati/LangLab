import axios from "axios";
const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

export const executeCode = async (language, sourceCode, selectedVersion) => {
    const response = await API.post("/execute", {
      language: language,
      version: selectedVersion,
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    return response.data;
  };

  export const fetchLanguages = async () => {
    const response = await API.get("/runtimes");
    return response.data;
  };