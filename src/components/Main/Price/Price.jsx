import PriceCard from './PriceCard';
import img from '../../img/price.png'
import './price.scss';

const Price = () => {
  return (
    <div className='price'>
      <div className="container">
        <h2 className="price__title">Стоимость газа в ваш газгольдер сегодня</h2>
        <div className="price__wrapper">
          <PriceCard suptitle="Пропан" text='от 25 рублей за литр' desc="Физически испарение происходит до -40 градусов, что позволяет использовать его в наших с вами погодных условиях" btn="Заказать"/>
          <div className="price__wrapp price__row">
            <div className="price__rows">
             <div><span>80%</span><span>Пропана</span></div>
             <div><span>20%</span><span>Бутана</span></div>
            </div>
            <img src={img} alt="price-img" />
          </div>
          <PriceCard suptitle="Бутан" text='от 16 рублей за литр' desc="Испарение Бутана происходит только до 0 градусов и годится для использования в тёплое время года" btn="Заказать"/>
        </div>
      </div>
    </div>
  )
}

export default Price
