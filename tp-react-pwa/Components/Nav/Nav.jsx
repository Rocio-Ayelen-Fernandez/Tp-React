import Styles from './Nav.module.css'
import Button from '../Button/Button'
import Search from "../../Components/Search/Search"
import { Plus, Menu } from 'lucide-react';


const items = [
    { name: "Agregar", type: "Button", icon: <Plus /> },
    { name: "Search",  type: "Search" },
    { name: "Filtros", type: "Button", icon: <Menu /> },
  ];


const Nav = ({actions}) => {

    const componentMap = {
        Button: Button,
        Search: Search,
    }
    const propsMap = {
        Button: (action) => ({ onclick: action }),
        Search: (action) => ({ setSearch: action }),
    };

    //borrar codigo que no usan y esta comentado

    //Modal
    // const [showModal, setShowModal] = useState(false)

    return (
        <div className={Styles.navContainer}>

            {items.map(({ name, type, icon }) => {

                const Component = componentMap[type]
                if (!Component) {

                    console.error(`El tipo "${type}" no está definido en el mapeo de componentes.`);
                }

                
                const dynamicProps = propsMap[type](actions[name])
                console.log(`Rendering ${name} with props:`, dynamicProps)

                return (
                    <Component className={Styles[`component${name}`]} key={name} name={name} {...dynamicProps}>
                        {icon && <span className={Styles.icon}>{icon}</span>}
                        {name && <span>{name}</span>}
                    </Component>
                )

            })}


        </div>
    )
}

//borrar antes de entregar

// {console.log("A:",[`component${name}`])}
export default Nav