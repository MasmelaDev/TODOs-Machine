import * as ReactDOM from 'react-dom'; 
import "./Modal.css"
function Modal({children}){
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById("modal"))
}
export {Modal} 

// const mondal = ReactDOM.createPortal(document.getElementById("modal"))
// mondal.render(
//     <App/>
// )