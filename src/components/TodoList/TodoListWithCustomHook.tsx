import {ChangeEvent, memo} from "react";
import useTodos from "../../hooks/useTodos";
import './TodoList.css'

const TodoList = () => {
    const {
        todos, 
        toggleTodo, 
        filter, 
        setFilter, 
        hideCompleted, 
        setHideCompleted, 
        allCount,
        completedCount,    
    } = useTodos()

    const handleTextFilterChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setFilter(ev.target.value)
    }

    const handleCompletedFilterChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setHideCompleted(ev.target.checked)
    }

    return (
        <div>
            <label className="todo-list__filter">
                filter:
                <input 
                    value={filter} 
                    onChange={handleTextFilterChange} 
                />
            </label>
            <label className="todo-list__filter">
                <input 
                    type="checkbox" 
                    checked={hideCompleted} 
                    onChange={handleCompletedFilterChange} 
                />
                hide completed todos
            </label>
            <p>{completedCount} von {allCount} erledigt</p>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'todo todo--completed' : 'todo'}>
                        <input 
                            type='checkbox' 
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        /> 
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(TodoList)