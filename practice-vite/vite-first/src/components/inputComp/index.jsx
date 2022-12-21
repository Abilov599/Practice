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

  //   const handleDelete = (e) => {
  //     console.log(e.target.current);
  //     // let deleteTr = myArr.filter(
  //     //   (el) => el.id !== e.target.parentNode.children[0].innerText
  //     // );
  //     // setTodos(deleteTr);
  //   };

  return (
    <div>
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
                  <button>Edit</button>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
