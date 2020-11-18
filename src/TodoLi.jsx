import React, {useState} from 'react'

function Todo(props){

    return(
        <div className="to-do-li">
            <li style={{textDecoration: props.todo.isCompleted ? 'line-through': ''}} >
                {props.text}
            </li>
            <button
                onClick={ () => props.completeTodo(props.index)}
                className={props.todo.isCompleted ? 'completed': 'notCompleted'}
            ></button>
            <button onClick={ () => props.deleteTodo(props.index)}>Supprimer</button>
        </div>
    )
}
export default Todo;