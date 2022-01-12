import React, { FC, useState } from "react";

type AddTodoProps = {
    onNewTodo: (todoName: string) => void
}

const AddTodo: FC<AddTodoProps> = ({ onNewTodo }) => {

    const [todoName, setTodoName] = useState('')

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            onNewTodo(todoName)
            setTodoName('')
        }}>
            <input
                name="todoName" 
                type="text"
                value={todoName}
                onChange={event => setTodoName(event.target.value)}
            />
            <button> + </button>
        </form>

    );
}

export default AddTodo
