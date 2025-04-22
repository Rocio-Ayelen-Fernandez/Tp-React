import Styles from './Nav.module.css'
import Button from '../Button/Button'
import Search from "../../Components/Search/Search"
import { Plus, Menu } from 'lucide-react';


const items = [
    { name: "Agregar", type: "Button", icon: <Plus /> },
    { name: "Buscar",  type: "Search" },
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

    //Modal
    // const [showModal, setShowModal] = useState(false)

    return (
        <div className={Styles.navContainer}>

            {items.map(({ name, type, icon }) => {

                const Component = componentMap[type]
                if (!Component) {

                    console.error(`El tipo "${type}" no está definido en el mapeo de componentes.`);
                    // return null;
                }

                
                const dynamicProps = propsMap[type](actions[name])
                // console.log(`Rendering ${name} with props:`, dynamicProps)

                return (
                    <Component key={name} name={name} {...dynamicProps}>
                        {icon && <span className={Styles.icon}>{icon}</span>}
                        {name && <span className={Styles[`component${name}`]}>{name}</span>}
                    </Component>
                )

            })}


        </div>
    )
}
export default Nav