import React, { useState } from "react"

const ImageSlider = props => {

    const [current, setCurrent] = useState(0);

    const Previous = () => {
        setCurrent(prev => prev === 0 ? props.photo.length -1 : prev - 1)
    }

    const Next = () => {
        setCurrent(nex => nex === props.photo.lenght - 1 ? 0 : nex + 1)
    }

    return (
        <div className="slider">
            <button onClick={Previous} className="slider__button">❮</button>
            <img src={props.photo[current].url} alt={props.photo[current].title} className="slider__img" />
            <button onClick={Next} className="slider__button">❯</button>
        </div>
    )
}

export default ImageSlider