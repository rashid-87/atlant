import "./address.scss";

const Address = () => {
  return (
    <div className="address">
      <div className="container">
        <div className="address__wrapper">
          <div className="address__wrapp">
            <h3 className="address__title">Посетите наш уютный офис</h3>
            <h4 className="address__subtitle">
              где мы сможем вас полностью проконсультировать по всем вопросам
            </h4>
            <div className="address__row">
              <h5 className="address__text">Офис</h5>
              <h6 className="address__desc">Видное , Белокаменное шоссе, 20</h6>
            </div>
            <div className="address__row">
              <h5 className="address__text">Телефон:</h5>
              <h6 className="address__desc">+7 926 330-68-34</h6>
            </div>
          </div>
          <div className="address__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.9528469976945!2d37.73820914333182!3d55.67324006200126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab45c757f0393%3A0xb4674160f9db4931!2z0JvRjtCx0LvQuNC90YHQutCw0Y8g0YPQuy4sINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGP!5e0!3m2!1sru!2skg!4v1703224979217!5m2!1sru!2skg"
              title="Люблино"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
