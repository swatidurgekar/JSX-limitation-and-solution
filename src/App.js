<<<<<<< HEAD
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [addUser, setAddUser] = useState("x");
  const [arr, setArr] = useState([]);

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    let obj;
    if (name !== "" && age >= 0) {
      obj = `${name} ${age}`;
      setArr((prevArr) => [...prevArr, obj]);
      console.log(arr);
      setAddUser(true);
    } else {
      setAddUser(false);
    }
  };

  return (
    <div>
      <form>
        <label>Username</label>
        <input onChange={changeNameHandler} type="text" />
        <label>Age (Years)</label>
        <input onChange={changeAgeHandler} type="number" />
        <button onClick={clickHandler}>Add User</button>
        {addUser ? (
          <div>
            {arr.map((item) => {
              return <h2>{item}</h2>;
            })}
          </div>
        ) : (
          <div>
            {age < 0 ? <h1>age is invalid</h1> : <h1>fill all the details</h1>}
          </div>
        )}
      </form>
    </div>
=======
import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
>>>>>>> 052fcc95 (JSX limitation and solution)
  );
}

export default App;
