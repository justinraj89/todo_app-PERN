import SearchInput from "./components/SearchInput/SearchInput";
import Header from "./components/Header/Header";
import TodosList from "./components/TodosList/TodosList"
import { useState } from "react";
//=======================================

function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="container mx-auto">
      <Header/>
      <SearchInput todos={todos} setTodos={setTodos}/>
      <TodosList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
