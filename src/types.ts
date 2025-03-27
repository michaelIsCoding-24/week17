export type Task = {
    id: number
    text: string
    tracked: boolean
  }

export type BarProps = {
    addTask: (task: string, tracking: boolean) => void
    taskText: string
    taskTracked: boolean
    setTaskText: (newText: string) => void
    setTaskTracked: (newValue: boolean) => void
}

export type ItemProps = {
    item: {
        id: number, 
        text: string, 
        tracked: boolean},
    deleteTask: (id: number) => void
    updateTrackStatus: (id: number) => void
}

export type ListProps = {
    data: Array<{id: number, text: string, tracked: boolean}>
    loading: boolean
    error: null | string,
    deleteTask: (id: number) => void
    updateTrackStatus: (id: number, task: Task) => void
  }