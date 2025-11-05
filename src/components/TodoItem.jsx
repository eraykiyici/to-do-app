function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  const itemClassName = todo.completed ? "completed" : "";

  return (
    <li className={itemClassName}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <label>{todo.text}</label>
        <button
          className="destroy"
          onClick={() => onDeleteTodo(todo.id)}
        ></button>
      </div>
    </li>
  );
}

export default TodoItem;
