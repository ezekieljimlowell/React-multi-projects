import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoAddSection from "./Components/TodoAddSection";

function App() {
  return (
    <div className="App">
      <h1 className="mb-4">Todo application</h1>
      <TodoAddSection />
    </div>
  );
}

export default App;
