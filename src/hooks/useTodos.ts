import { useEffect, useMemo, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos"

// Datastructure from API
type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

const useTodos = () => {
    // use generic to tell TS what type of data is expected in the array
    const [todos, setTodos] = useState<Todo[]>([])
    const [filter, setFilter] = useState('')
    const [hideCompleted, setHideCompleted] = useState(false)
    
    useEffect(() => {
        console.log('fechting todos')
        fetch(API_URL)
        .then((response) => response.json())
        // TODO: do data validation here for production code! Example JSON validation lib: ajv
        .then((data) => setTodos(data));
    }, [])

    const toggleTodo = (todoId: Todo['id']) => {
        console.log('toggle todo')
        setTodos(todos => todos.map(todo => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            } else {
                return todo
            }
        }))
    }

    const filteredTodosByText = useMemo(() => {
        console.log('filter todos by text')

        if (filter !== '') {
            return todos.filter(todo => todo.title.includes(filter))
        } else {
            return todos
        }
        // only re-evaluates "filteredTodosByText" if todos or filter changes
    }, [todos, filter])

    // without memoization -> re-calculates every time the hook is re-evaluated
    console.log('filter todos by "completed" status')
    const filteredTodosByTextAndChecked = hideCompleted 
        ? filteredTodosByText.filter(todo => !todo.completed) 
        : filteredTodosByText

    const allCount = filteredTodosByTextAndChecked.length
    const completedCount = filteredTodosByTextAndChecked.filter(todo => todo.completed).length

    return {
        todos: filteredTodosByTextAndChecked,
        completedCount,
        allCount,
        toggleTodo,
        filter,
        setFilter,
        hideCompleted,
        setHideCompleted,
    }
}

export default useTodos