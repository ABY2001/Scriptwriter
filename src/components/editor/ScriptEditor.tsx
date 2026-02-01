import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "../../styles/layout.css";
// import Document from '@tiptap/extension-document'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'
import "../../styles/layout.css";
import EditorToolbar from "./EditorToolbar";
import AutoFormat from "./autoFormat.tsx";

function ScriptEditor() {
    const editor = useEditor({
        extensions: [StarterKit,AutoFormat],
        content: "<p></p>",
        autofocus: true,
        editable: true,
    });

    return (
        <div className="editor-wrapper">
            <EditorToolbar editor={editor} />
            <div className="editor-document">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}

export default ScriptEditor;
