import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Counter from './components/Counter';
import CounterWithCustomHook from './components/CounterWithCustomHook';
import TodoListWithCustomHook from './components/TodoList/TodoListWithCustomHook';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "/todoList",
        element: <TodoListWithCustomHook />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

/***
 * Example for small widgets in HTML rendered by CMS with data in HTML
 */
const Widget = (props: {count: number, step: number}) => {
  console.log(props)

  return (
    <CounterWithCustomHook initialValue={props.count} stepSize={props.step} />
  )
}

// detecte und hole counter widget
const counterWidgets = document.querySelectorAll('[data-widget-id="Counter"]')
counterWidgets.forEach(widget => {
  const widgetData = JSON.parse(widget.getAttribute('data-widget-data')!) as {count: number, step: number}

  ReactDOM.createRoot(widget).render(
    <Widget count={widgetData.count} step={widgetData.step} />
  )
})
