import React from "react";

const EditorFooter = ({ editor, className }) => {
  return (
    <div className={`${className}`}>
      <div className="character-count">
        {/* {editor ? `${editor.storage.characterCount.words()} words` : "0 words"} */}
        {editor.storage.characterCount.words()} words
      </div>
    </div>
  );
};

export default EditorFooter;
