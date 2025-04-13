import Button from '../Button/Button'

const Modal = ({isOpen, onClose, children}) =>{
    
    let valReturn
    if (!isOpen){
        valReturn = null
    }else{
        valReturn = (
            <div>
                <Button name={"Cerrar"} onclick={() =>{
                    console.log("cerrado")
                    onClose()
                }}/>
                {children}
            </div>
        )
        
    }   

    return valReturn
}

export default Modal