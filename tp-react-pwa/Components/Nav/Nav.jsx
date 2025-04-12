import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import { useState } from 'react'

const Nav = ()=>{

    const [showModal, setShowModal] = useState(false)

    return(
        <div>
            <button onClick={() => setShowModal(true)}>Agregar pelicula</button>
            
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}/>
        </div>
    )
}
export default Nav