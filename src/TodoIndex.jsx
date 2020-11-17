import React, {useState, Fragment} from 'react'
import Todo from "./TodoLi";
import TodoForm from "./TodoForm";


export default function TodoIndex(){
    const [todos, setTodos] = useState([
        {
            text :'manger 5 fruits et légumes',
            isCompleted:false,
        },
        {
            text :'sports',
            isCompleted:false,
        }
    ]);
    return(
        <Fragment>
            <h1 aria-level="1" role="heading">
                To Do
            </h1>
            <section>
                <h2 aria-level="2" role="heading">
                    Ma liste
                </h2>
                <ul>
                    {
                        todos.map((todo, index) => (
                            <Todo key={index} text={todo.text} index={index} />
                        ))
                    }
                </ul>

                <TodoForm todoList={todos} todoAdd={setTodos}/>
            </section>
        </Fragment>
    )

}