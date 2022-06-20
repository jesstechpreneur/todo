import React, {useState} from 'react';

export default function TodoList() {
    const [todo,setTodos] = useState([]);

    const removeTodo = id => {
        const removedArr = [...todo].filter(todo => todo.id !== id);
    };
    return(
        <div className="icons">
            <RiCloseCircleLine  emoveTodo={removeTodo} onClick={() => removeTodo(todos.id) } className="delete-icon"/>
		</div>
    );
};

