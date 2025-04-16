import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import { useState } from 'react'

const Nav = ({actions, buttons})=>{

    

    //Modal
    // const [showModal, setShowModal] = useState(false)

    return(
        <div>

            {buttons.map(({name, action}) => (
                <Button key={name} name={name} onclick={actions[action]} />
            ))}

            {/* <button onClick={() => setShowModal(true)}>Agregar pelicula</button> */}
            
            {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)}/> */}
        </div>
    )
}
export default Nav