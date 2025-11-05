import { useState } from "react";

function Header({ onAddTodo }) {
  const [newTodoText, setNewTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = newTodoText.trim();
    if (text) {
      onAddTodo(text);
      setNewTodoText("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
