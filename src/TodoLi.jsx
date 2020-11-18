import React, {useState} from 'react'

function Todo(props){

    return(
        <div className="to-do-li">
            <li>
                {props.text}
            </li>
            <button onClick={ () => props.completeTodo(props.index)}>Terminé</button>
            <button >Supprimé</button>
        </div>
    )
}
export default Todo;