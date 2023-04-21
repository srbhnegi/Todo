import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [activity, setActivity] = useState("");
  const setActivityes = (event) => {
    setActivity(event.target.value);
  };
  const [listData, setListData] = useState([]);
  const addActivity = () => {
    setListData([...listData, activity]);
    setActivity("");
  };
  const removeActivity = (i) => {
    const updateData = listData.filter((data, id) => {
      return i !== id;
    });
    setListData(updateData);
  };
  const removeAllActivities = () => {
    setListData([]);
  };
  return (
    <>
      <div className="container">
        <h1 className="header">Todo List</h1>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={setActivityes}
        />
        <button className="add" onClick={addActivity}>
          Add
        </button>
        {listData !== [] &&
          listData.map((data, id) => {
            return (
              <div key={id} className="activity">
                <h2 className="item">{data}</h2>
                <button onClick={() => removeActivity(id)} className="remove">
                  Remove
                </button>
              </div>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAllActivities} className="removeAll">
            Remove All
          </button>
        )}
      </div>
    </>
  );
};
export default Todo;
