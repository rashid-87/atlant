import {useForm} from "react-hook-form";

const Forms = () => {
  const {register, formState: {errors}, handleSubmit, reset} = useForm({mode: "onBlur"});

  const onSubmit = (formDate) => {
    console.log(formDate);
    reset()
  }

  return (
    <div className="form">
    <form className="info__post" onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input className="info__name" {...register("firstAge", {
            required: "Поле не должо быть пустым",
              minLength: {
              value: 3,
              message: "Минимум три буквы",
            }
          })} placeholder="имя" />
      </label>
      <div>
        {errors?.firstAge && (
          <span className="form__red">{errors?.firstAge.message || "Error!"}</span>
        )}
        </div>
      <label>
        <input className="info__name" {...register("test", {
              required: "Введите номер телефона",
              minLength: {
              value: 12,
              message: "Минимум 12 номер",
            }
          })} type="tel" placeholder="Телефон" />
      </label>
      <div>
        {errors?.test && (
          <span className="form__red">{errors?.test.message || "Error!"}</span>
        )}
        </div>
      <label>
        <textarea className="info__name info__active" {...register("first", {
            required: "Поле не должо быть пустым",
              minLength: {
              value: 3,
              message: "Минимум три буквы",
            }
          })} placeholder="ваш вопрос" />
      </label>
      <div>
        {errors?.first && (
          <span className="form__red">{errors?.first.message || "Error!"}</span>
        )}
        </div>
      <button className="info__btn" type="submit"> Задать вопрос  </button>
    </form>
  </div>
  )
}

export default Forms
