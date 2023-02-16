import SearchInput from "./components/SearchInput/SearchInput";
import Header from "./components/Header/Header";
import TodosList from "./components/TodosList/TodosList"

function App() {

  return (
    <div className="container mx-auto">
      <Header/>
      <SearchInput/>
      <TodosList />
    </div>
  );
}

export default App;
