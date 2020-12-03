import React, { useState } from "react";
import { connect } from "react-redux";

import { addTask } from "../Actions/action";

import "./NewNote.css";

function NewNote(props) {
  const [newtodo, setNewtodo] = useState("");

  const addNewItem = () => {
    if (newtodo === "") {
      alert("You should save a valid note!")
    } else {
      props.addTask({
        id: Date.now(),
        text: newtodo,
        isCompleted: false,
        isEditable: false,
        favorite: false
      });
      setNewtodo("");
    }
  };

  return (
    <div className="todo-header">
      <h1>Notes Service !</h1>
      <h3>Add New Note</h3>
      <input
        type="text"
        placeholder="Enter new Note"
        className="new-task"
        value={newtodo}
        onChange={(event) => setNewtodo(event.target.value)}
      />
      <button className="add-button" onClick={() => addNewItem()}>
        Add
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (payload) => dispatch(addTask(payload)),
  };
};

export default connect(null, mapDispatchToProps)(NewNote);