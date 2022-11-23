import {memo, useEffect, useState} from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/todos"

// Datastructure from API
type Todo = {
    userId: number
    id: number
    title: string
    completed: false
}

const TodoList = () => {
    // use generic to tell TS what type of data is expected in the array
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            // TODO: do data validation here for production code!
            .then((data) => setTodos(data));
    }, [])

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {/* the missing onChange handler will result in an error in the console here - read it to learn more */}
                    <input type='checkbox' checked={todo.completed}/> {todo.title}
                </li>
            ))}
        </ul>
    )
}

export default memo(TodoList)