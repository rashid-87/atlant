import './partner.scss';
import {frame, frame1, frame2, frame3, frame4, frame5} from "../../img";

const Partner = () => {
  return (
    <div className='partner'>
      <div className="container">
        <div className="partner__wrapp">
            <img className="partner__img" src={frame} alt="partner-images" />
            <img className="partner__img" src={frame1} alt="partner-images" />
            <img className="partner__img" src={frame2} alt="partner-images" />
            <img className="partner__img" src={frame3} alt="partner-images" />
            <img className="partner__img" src={frame4} alt="partner-images" />
            <img className="partner__img" src={frame5} alt="partner-images" />
        </div>
      </div>
    </div>
  )
}

export default Partner
