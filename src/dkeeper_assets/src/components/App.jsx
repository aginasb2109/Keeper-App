import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {dkeeper} from "../../../declarations/dkeeper";

function App() {
  const [note, setNote] = useState([]);
  function AddNote(noteItem) {
    setNote((prevNote) => {
      dkeeper.createNote(noteItem.title,noteItem.content)
      return [noteItem,...prevNote];
    });
  }
  useEffect(()=>{
    console.log("useEffect is triggered");
    fetchData();
  },[]);

  async function fetchData(){
    const NotesArray=await dkeeper.readNotes();
    setNote(NotesArray);
  }
  function deleteNotes(id) {
    dkeeper.removeNote(id);
    setNote(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addnote={AddNote} />
      {note.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          deleteNote={deleteNotes}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
