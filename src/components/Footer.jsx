function Footer({
  activeTodoCount,
  currentFilter,
  onSetFilter,
  onClearCompleted,
  showClearCompleted,
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong>
        {activeTodoCount === 1 ? " item" : " items"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={currentFilter === "all" ? "selected" : ""}
            onClick={() => onSetFilter("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={currentFilter === "active" ? "selected" : ""}
            onClick={() => onSetFilter("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={currentFilter === "completed" ? "selected" : ""}
            onClick={() => onSetFilter("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      {showClearCompleted && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
