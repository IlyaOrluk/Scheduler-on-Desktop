import todoListReducer from './todo-list'
import { 
    addTodoItem,
    todoDeleteItem,
    todoCompleteItem,
    changeTodoTitle,
    handleNewTodoTitle
     } from '../actions'

test('lenght of todos should be increment', () => {
    let action = addTodoItem(1, 'todo', false)
    let state = {
        todos: [],
        newTodoTitle: ''
    }
    let newState = todoListReducer(state, action)

    expect(newState.todos.length).toBe(1)
    expect(newState.todos).toEqual([ { id: 1, title: 'todo', complete: false } ])
})

test('lenght of todos should be deacrement', () => {
    let action = todoDeleteItem(1)
    let state = {
        todos: [{ id: 1, title: 'todo', complete: false }],
        newTodoTitle: ''
    }
    let newState = todoListReducer(state, action)

    expect(newState.todos.length).toBe(0)
    expect(newState.todos).toEqual([])
})

test('todo complete point, slould be change', () => {
    let action = todoCompleteItem(true, 1)
    let state = {
        todos: [{ id: 1, title: 'todo', complete: false }],
        newTodoTitle: ''
    }
    let newState = todoListReducer(state, action)

    expect(newState.todos.length).toBe(state.todos.length)
    expect(newState.todos).toStrictEqual([{ id: 1, title: 'todo', complete: true }])
})

test('todo title slould be change', () => {
    let action = changeTodoTitle(1, 'newTitle')
    let state = {
        todos: [{ id: 1, title: 'todo', complete: false }],
        newTodoTitle: ''
    }
    let newState = todoListReducer(state, action)

    expect(newState.todos.length).toBe(state.todos.length)
    expect(newState.todos).toStrictEqual([{ id: 1, title: 'newTitle', complete: false }])
})

test('todo title handler change to new value', () => {
    let action = handleNewTodoTitle('newTitle')
    let state = {
        todos: [{ id: 1, title: 'todo', complete: false }],
        newTodoTitle: ''
    }
    let newState = todoListReducer(state, action)

    expect(newState.newTodoTitle.length).toBe(8)
    expect(newState.newTodoTitle).toStrictEqual('newTitle')
})