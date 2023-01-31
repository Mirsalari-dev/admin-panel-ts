import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import i18n from "../locale";

type langContextObj = {
  lang: string | null;
  setLang: (sLang: string) => void;
};
interface Props {
  children: React.ReactNode;
}

const LangContext = React.createContext<langContextObj>({
  lang: "",
  setLang: (slang) => { },
});

export const LangContextProvider: React.FC<Props> = (props) => {
  const [lang, setLang] = useLocalStorage("language", "fa");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  function toggleLanguage(sLang: string) {
    setLang(sLang);
  }

  const langValue: langContextObj = {
    lang,
    setLang,
  };

  return (
    <LangContext.Provider value={langValue}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContext;
