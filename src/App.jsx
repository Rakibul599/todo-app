import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [todo, setTodo] = useState([]);
  let saveTodo = (event) => {
    event.preventDefault();
    let todoname = event.target.toname.value;
    if (!todo.includes(todoname) && todoname.length != 0) {
      let finaltodo = [...todo, todoname];
      setTodo(finaltodo);
    } else {
      if (todoname.length != 0) {
        alert("allready exist");
      } else alert("input field is empty");
    }
  };

  let items = todo.map((item, i) => {
    let list = { item, todo, setTodo, index: i };
    return <TodoIem list={list} key={i} />;
  });

  return (
    <>
      <nav className="w-full bg-yellow-600 m-0 p-0 flex md:justify-center items-center">
        <h1 className="m-0 p-2 text-center font-bold text-2xl">ToDo List</h1>
      </nav>
      <div className="w-[90%] mx-auto">
        <form
          action=""
          onSubmit={saveTodo}
          className="flex flex-col justify-center items-center mb-2 md:flex-row "
        >
          <input
            type="text"
            placeholder="Add your todays task"
            name="toname"
            id=""
            className="w-[50%] m-5  border-black border-[2px] rounded-md"
          />
          <input
            type="submit"
            name="Add"
            value="Add"
            className="w-20 bg-slate-950 text-white p-1 rounded-2xl "
          />
        </form>
        <div className="w-[90%] mx-auto">
          <ul>{items}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
function TodoIem({ list }) {
  let [complete, setCompletestutus] = useState(false);
  let updateData = () => {
    let finalData = list.todo.filter((v, i) => i != list.index);
    list.setTodo(finalData);
  };
  return (
    <li
      className={`bg-black w-full mx-auto text-white text-left p-1 relative  mb-2 ${
        complete ? "line-through bg-yellow-800" : ""
      }`}
      onClick={() => setCompletestutus(!complete)}
    >
      {list.index + 1 + ". "}
      {list.item}
      <span
        className="absolute right-0 mr-5 cursor-pointer"
        onClick={updateData}
      >
        &times;
      </span>
    </li>
  );
}
