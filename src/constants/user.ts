export type User = {
    userName: string,
    password: string
}

export type LoginSlice = {
    user: User,
    isAuthenticated: boolean
}