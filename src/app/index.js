import "tachyons"
import markdownPreviewer from './previewer/markdownPreviewer';
import './styles.css'

window.onload = function () {
    document.getElementById("editor").addEventListener(
        "submit",
        markdownPreviewer.attachPreviewer(
            document, // pass-in document
            "source", // id of the source textarea
            "preview" // id of the preview DOM element
        )
    )
};