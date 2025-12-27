import { useRecoilState } from "recoil";
import { todoListAtom } from "../Atoms/todoAtom";
import { useState } from "react";

function ReadAndDisplayTodo() {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  function toggleCompletion(id) {
    const newTodoList = todoList.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodoList(newTodoList);
  }

  function deleteTodo(id) {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  }

  //Editing todo
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  function startEdit(id, title) {
    setEditingId(id);
    setNewTitle(title);
  }

  function saveEdit(id) {
    const newTodoList = todoList.map((item) =>
      item.id === id ? { ...item, title: newTitle } : item
    );
    setTodoList(newTodoList);
    setEditingId(null);
    setNewTitle("");
  }

  return (
    <div>
      {todoList.length == 0 ? (
        <p>No todos added yet</p>
      ) : (
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => toggleCompletion(item.id)}
              />
              {/*Editing*/}
              {editingId == item.id ? (
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(item.id)}
                />
              ) : (
                <span
                  onDoubleClick={() => startEdit(item.id, item.title)}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                >
                  {item.title} {item.isCompleted ? "(completed)" : ""}
                </span>
              )}

              {/*Logic for deleting the todos*/}
              <button
                onClick={() => deleteTodo(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ReadAndDisplayTodo;
