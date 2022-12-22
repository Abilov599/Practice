import React, { useState } from "react";
import { uid } from "uid";
import "./index.scss";
import { arr } from "../../assets/data/data.js";
const Table = () => {
  //   const inputElement = useRef();
  //   const focusInput = () => {
  //       inputElement.current.focus();
  //     };
  const [myArr, setMyArr] = useState(arr);

  /////Edit Status/////

  const [formStatus, setFormStatus] = useState(false);

  // const [nameStatus, setNameStatus] = useState("");
  // const [emailStatus, setEmailStatus] = useState("");

  const [editBtnId, setEditBtnId] = useState("");

  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");

  const handleEdit = (e) => {
    setFormStatus(true);
    // setNameStatus();
    setEditBtnId(e.target.parentNode.parentNode.children[0].innerText);
    setInputNameValue(e.target.parentNode.parentNode.children[1].innerText);
    setInputEmailValue(e.target.parentNode.parentNode.children[2].innerText);
  };

  //   const handleDelete = (e) => {
  //     console.log(e.target.current);
  //     // let deleteTr = myArr.filter(
  //     //   (el) => el.id !== e.target.parentNode.children[0].innerText
  //     // );
  //     // setTodos(deleteTr);
  //   };

  return (
    <div style={{ display: "flex" }}>
      {/* <input ref={inputElement} placeholder="type here ..." type="text" />
      <button onClick={focusInput}>Click me</button> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Add to Local Storage</th>
          </tr>
        </thead>
        <tbody>
          {myArr.map((elem) => {
            return (
              <tr key={uid()}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>
                  <button onClick={(e) => handleEdit(e)}>Edit</button>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      let deleted = myArr.filter(
                        (el) =>
                          el.id !=
                          e.target.parentNode.parentNode.children[0].innerText
                      );
                      setMyArr(deleted);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button>Add</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {formStatus && (
        <div style={{ marginLeft: "20px" }}>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              setFormStatus(false);
              myArr.find((el) => el.id == editBtnId).name = inputNameValue;
              myArr.find((el) => el.id == editBtnId).email = inputEmailValue;
              setMyArr([...myArr]);
              setInputNameValue("");
              setInputEmailValue("");
            }}
          >
            <label htmlFor="">Name:</label>
            <input
              value={inputNameValue}
              onChange={(e) => setInputNameValue(e.target.value)}
              type="text"
            />
            <label htmlFor="">Email:</label>
            <input
              value={inputEmailValue}
              onChange={(e) => setInputEmailValue(e.target.value)}
              type="text"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Table;
