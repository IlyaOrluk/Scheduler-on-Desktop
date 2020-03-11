import todoFormReducer from './todo-form'
import { handleTodo } from '../actions'

test('first test reducer', () => {
    let action = handleTodo('h')
    let state = ''
    let newState = todoFormReducer(state, action)

    expect(newState.title.length).toBe(1)
    expect(newState.title).toEqual("h")
})
