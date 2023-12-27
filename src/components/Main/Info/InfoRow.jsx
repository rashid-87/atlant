import Forms from "../../Forms/Forms";

const InfoRow = ({ title, img, text, desc }) => {
  return (
    <div className="info__wrapper">
      <div className="info__row">
        <h2 className="info__title">{title}</h2>
        <Forms />
      </div>
      <div className="info__img">
        <img className="info__images" src={img} alt="info-img" />
          <div className="info__user">
            <p className="info__text">{text}</p>
            <p className="info__desc">{desc}</p>
          </div>
      </div>
    </div>
  );
};

export default InfoRow;
