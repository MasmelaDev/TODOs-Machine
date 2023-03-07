import "./TodoItem.css"

function TodoItem(props){
    
    return(
        <li className={`TodoItem ${props.completed && "active"}`}>
            <span onClick={props.onToggleComplete} 
            className={`icon iconCheck ${props.completed && "iconCheck--active"}`} ></span>
            <p className={` todoItem__text ${props.completed && "todoItem__text--active"}`}>{props.text}</p>
            <span onClick={props.onDelete} className="icon iconDelete" ></span>
        </li>
    );
}

export { TodoItem };