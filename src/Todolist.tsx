import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') addTaskHandler()
    }

    const allChangeFilter = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    }

    const removeTaskHandler = (tID: string) => {
        props.removeTask(tID)
    }

    const mapTask = props.tasks.map(t => <li key={t.id}>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={() => {
            removeTaskHandler(t.id)
        }}>x
        </button>
    </li>)

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {mapTask}
        </ul>
        <div>
            <button onClick={() => allChangeFilter('all')}>All</button>
            <button onClick={() => allChangeFilter('active')}>Active</button>
            <button onClick={() => allChangeFilter('completed')}>Completed</button>
        </div>
    </div>
}
