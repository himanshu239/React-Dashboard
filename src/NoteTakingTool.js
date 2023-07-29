import React, { useState } from "react";
import './NoteTakingTool.css';

const NoteTakingTool = () => {
    // State for the note input field
    const [inputNote, setInputNote] = useState("");

    // State for storing the list of notes
    const [noteList, setNoteList] = useState([]);

    // Handler for updating the note input
    const handleNoteChange = (event) => {
        setInputNote(event.target.value);
    }

    // Function to add the current note to the note list
    const addNoteToList = () => {
        if (inputNote.trim() !== '') {
            setNoteList([...noteList, inputNote]);
            setInputNote("");
        }
    }

    // Function to clear the note input field
    const resetNoteInput = () => {
        setInputNote("");
    }

    return (
        <div className="note-taking-tool-container">
            <h1>Simple Note-taking Tool</h1>
            <textarea
                placeholder="Please enter your notes here..."
                value={inputNote}
                onChange={handleNoteChange}
            />
            <div className="note-taking-tool-buttons">
                <button onClick={addNoteToList}>Save Your Note</button>
                <button onClick={resetNoteInput}>Clear</button>
            </div>
            <ul className="note-list">
                {noteList.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    )
}

export default NoteTakingTool;
