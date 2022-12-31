import { TodoHeader } from "./components/TodoHeader"
import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"

export const Todo = () => {
  return (
    <TodoProvider>
        <TodoHeader/>
        <main>
            <TodoList/>
        </main>
    </TodoProvider>
  )
}
