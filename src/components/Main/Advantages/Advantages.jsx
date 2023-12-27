import './advantages.scss';
import { card, card1, card2, card3, card4, card5, card6, card7, card8 } from '../../img';
import AdvantagesCard from './AdvantagesCard';

const Advantages = () => {
  return (
    <div className='advantages'>
      <div className="container">
        <h2 className="advantages__title">
          Преимущества работы с нашей компанией
        </h2>
        <div className="advantages__wrapper">
          <AdvantagesCard img={card} text='Экономия на хранилище' desc='за счёт собственных цистерн на нашей базе'/>
          <AdvantagesCard img={card1} text='Экономия на транспорте' desc='более 10 собственный газовозов'/>
          <AdvantagesCard img={card2} text='Поставки напрямую от производителей' desc='нет наценки на стоимость газа как у перекупщиков и небольших частных компаний'/>
          <AdvantagesCard img={card3} text='Любые объёмы поставки качественного газа' desc='вы получаете объем от 1 тонны до 20 тонн, с сертификатом качества газа'/>
          <AdvantagesCard img={card4} text='Оплата удобным для вас способом' desc='все газовозы оснащены терминалами для оплаты вашего заказа'/>
          <AdvantagesCard img={card5} text='Чистый газ без примесей' desc='нет наценки на стоимость газа как у перекупщиков и небольших частных компаний'/>
          <AdvantagesCard img={card6} text='Длина заправочных рукавов — 50 метров' desc='не требуется подъезд автомобиля вплотную к резервуару'/>
          <AdvantagesCard img={card7} text='Доставка сжиженного газа в формате 24/7' desc='привезем газ в удобное для вас время или же  по графику'/>
          <AdvantagesCard img={card8} text='Аттестованный персонал' desc='квалифицированные сотрудники проведут полную консультацию и дадут рекомендации, если такие нужны будут'/>
        </div>
      </div>
    </div>
  )
}

export default Advantages
