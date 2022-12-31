import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

  const { todos } = useTodos();

  return (
    <ul className='d-flex justify-content-center flex-column pt-4'>
        {todos.map( todo => <TodoItem key={todo.id} todo={todo}/>)}
    </ul>
  )
}
