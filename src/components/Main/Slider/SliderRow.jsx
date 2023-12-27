
const SliderRow = ({img, info, desc, text}) => {
  return (
    <div className="slider__wrapper">
    <img className="slider__img" src={img} alt="slider-img" />
    <div className="slider__row">
      <h4 className="slider__info">{info}</h4>
      <h5 className="slider__desc">{desc}</h5>
      <p className="slider__text">{text}</p>
    </div>
    </div>
  )
}

export default SliderRow
