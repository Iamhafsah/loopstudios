// import './images/desktop'
import cardDetails from './CardDetails'

const Section3 = () => {
    return (
        <section className='section-3'>
            <h2>OUR CREATIONS</h2>

            <div className="card-containers">
                {cardDetails.map((card, index)=>(
                    <div className={card.class} key={index}>
                        <span className='card-text'>
                            {card.caption}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Section3
