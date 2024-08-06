import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {
    const notesInitial = [
            {
              "_id": "66ad046e428265baa27fcce8",
              "user": "66ace2ad014d1c2e785e8963",
              "title": "vivek kumar",
              "description": " earl djfhsadfjsdfy to you in morning",
              "tag": "sjkshadiuhgd4564",
              "date": "2024-08-02T16:08:14.339Z",
              "__v": 0
            },
            {
              "_id": "66b0bdebb9f4fc8d810892a6",
              "user": "66ace2ad014d1c2e785e8963",
              "title": "vivek kumar",
              "description": " earl djfhsadfjsdfy to you in morning",
              "tag": "sjkshadiuhgd4564",
              "date": "2024-08-05T11:56:27.268Z",
              "__v": 0
            },
            {
              "_id": "66ad046e428265baa27fcce8",
              "user": "66ace2ad014d1c2e785e8963",
              "title": "vivek kumar",
              "description": " earl djfhsadfjsdfy to you in morning",
              "tag": "sjkshadiuhgd4564",
              "date": "2024-08-02T16:08:14.339Z",
              "__v": 0
            },
            {
              "_id": "66b0bdebb9f4fc8d810892a6",
              "user": "66ace2ad014d1c2e785e8963",
              "title": "vivek kumar",
              "description": " earl djfhsadfjsdfy to you in morning",
              "tag": "sjkshadiuhgd4564",
              "date": "2024-08-05T11:56:27.268Z",
              "__v": 0
            },
            {
              "_id": "66ad046e428265baa27fcce8",
              "user": "66ace2ad014d1c2e785e8963",
              "title": "vivek kumar",
              "description": " earl djfhsadfjsdfy to you in morning",
              "tag": "sjkshadiuhgd4564",
              "date": "2024-08-02T16:08:14.339Z",
              "__v": 0
            },
            {
              "_id": "66b0bdebb9f4fc8d810892a6",
              "user": "66ace2ad014d1c2e785e8963",
              "title": "vivek kumar",
              "description": " earl djfhsadfjsdfy to you in morning",
              "tag": "sjkshadiuhgd4564",
              "date": "2024-08-05T11:56:27.268Z",
              "__v": 0
            }
          ]
          const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;