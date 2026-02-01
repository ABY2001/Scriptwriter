import { Editor } from "@tiptap/react";
import "../../styles/layout.css";
interface Props {
    editor: Editor | null;
}

function EditorToolbar({ editor }: Props) {
    if (!editor) return null;

    return (
        <div className="toolbar">
            <button onClick={() => editor.chain().focus().toggleBold().run()}>
                Bold
            </button>

            <button onClick={() => editor.chain().focus().toggleItalic().run()}>
                Italic
            </button>

            <button onClick={() => editor.chain().focus().undo().run()}>
                Undo
            </button>

            <button onClick={() => editor.chain().focus().redo().run()}>
                Redo
            </button>

            <button
                onClick={() =>
                    editor.chain().focus().setParagraph().run()
                }
            >
                Action
            </button>

            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
            >
                Scene
            </button>
            <button onClick={() => editor.chain().focus().setParagraph().run()}>
                Action
            </button>

            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
            >
                Scene
            </button>

            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
            >
                Character
            </button>

            <button
                onClick={() =>
                    editor.chain().focus().setParagraph().run()
                }
            >
                Dialogue
            </button>
        </div>
    );
}

export default EditorToolbar;
