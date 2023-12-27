import InfoRow from './InfoRow';
import {user} from '../../img';
import './info.scss';

const Info = () => {
  return (
    <div className='info'>
      <div className="container">
        <InfoRow title='Не нашли ответа на свой вопрос задайте их нашему специалисту' img={user} text='Роман Ш.' desc='Старший менеджер'/>
      </div>
    </div>
  )
}

export default Info
