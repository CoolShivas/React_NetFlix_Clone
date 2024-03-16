
const Card = (props) => {
    // console.log(props);
    return <>
        <div className='main_container'>
            <div className='card'>
                <img src={props.imgSrc} alt="Image not found" className='card__img' />
                <div className='card__info'>
                    <span className='card__span'>
                        {props.title}
                    </span>
                    <h3 className='card__heading'> {props.seriesName} </h3>
                    <a href={props.link} target='_blank'>
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Card;