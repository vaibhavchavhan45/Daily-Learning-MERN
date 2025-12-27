import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListAtom } from "../Atoms/todoAtom";

function TodoCreater() {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListAtom)

    function addAtom(){
      const text = inputValue.trim()
      if(!text) return //don't add empty todo

      setTodoList((oldList) => {
        return [...oldList, {id : oldList.length +1, title : text, isCompleted : false}]
      })

      setInputValue('')
    }

    const onEnter = (e) => {
      if (e.key === 'Enter') addAtom()
    }

  return (
    <div>
      <input
        type="text"
        placeholder="Add a todo"
        style={{ padding: "8px", width: "20%", paddingRight: "7px" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onEnter}
      />
      <button onClick={addAtom} style={{ padding: "8px 12px" }}>Add a todo</button>
    </div>
  );
}
export default TodoCreater;
