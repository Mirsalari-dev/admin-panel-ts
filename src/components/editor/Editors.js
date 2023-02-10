import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function Editors() {
  const editorRef = useRef(null);

  return (
    <>
      <Editor
        apiKey="ep6m85zpj6qdbmi2jvqu5b202lazgnnexm42y0g3ehw8t42b"
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 500,
          language: "fa",
          directionality: "rtl",
         
        }}
      />
    </>
  );
}

export default Editors;
