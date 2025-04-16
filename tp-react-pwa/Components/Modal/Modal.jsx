import Button from '../Button/Button'
import Styles from "./Modal.module.css"

const Modal = ({isOpen, onClose, children}) =>{
    
    let valReturn
    if (!isOpen){
        valReturn = null
    }else{
        valReturn = (
            <div className={Styles.modalContainer}>
                <div className={Styles.buttonClose}>
                    <Button name={"Cerrar"} onclick={() =>{
                        console.log("cerrado")
                        onClose()
                    }}/>
                </div>
                
                <div className={Styles.modalContent}>
                    {children}  
                </div>
            </div>
        )
        
    }   

    return valReturn
}

export default Modal