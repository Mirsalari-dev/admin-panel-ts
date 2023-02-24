import React, { useRef,useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import LangContext from "../../context/langContext";

function Editors() {
  const editorRef = useRef(null);

 const {lang} = useContext(LangContext)

  return (
    <>
      <Editor
        apiKey="ep6m85zpj6qdbmi2jvqu5b202lazgnnexm42y0g3ehw8t42b"
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 400,
          language:`${lang ==="en" ? "en":"fa"}`, 
          directionality: `${lang ==="en" ? "ltr":"rtl"}`,
          branding: false,
        }}
      />
    </>
  );
}

export default Editors;
