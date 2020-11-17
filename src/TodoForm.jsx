import React, {useState} from 'react'

function TodoForm(props){
    const [valueInput, setValueInput] = useState('');

    const handleSubmit = (e) =>{
        //on arrête le rechargement de la page
        e.preventDefault();

        //ajouter la valeur contenu dans la variable valueInput au state dans le composant parent
        props.todoAdd([...props.todoList, {text:valueInput}]);

    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setValueInput(e.target.value)}/>
            <input type="submit" />
        </form>
    )
}
export default TodoForm;