import './slider.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { valentina, oleg, irina } from '../../img';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SliderRow from './SliderRow';


const Slider = () => {
  return (
    <div className='slider'>
      <div className='container'>
        <h2 className='slider__title'>Отзывы наших клиентов</h2>
         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><SliderRow img={valentina} info='Ольга И.' desc='Красногорск' text='Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.'/></SwiperSlide>
        <SwiperSlide><SliderRow img={oleg} info='Олег Р.' desc='Москва' text='Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.'/></SwiperSlide>
        <SwiperSlide><SliderRow img={irina} info='Ирина M.' desc='Санкт-Петербург' text='Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.'/></SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Slider
