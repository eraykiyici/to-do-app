import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const initialTodos = [
  { id: 1, text: "Learn JavaScript", completed: true },
  { id: 2, text: "Learn React", completed: false },
  { id: 3, text: "Have a life!", completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  const activeTodoCount = todos.filter((todo) => !todo.completed).length;

  const toggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
  };

  const showMain = todos.length > 0;
  const showFooter = todos.length > 0;

  return (
    <>
      <section className="todoapp">
        <Header onAddTodo={addTodo} />

        {showMain && (
          <section className="main">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              onChange={toggleAll}
              checked={
                todos.length > 0 && todos.every((todo) => todo.completed)
              }
            />
            <label htmlFor="toggle-all">Mark all as complete</label>

            <TodoList
              todos={filteredTodos}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          </section>
        )}

        {showFooter && (
          <Footer
            activeTodoCount={activeTodoCount}
            currentFilter={filter}
            onSetFilter={setFilter}
            onClearCompleted={clearCompleted}
            showClearCompleted={todos.some((todo) => todo.completed)}
          />
        )}
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
