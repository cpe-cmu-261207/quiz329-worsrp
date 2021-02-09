import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [task, setTask] = useState({});
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
  }, []);

  const addTask = (e) => {
    setTask([...task, name, gender, age]);
    localStorage.setItem("items", JSON.stringify(task));
  };
  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
            onChange={(e) => setName(e.currentTarget.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select ..">
            <option
              value=""
              disabled
              selected
              hidden
              onChange={(e) => setGender(e.currentTarget.value)}
              defaultValue={gender.value}
            >
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 30"
            onChange={(e) => setAge(e.currentTarget.value)}
          ></input>
        </div>

        <button className="button is-primary is-fullwidth" onClick={addTask}>
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"Bob"} gender={"Male"} age={"50"} />
        <p>Sirapop Para 620610815</p>
      </div>
    </div>
  );
}

export default App;
