import './delivery.scss'
import { useState } from 'react';
import avto from '../../img/avto.png';
import Modal from '../../Modal/Modal';
import Form from '../../Form/Form';

const Delivery = () => {
const [modal, setModal] = useState(false)

if (modal) {
  document.body.classList.add('modal')
} else {
  document.body.classList.remove('modal')
}
  return (
    <div className='delivery'>
      <div className="container">
        <div className="delivery__info">
          <div className="delivery__wrapp">
            <h1 className="delivery__title">Доставим газ за 4 часа</h1>
            <p className="delivery__text">в любую точку  Москвыи Московской области</p>
            <button className='delivery__btn' type='button' onClick={() => setModal(true)}> Заказать доставку газа </button>
          </div>
            <img className='delivery__img' src={avto} alt="avto-img" />      
        </div>
        <Modal isOpen={modal} onClose={() => setModal(false)} >
          <h2 className="delivery__form">Доставим газ</h2>
          <Form />
        </Modal>
      </div>
    </div>
  )
}

export default Delivery
