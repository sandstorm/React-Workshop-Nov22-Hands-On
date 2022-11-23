import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <aside>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/todoList"}>TodoList</Link>
          <Link to={"/counter"}>Counter</Link>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
