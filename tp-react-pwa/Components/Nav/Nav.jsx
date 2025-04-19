import Styles from './Nav.module.css'
import Button from '../Button/Button'
import Search from "../../Components/Search/Search"


const Nav = ({items})=>{

    const componentMap = {
        Button: Button,
        Search: Search,
    }
    const propsMap = {
        Button: (action) => ({ onclick: action }), 
        Search: ( action ) => ({ setSearch: action }),
      };

    //Modal
    // const [showModal, setShowModal] = useState(false)

    return(
        <div className={Styles.navContainer}>

            {items.map(({name, action, type}) => {

                const Component = componentMap[type]
                if(!Component){

                    console.error(`El tipo "${type}" no está definido en el mapeo de componentes.`);
                    // return null;
                }

                const dynamicProps = propsMap[type](action)

                return(
                    <Component key={name} name={name} {...dynamicProps}/>
                )
                
            })}

          
        </div>
    )
}
export default Nav