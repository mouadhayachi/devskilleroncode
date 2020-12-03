import React from "react";

import NoteList from "./Components/NoteList";
import NewNote from "./Components/NewNote";

function App() {
  return (
    <div>
      <NewNote />
      <NoteList />
    </div>
  );
}

export default App;