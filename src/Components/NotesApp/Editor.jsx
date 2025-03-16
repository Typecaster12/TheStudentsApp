import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import html2pdf from "html2pdf.js";
import "./Notes.css"; 

const Editor = () => {
    const editor = useEditor({
        extensions: [StarterKit, Highlight],
        content: "<p>Start writing your note here ✍️</p>",
    });

    const downloadAsPDF = () => {
        const element = document.querySelector(".editor");

        if (!element) return;

        html2pdf()
            .set({
                margin: 0.5,
                filename: "MyNote.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
            })
            .from(element)
            .save();
    };

    if (!editor) return null;

    return (
        <div className="notes-container">
            <h2 className="notes-heading">📝 Create Your Note</h2>

            {/* Toolbar */}
            <div className="toolbar">
                <button onClick={() => editor.chain().focus().toggleBold().run()}>
                    Bold
                </button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()}>
                    Italic
                </button>
                <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    Bullet List
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                    H1
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                    H2
                </button>
                <button onClick={() => editor.chain().focus().setParagraph().run()}>
                    Paragraph
                </button>
                <button onClick={() => editor.chain().focus().toggleHighlight().run()}>
                    Highlight
                </button>
                <button onClick={() => editor.chain().focus().undo().run()}>Undo</button>
                <button onClick={() => editor.chain().focus().redo().run()}>Redo</button>
                <button onClick={downloadAsPDF}>Download PDF</button>
            </div>

            <EditorContent editor={editor} className="editor" />
        </div>
    );
};

export default Editor;
