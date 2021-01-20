import React , {Component} from 'react'
import Nav from './Nav'



class Header extends Component{
    state={
        open: false
    }

    menuClick = () =>{
        this.setState(prev => ({
            open: !prev.open
        }))
    }

    // click = () =>{
    //     this.menuClick()
    //     this.state.open === true ? console.log('open') : console.log('closed')
    // }

    render(){
        return(
            <section className='header'>

                <Nav 
                class = 'list-items'
                header = {true}
                menuClick = {this.menuClick}
                ul='nav-ul'
                logoClass = 'logo'
                sectionName='nav-section'
                state={this.state.open}
                />

                {this.state.open === true && (
                    <div className='mobile-menu'>
                        <Nav
                            class = 'mobile-list'
                            ul='mobile-ul'
                            logoClass = 'mobile-logo'
                            sectionName='mobile-section'
                       />
                    </div>
                )}
                <p className="intro-text">
                    IMMERSIVE <br/> EXPERIENCES <br/> THAT DELIVER
                </p>
            </section>
        )
    }
}

export default Header