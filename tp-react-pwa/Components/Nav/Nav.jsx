import Modal from '../Modal/Modal'
import Button from '../Button/Button'
//import Search from "../../Components/Search/Search"
import { useState } from 'react'

const Nav = ({action, buttons})=>{

    

    //Modal
    // const [showModal, setShowModal] = useState(false)

    return(
        <div>

            {buttons.map(({name}) => (
                <Button key={name} name={name} onclick={action} />
            ))}

            {/* <button onClick={() => setShowModal(true)}>Agregar pelicula</button> */}
            
            {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)}/> */}
        </div>
    )
}
export default Nav