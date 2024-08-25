import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

    //Get all  Note
    const getNotes = async () => {
      //API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhY2UyYWQwMTRkMWMyZTc4NWU4OTYzIn0sImlhdCI6MTcyMjYwNjI1M30.iN5xEAgBTQs0oWzxb5XWmrIO8xHLTo23R2VGg9aSqj4",
        },
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
    };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //Todo: API call
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhY2UyYWQwMTRkMWMyZTc4NWU4OTYzIn0sImlhdCI6MTcyMjYwNjI1M30.iN5xEAgBTQs0oWzxb5XWmrIO8xHLTo23R2VGg9aSqj4",
      },
      body: JSON.stringify({title, description, tag}),
    });

    console.log("Adding a new note");
    const note = {
      _id: "66b0bdebb9f4rtfc8d810892a6",
      user: "66ace2ad014d1c2e785e8963",
      title: title,
      description: description,
      tag: tag,
      date: "2024-08-05T11:56:27.268Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = (id) => {
    //Todo: API call
    console.log("delete the note" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/&(id)`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhY2UyYWQwMTRkMWMyZTc4NWU4OTYzIn0sImlhdCI6MTcyMjYwNjI1M30.iN5xEAgBTQs0oWzxb5XWmrIO8xHLTo23R2VGg9aSqj4",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._is === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
