"use client";

import React, { useMemo, useCallback } from "react";
import {
  createEditor,
  Editor,
  Transforms,
  Descendant,
  Element as SlateElement,
} from "slate";
import { Slate, Editable, withReact } from "slate-react";

const RichTextEditor = () => {
  // const renderElement = useCallback((props) => <Element {...props} />, []);
  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "heading":
        return <h1 {...props.attributes}>{props.children}</h1>;
      case "list-item":
        return <li {...props.attributes}>{props.children}</li>;
      default:
        return <p {...props.attributes}>{props.children}</p>;
    }
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable renderElement={renderElement} className="form_input bg-white" />
    </Slate>
  );
};

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

export default RichTextEditor;
