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
    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    return(
        <Fragment>
            <h1 aria-level="1" role="heading">
                TO DO LIST
            </h1>
            <section>
                <h2 aria-level="2" role="heading">
                    Ma liste :
                </h2>
                <ul>
                    {
                        todos.map((todo, index) => (
                            <Todo
                                todo={todo}
                                key={index}
                                text={todo.text}
                                index={index}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                            />
                        ))
                    }
                </ul>

                <TodoForm todoList={todos} todoAdd={setTodos}/>
            </section>
        </Fragment>
    )

}