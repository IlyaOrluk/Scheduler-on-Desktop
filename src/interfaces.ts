export interface ITodo {
    id: number
    title: string
    complete: boolean
}

export interface ITodoList {
	todos: ITodo[]
}