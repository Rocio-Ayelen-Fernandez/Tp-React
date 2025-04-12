

const Modal = (isOpen, onClose) =>{
    let valReturn
    if (!isOpen){
        valReturn = null
    }else{
        valReturn = <div>Hola</div>
    }   

    return valReturn
}

export default Modal