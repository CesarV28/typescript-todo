import { useTodos } from "../hooks/useTodos"

export const TodoHeader = () => {

    const { pendingTodos } = useTodos();

    return (
        <header className="text-center">
            <h1>TODO APP</h1>
            <span>Pendding todos: { pendingTodos.length }</span>
        </header>
    )
}
