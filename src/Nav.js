import logo from './images/logo.svg'
import icon from './images/icon-hamburger.svg'

const navItems = ['About', 'Careers', 'Events', 
'Products', 'Support']

const Nav = (props) => {
    return (
        <nav className={props.sectionName}>

                    <div className='logo-wrapper'>
                        <img className={props.logoClass} src={logo} alt="company's logo"/>
                    </div>

                    <ul className={props.ul}>
                        {navItems.map((item, index)=>(
                            <li className={props.class} key={index}>{item}</li>
                        ))}
                    </ul>
                    
                   {props.header === true? (
                        props.state === false ?(
                            <img className='menu-icon' src={icon} onClick={props.menuClick} alt="hamburger-icon"/>
                        ) : (
                            <span className='close-icon' onClick={props.menuClick} alt="close-icon">X</span>
                        )
                   ) : null}

                </nav>

    )
}

export default Nav
