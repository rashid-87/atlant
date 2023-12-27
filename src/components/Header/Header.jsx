import './header.scss';
import logo from '../img/Logo.svg';

const Header = () => {

  return (
    <div className='header'>
      <div className="container">
        <div className="header__wrapper">
          <img className='header__img' src={logo} alt="logo-svg" />
          <div className="header__row">
            <a className="header__tel" href="tel:+7 926 330-68-34">+7 926 330-68-34</a>
            <p className="header__text">Срочный вопрос</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
