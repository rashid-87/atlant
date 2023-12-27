import {avto1, avto2, avto3, avto4} from '../../img';
import Modal from '../../Modal/Modal';
import Form from '../../Form/Form';
import SelectCard from './SelectCard';
import {useState} from 'react'
import './select.scss';

const Celect = () => {
  const [tab, setTab] = useState(1)
  const [modal, setModal] = useState(false)
  if (modal) {
    document.body.classList.add('modal')
  } else {
    document.body.classList.remove('modal')
  }

  return (
    <div className='select'>
      <div className="container">
        <h2 className="select__title">Выберите свой объём Газовоза</h2>
        <div className="select__wrapper">
          <button className={`select__btn ${tab === 1 && 'select__active'}`} onClick={() => setTab(1)} type='button'>Малый  2000 л.</button>
          <button className={`select__btn ${tab === 2 && 'select__active'}`} onClick={() => setTab(2)} type='button'>Средний 6000 л.</button>
          <button className={`select__btn ${tab === 3 && 'select__active'}`} onClick={() => setTab(3)} type='button'>Стандартный 10 000 л.</button>
          <button className={`select__btn ${tab === 4 && 'select__active'}`} onClick={() => setTab(4)} type='button'>Оптовый 40 000 л.</button>
        </div>
        <div className="select__row">
          {
              tab === 1 ? <SelectCard images={avto1}/>
            : tab === 2 ? <SelectCard images={avto2}/>
            : tab === 3 ? <SelectCard images={avto3}/>
            : <SelectCard images={avto4}/>
          }
          
        </div>
        <div className="select__futer">
          <button className='select__button' onClick={() => setModal(true)}>Заказать газ</button>
        </div>
        <Modal isOpen={modal} onClose={() => setModal(false)} >
          <h2 className="delivery__form">Доставим газ</h2>
          <Form />
        </Modal>
      </div>
    </div>
  )
}

export default Celect
