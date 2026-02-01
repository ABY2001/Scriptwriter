import { Extension } from "@tiptap/core";

const AutoFormat = Extension.create({
    addKeyboardShortcuts() {
        return {
            Enter: ({ editor }) => {
                const { $from } = editor.state.selection;
                const node = $from.parent;

                // Scene → Action
                if (node.type.name === "heading" && node.attrs.level === 2) {
                    editor.chain().focus().insertContent("\n").setParagraph().run();
                    return true;
                }

                // Character → Dialogue
                if (node.type.name === "heading" && node.attrs.level === 3) {
                    editor.chain().focus().insertContent("\n").setParagraph().run();
                    return true;
                }

                return false;
            },
        };
    },

    onUpdate({ editor }) {
        const { $from } = editor.state.selection;
        const node = $from.parent;

        // Scene heading → uppercase
        if (node.type.name === "heading" && node.attrs.level === 2) {
            const text = node.textContent;
            const upper = text.toUpperCase();

            if (text !== upper) {
                editor.commands.insertContentAt(
                    {
                        from: $from.start(),
                        to: $from.end(),
                    },
                    upper
                );
            }
        }

        // Character name → uppercase
        if (node.type.name === "heading" && node.attrs.level === 3) {
            const text = node.textContent;
            const upper = text.toUpperCase();

            if (text !== upper) {
                editor.commands.insertContentAt(
                    {
                        from: $from.start(),
                        to: $from.end(),
                    },
                    upper
                );
            }
        }
    },
});

export default AutoFormat;
