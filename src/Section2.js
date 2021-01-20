import image from './images/desktop/image-interactive.jpg';

const Section2 = () => {
    return (
        <section className='section-2'>
            <div className="img-container">
                <div className="game-man">
                    <img src={image} alt=""/>
                </div>
                <aside className='interactive-vr-text'>
                <h2>The leader in <br/> interactive VR</h2>

                <p>
                 Founded in 2011, Loopstudios has been producing world-class virtual reality
                 projects for some of the best companies around the globe. Our award-winning
                 creations have transformed businesses through digital experiences that bind
                 to their brand.
                </p>
                </aside>
            </div>
        </section>
    )
}

export default Section2