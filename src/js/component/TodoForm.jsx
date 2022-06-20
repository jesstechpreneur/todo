import React, {useState} from 'react';
import TodoList from './todoList';

export const ToDoForm = () => {
    const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	
    return(
	<div>
		<ul>
			<li>
				<input
					key={todos.id}
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat([inputValue]));
							setInputValue("");
						}
					}}
					placeholder="No task, add a task"></input>
			</li>
			{todos.map((item, index) => (
				<li>
					{item}
					<span
						onClick={() =>
							setTodos(
								todos.filter(
									(t, currentIndex) => index != currentIndex
								)
							)
						}></span>
					<TodoList />
				</li>
			))}
		</ul>
		<div className="number">{todos.length} tasks</div>
	</div>
)};
