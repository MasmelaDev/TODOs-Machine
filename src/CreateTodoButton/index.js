import "./CreateTodoButton.css"
function CreateTodoButton(props){
    const onClickButton = (entry)=>{
        props.setOpenModal(prevState => !prevState);
        document.querySelector(".CreateTodoButton").classList.toggle("active")
    }
    return(
        <button onClick={onClickButton} className="CreateTodoButton" ></button>
    );
}

export { CreateTodoButton};