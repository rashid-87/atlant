
const AdvantagesCard = ({img, text, desc}) => {
  return (
    <div className="advantages__card">
      <img className="advantages__img" src={img} alt="advantages-img" />
      <h5 className="advantages__text">{text}</h5>
      <p className="advantages__desc">{desc}</p>
    </div>
  )
}

export default AdvantagesCard
