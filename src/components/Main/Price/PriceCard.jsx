import { useState } from 'react';
import Modal from '../../Modal/Modal';
import Form from '../../Form/Form';

const PriceCard = ({suptitle, text, desc, btn}) => {
  const [modal, setModal] = useState(false)
  if (modal) {
    document.body.classList.add('modal')
  } else {
    document.body.classList.remove('modal')
  }
  return (
    <div className="price__wrapp">
      <h3 className="price__suptitle">{suptitle}</h3>
      <h4 className="price__text">{text}</h4>
      <p className="price__desc">{desc}</p>
      <button className="price__btn" type="button" onClick={() => setModal(true)}>{btn}</button>
      <Modal isOpen={modal} onClose={() => setModal(false)} >
          <h2 className="delivery__form">Доставим газ</h2>
          <Form />
        </Modal>
    </div>
  )
}

export default PriceCard
