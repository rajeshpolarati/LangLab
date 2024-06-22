/* eslint-disable react/prop-types */
// src/LanguageContext.js
import { createContext, useState, useEffect } from 'react';
import { fetchLanguages } from '../api';
import { useToast } from '@chakra-ui/react';
import { LANGUAGES, MONACOSUPPORTEDLANGUAGES } from '../../constants';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [languages, setLanguages] = useState([]);
    const toast = useToast();
    useEffect(() => {
        const getLanguageData = async () => {
            try {
                const res = await fetchLanguages();
                let out = res.reduce((result, currentValue) => {
                    const groupKey = currentValue['language'];
                    if (!result[groupKey]) {
                      result[groupKey] = [];
                    }
                    result[groupKey].push(currentValue?.version || '');
                    return result;
                  }, {});
                
                let lang = {}
                for (let language in out){
                    if(MONACOSUPPORTEDLANGUAGES.includes(language)){
                        lang[language] = out[language]
                    }
                }
                if(Object.keys(lang).length){
                    setLanguages(lang)
                }else{
                    setLanguages(LANGUAGES);
                }
              } catch (error) {
                setLanguages(LANGUAGES)
                console.error(error);
                toast({
                  title: "An error occurred",
                  description: error.message || "Unable to execute the code",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              }
        }
        getLanguageData();
    }, []);

    return (
        <LanguageContext.Provider value={{ languages }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
