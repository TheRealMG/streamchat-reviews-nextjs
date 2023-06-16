import React from "react";

import Image from "next/image";

const EditorMenu = ({ editor, className }) => {
  return (
    <div className={`${className}`}>
      <>
        <div className="flex items-center space-x-0.5 md:space-x-2 pr-1 md:pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className={`editor_header-button p-1`}
          >
            <Image
              src="/assets/remixicon/arrow-go-back-fill.svg"
              alt="undo"
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className={`editor_header-button p-1`}
          >
            <Image
              src="/assets/remixicon/arrow-go-forward-fill.svg"
              alt="redo"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="flex items-center space-x-0.5 md:space-x-2 pl-1 md:pl-2 pr-1 md:pr-2">
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`editor_header-button ${
              editor.isActive("heading", { level: 1 }) ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/h-1.svg"
              alt="heading 1"
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`editor_header-button ${
              editor.isActive("heading", { level: 2 }) ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/h-2.svg"
              alt="heading 2"
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={`editor_header-button ${
              editor.isActive("heading", { level: 3 }) ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/h-3.svg"
              alt="heading 3"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="flex items-center space-x-0.5 md:space-x-2 pl-1 md:pl-2 pr-1 md:pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`editor_header-button ${
              editor.isActive("bold") ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/bold.svg"
              alt="bold"
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`editor_header-button ${
              editor.isActive("italic") ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/italic.svg"
              alt="italic"
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`editor_header-button ${
              editor.isActive("underline") ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/underline.svg"
              alt="underline"
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`editor_header-button ${
              editor.isActive("strike") ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/strikethrough.svg"
              alt="strikethrough"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="flex items-center space-x-0.5 md:space-x-2 pl-1 md:pl-2 pr-1 md:pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`editor_header-button ${
              editor.isActive({ textAlign: "left" }) ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/align-left.svg"
              alt="align-left"
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`editor_header-button ${
              editor.isActive({ textAlign: "center" }) ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/align-center.svg"
              alt="align-center"
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={`editor_header-button ${
              editor.isActive({ textAlign: "right" }) ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/align-right.svg"
              alt="align-right"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="flex items-center space-x-0.5 md:space-x-2 pl-1 md:pl-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`editor_header-button ${
              editor.isActive("bulletList") ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/list-unordered.svg"
              alt="list"
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`editor_header-button ${
              editor.isActive("orderedList") ? "p-1 is-active" : "p-1"
            }`}
          >
            <Image
              src="/assets/remixicon/list-ordered.svg"
              alt="list"
              width={24}
              height={24}
            />
          </button>
        </div>
      </>
    </div>
  );
};

export default EditorMenu;
