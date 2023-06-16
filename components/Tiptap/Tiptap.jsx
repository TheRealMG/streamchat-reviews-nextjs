import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

import EditorMenu from "./EditorMenu/EditorMenu";
import EditorFooter from "./EditorFooter/EditorFooter";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({
        placeholder: "Write your review here...",
      }),
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        validate: href => /^https?:\/\//.test(href),
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"]
      }),
      CharacterCount,
    ],
    content: `<h1>Write your review here...</h1>
    <h2>What did you like about the game?</h2>
    <h2>What didn't you like about the game?</h2>
    <h3>Would you recommend this game to others?</h3>
    <h3>How would you rate this game?</h3>
    <h3>How many hours did you play this game?</h3>
    <h4>What is your overall opinion of this game?</h4>`,
    editorProps: {
      attributes: {
        class: "prose focus:outline-none text-black",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="editor rounded-lg bg-white w-full divide-y-2 shadow-md">
      <EditorMenu
        editor={editor}
        className="editor_header text-black p-2 font-bold shadow-lg flex items-center divide-x divide-slate-500"
      />
      <EditorContent
        editor={editor}
        className="editor_content overflow-y-scroll p-2 h-96"
      />
      <EditorFooter
        editor={editor}
        className="editor_footer text-black p-2 space-x-2 font-bold"
      />
    </div>
  );
};

export default Tiptap;
