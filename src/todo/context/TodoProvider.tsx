import { useReducer } from 'react'
import { TodoState } from '../interfaces/interfaces'
import { TodoContext } from './TodoContext'
import { todoReducer } from './todoReducer'

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Aprender TypeScript',
            completed: false
        },
        {
            id: '2',
            desc: 'Aprender Next.Js',
            completed: false
        },
    ],
    completed: 0,
    pending: 2,
}

// Establecer como luciran las props del provider
// se definen dos porque puede o no resivir un arreglo de elementos
// ejemplo: div>header+main>ul>li+li+lo
// ejemplo[]: herader+main>ul>li+li+li
interface todoProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: todoProviderProps) => {

    const [ todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE);

    const toggleTodo = ( id: string ) => {
        dispatch({ type: 'toggleTodo', payload: { id } });
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}
