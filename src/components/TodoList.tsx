import React, { FC } from "react";
import { TodoData } from "../TodoData";
import Todo from "./Todo";

type TodoListProps = {
    todos: TodoData[]
    onTodoUpdated: (id: number, done: boolean) => void
}

const TodoList: FC<TodoListProps> = ({ todos, onTodoUpdated }) => {
    return (

        <ul>
            {

                todos.map(({id, done, name}) => 
                    <li key={id}>
                        <Todo 
                            onDoneChange={done => {
                                onTodoUpdated(id, done)
                            }}
                            done={done} 
                            name={name}
                        />
                    </li>
                )
            }
        </ul>
    );
}

export default TodoList
