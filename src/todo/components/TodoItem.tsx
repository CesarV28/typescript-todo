import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces"

interface TodoItemsProps {
    todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemsProps) => {

    // const { toggleTodo } = useContext(TodoContext);

    const { toggleTodo } = useTodos();

    const handleDbClick = () => {
        toggleTodo( todo.id );
    }

    return (
        <li 
            className={`p-2 ${ todo.completed && 'completed' }`}
            role='button'
            onDoubleClick={ handleDbClick }
        >
            {todo.desc}
        </li>
    )
}
