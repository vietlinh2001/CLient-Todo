import { FC } from "react";

type TodoProps = {
    name: string
    done: boolean
    onDoneChange: (done: boolean) => void
}

const Todo: FC<TodoProps> = ({ name, done, onDoneChange }) => {
    return (
        <label>
            <input 
                type="checkbox" 
                defaultChecked={done}
                onChange={(event) => {
                    onDoneChange(event.target.checked)
                }} />
            {name}
        </label>
    );
}

export default Todo
