import React, { useReducer, useState } from 'react'

const initialState = {
    user: { name: "Masha", id: 1 },
    tasks: [{ name: "task1", id: 1 }]
}
const reducerFunc = (currentState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...currentState,
                tasks: [...currentState.tasks, { name: action.payload.name, id: action.payload.id, }]
            }
    }
}


const UseReducer = () => {
    const [typedValue, setTypedValue] = useState("");
    const [taskState, taskDispatch] = useReducer(reducerFunc, initialState)
    function handleAdd() {
        taskDispatch({
            type: "ADD",
            payload: { name: typedValue, id: Date.now() }
        })
    }
    return (
        <div><h2>Task Manager</h2>
            <p>{taskState.user.name}</p>
            <input type='text' onChange={(e) => { setTypedValue(e.target.value) }} />
            <button onClick={handleAdd} >ADD</button>
            <h3>Tasks : </h3>
            <ul>{taskState.tasks.map((task) => (<li key={task.id}>{task.name}</li>))}</ul>
        </div>
    )
}

export default UseReducer