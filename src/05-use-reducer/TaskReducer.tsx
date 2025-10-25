import * as z from 'zod/v4'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TaskState {
  todos: Todo[]
  length: number
  completedCount: number
  pendingCount: number
}

export type TaskAction =
  | { type: 'ADD_TODO', payload: string }
  | { type: 'TOGGLE_TODO', payload: number }
  | { type: 'DELETE_TODO', payload: number }

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
})

const TaskStateSchema = z.object({
  todos: z.array( TodoSchema ),
  length: z.number(),
  completedCount: z.number(),
  pendingCount: z.number(),
})

export const getTasksInitialState = (): TaskState => {

  const localStorageState = localStorage.getItem( 'tasks-state' )
  if ( !localStorageState ) {
    return {
      todos: [],
      length: 0,
      completedCount: 0,
      pendingCount: 0
    }
  }

  const results = TaskStateSchema.safeParse( JSON.parse( localStorageState ) )
  if ( results.error ) {
    console.error( results.error )
    return {
      todos: [],
      length: 0,
      completedCount: 0,
      pendingCount: 0
    }
  }
  return results.data
}


export const taskReducer = ( state: TaskState, action: TaskAction ): TaskState => {

  switch ( action.type ) {
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false
      }

      const newStateAdd = {
        ...state,
        todos: [ ...state.todos, newTodo ],
        length: state.length + 1,
        pendingCount: state.pendingCount + 1
      }
      return newStateAdd

    case 'TOGGLE_TODO':

      const updatedTodos = state.todos.map( ( todo ) => {
        if ( todo.id === action.payload ) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
      const newStateToggle = {
        ...state,
        todos: updatedTodos,
        completedCount: updatedTodos.filter( ( todo ) => todo.completed ).length,
        pendingCount: updatedTodos.filter( ( todo ) => !todo.completed ).length,
      }
      return newStateToggle


    case 'DELETE_TODO':
      const currentTodos = state.todos.filter( ( todo ) => todo.id !== action.payload )

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completedCount: currentTodos.filter( ( todo ) => todo.completed ).length,
        pendingCount: currentTodos.filter( ( todo ) => !todo.completed ).length,
      }

    default:
      return state
  }

}
