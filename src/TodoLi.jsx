import React, {useState} from 'react'

function Todo(props){

    return(
        <div className="to-do-li">
            <li style={{textDecoration: props.todo.isCompleted ? 'line-through': ''}} >
                {props.text}
            </li>
            <button onClick={ () => props.completeTodo(props.index)}>Terminé</button>
            <button onClick={ () => props.deleteTodo(props.index)}>Supprimé</button>
        </div>
    )
}
export default Todo;