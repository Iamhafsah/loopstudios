import Nav from './Nav'
import instagram from './images/icon-instagram.svg'
import facebook from './images/icon-facebook.svg'
import pinterest from './images/icon-pinterest.svg'
import twitter from './images/icon-twitter.svg'


const socialIcons =[instagram, facebook, pinterest, twitter]

const Footer = () => {
    return (
        <section className='footer'>
            <div className="left">

                <Nav 
                class='footer-items'
                ul='footer-ul'
                logoClass = 'footer-logo'
                sectionName='footer-section'
                />

            </div>

            <div className="right">
                {socialIcons.map((icon, index)=>(
                    <img className='social-icons' key={index} src={icon} alt='social media icon'/>
                ))}

                <p> © 2021 Loopstudios All Rights Reserved</p>

            </div>
        </section>
    )
}

export default Footer
