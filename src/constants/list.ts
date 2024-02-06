export type TodoSlice = {
    list: List[];
    loading: boolean,
    error: string | null,
}

export type List = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}