import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
import { useDispatch } from "react-redux";
import { postContacto } from "../../redux/actions/actions";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [target]: value });
    validation({ ...form, [target]: value }, errors, setErrors, target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Su mensaje ha sido enviado correctamente");
    dispatch(postContacto(form));
    setForm({ name: "", email: "", tel: "", message: "" });
    setErrors({ name: "", email: "", tel: "", message: "" });
  };
  return (
    <div className={style.body}>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        className={style.titleContainer}
      >
        <h1 className={style.title}>Registrate para recibir más información</h1>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div data-aos="fade-left" className={style.section}>
          <div className={style.triangle}></div>
          <div className={style.subSection}>
            <label htmlFor="name" className={style.label}>
              NOMBRE
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre"
              className={!errors.name ? style.input : style.error}
            ></input>
            <label className={style.errorLabel}>{errors.name}</label>
          </div>
        </div>
        <div data-aos="fade-left" className={style.section}>
          <div className={style.triangle}></div>
          <div className={style.subSection}>
            <label htmlFor="email" className={style.label}>
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className={!errors.email ? style.input : style.error}
            ></input>
            <label className={style.errorLabel}>{errors.email}</label>
          </div>
        </div>
        <div data-aos="fade-left" className={style.section}>
          <div className={style.triangle}></div>
          <div className={style.subSection}>
            <label htmlFor="tel" className={style.label}>
              WHATSAPP
            </label>
            <input
              id="tel"
              name="tel"
              type="number"
              value={form.tel}
              onChange={handleChange}
              placeholder="Whatsapp"
              className={!errors.tel ? style.input : style.error}
            ></input>
            <label className={style.errorLabel}>{errors.tel}</label>
          </div>
        </div>
        <div data-aos="fade-left" className={style.section}>
          <div className={style.triangle}></div>
          <div className={style.subSection}>
            <label htmlFor="message" className={style.label}>
              MENSAJE
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              value={form.message}
              onChange={handleChange}
              placeholder="Mensaje"
              className={style.input}
            ></textarea>
          </div>
        </div>
        <button
          className={
            !errors.name &&
            !errors.email &&
            !errors.tel &&
            form.name &&
            form.email &&
            form.tel
              ? style.button
              : style.buttonDisabled
          }
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
